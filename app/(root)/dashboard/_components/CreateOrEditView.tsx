"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Share2 } from "lucide-react";
import ComponentView from "./ComponentView";
import SettingView from "./SettingView";
import PublicView from "../../PublicView";
import { useEffect, useState } from "react";
import { createPost, editPost, getPostBySlug } from "@/utils/postUtils";
import useAccordionStore from "@/hooks/useAccordionStore";
import useMainInformationStore from "@/hooks/useMainInformationStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useFileStore from "@/hooks/useFileStore";
import { uploadFile } from "@/utils/imageUtils";
import {
  initialFiles,
  initialItems,
  initialMainInformation,
} from "@/types/Consts";
import { MainInformationType, PostType } from "@/types/Types";
import { AccordionItem } from "@/types/AccordionItem";
import UseLoadingStore from "@/hooks/useLoading";
import LoadingPage from "@/app/loading";

interface CreateOrEditViewProps {
  userId?: string;
  type: "create" | "edit";
  post?: PostType;
}

export default function CreateOrEditView({
  userId,
  type,
  post,
}: CreateOrEditViewProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { items, setItems } = useAccordionStore();
  const { mainInformation, setMainInformation } = useMainInformationStore();
  const { itemsFile, setItemsFile } = useFileStore();
  const { isLoadingGlobal, setIsLoadingGlobal } = UseLoadingStore();

  const router = useRouter();

  useEffect(() => {
    if (type == "edit") {
      const postContent = JSON.parse(
        post?.content as string
      ) as AccordionItem[];
      setItems(postContent);

      const mainInformationData: MainInformationType = {
        title: post?.title ?? "",
        link: post?.slug ?? "",
        backgroundImage: post?.backgroundImage ?? "",
        backgroundColor: post?.backgroundColor ?? "",
        description: post?.description ?? "",
        iconImage: post?.iconImage ?? "",
      };

      setMainInformation(mainInformationData);
    }
  }, []);

  async function onSubmit() {
    setIsLoading(true);
    setIsLoadingGlobal(true);

    try {
      if (mainInformation.link === "" || mainInformation.title === "") {
        toast.error("Please fill title and link fields.");
        return;
      }

      if (type == "create") {
        const checkSlugExist = await getPostBySlug(mainInformation.link);

        if (checkSlugExist) {
          toast.error("Slug already exists");
          return;
        }
      }

      let profilePublicUrl: string | null = null;
      let headerPublicUrl: string | null = null;
      let backgroundPublicUrl: string | null = mainInformation.backgroundImage;
      let iconPublicUrl: string | null = null;

      const profileFile = itemsFile.find(
        (item) => item.type === "profileImage"
      )?.File;
      const headerFile = itemsFile.find(
        (item) => item.type === "headerImage"
      )?.File;
      const backgroundFile = itemsFile.find(
        (item) => item.type === "backgroundImage"
      )?.File;
      const iconFile = itemsFile.find(
        (item) => item.type === "iconImage"
      )?.File;

      if (profileFile) {
        const profileUploadResult = await uploadFile(profileFile);
        if (profileUploadResult.success) {
          profilePublicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${profileUploadResult.data?.path}`;
        } else {
          toast.error(`${profileUploadResult.message}`);
          throw new Error("Failed to upload profile image");
        }
      }

      if (headerFile) {
        const headerUploadResult = await uploadFile(headerFile);
        if (headerUploadResult.success) {
          headerPublicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${headerUploadResult.data?.path}`;
        } else {
          toast.error(`${headerUploadResult.message}`);
          throw new Error("Failed to upload header image");
        }
      }

      if (backgroundFile) {
        const backgroundUploadResult = await uploadFile(backgroundFile);
        if (backgroundUploadResult.success) {
          backgroundPublicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${backgroundUploadResult.data?.path}`;
        } else {
          toast.error(`${backgroundUploadResult.message}`);
          throw new Error("Failed to upload background image");
        }
      }

      if (iconFile) {
        const iconUploadResult = await uploadFile(iconFile);
        if (iconUploadResult.success) {
          iconPublicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${iconUploadResult.data?.path}`;
        } else {
          throw new Error("Failed to upload icon image");
        }
      }

      const updatedItems = useAccordionStore.getState().items.map((item) => {
        if (item.content.type === "profile") {
          return {
            ...item,
            content: {
              ...item.content,
              profileImage: profilePublicUrl || item.content.profileImage,
              headerImage: headerPublicUrl || item.content.headerImage,
            },
          };
        }
        return item;
      });

      setItems(updatedItems);

      if (type == "create") {
        const postCreated = await createPost(
          userId as string,
          mainInformation.link,
          mainInformation.title,
          mainInformation.backgroundColor,
          backgroundPublicUrl,
          updatedItems,
          iconPublicUrl as string,
          mainInformation.description
        );

        if (postCreated) {
          setItems(initialItems);
          setItemsFile(initialFiles);
          setMainInformation(initialMainInformation);
          toast.success(`${postCreated.title} has been created.`);
          router.push("/dashboard");
        }
        return;
      } else if (type == "edit") {
        if (!post) {
          throw new Error("Post is undefined");
        }

        const postEdited = await editPost(
          post.id,
          userId as string,
          mainInformation.title,
          mainInformation.backgroundColor,
          backgroundPublicUrl,
          updatedItems,
          iconPublicUrl as string,
          mainInformation.description
        );
        if (postEdited) {
          setItems(initialItems);
          setItemsFile(initialFiles);
          setMainInformation(initialMainInformation);
          toast.success("Post edited successfully");
          router.push("/dashboard");
        }
        return;
      }
    } catch (error) {
      console.error("Error creating/updating post:", error);
    } finally {
      setIsLoading(false);
      setIsLoadingGlobal(false);
    }
  }

  return (
    <>
      {isLoadingGlobal && <LoadingPage />}
      <div className="gap-8 grid grid-cols-2">
        <Tabs defaultValue="component" className="w-full">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="component">Component</TabsTrigger>
              <TabsTrigger value="setting">Setting</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-4">
              <Button variant={"outline"} className="rounded-full">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                className="bg-green-500 hover:bg-green-600"
                onClick={() => onSubmit()}
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
          <TabsContent value="component" className="py-8">
            <ComponentView />
          </TabsContent>
          <TabsContent value="setting" className="py-8">
            <SettingView type={type} />
          </TabsContent>
        </Tabs>

        <div className="relative top-0 bg-slate-900 p-8 w-full">
          <PublicView />
        </div>
      </div>
    </>
  );
}
