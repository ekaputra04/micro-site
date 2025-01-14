"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Share2 } from "lucide-react";
import ComponentView from "./ComponentView";
import SettingView from "./SettingView";
import PublicView from "../../PublicView";
import { useState } from "react";
import { createPost } from "@/utils/postUtils";
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

export default function CreateView({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const { setItems } = useAccordionStore();
  const { mainInformation, setMainInformation } = useMainInformationStore();
  const { itemsFile, setItemsFile } = useFileStore();

  const router = useRouter();

  async function onSubmit() {
    setIsLoading(true);

    try {
      if (mainInformation.link === "" || mainInformation.title === "") {
        toast.error("Please fill in all the fields.");
        return;
      }

      let profilePublicUrl: string | null = null;
      let headerPublicUrl: string | null = null;
      let backgroundPublicUrl: string | null = mainInformation.backgroundImage;

      const profileFile = itemsFile.find(
        (item) => item.type === "profileImage"
      )?.File;
      const headerFile = itemsFile.find(
        (item) => item.type === "headerImage"
      )?.File;
      const backgroundFile = itemsFile.find(
        (item) => item.type === "backgroundImage"
      )?.File;

      if (profileFile) {
        const profileUploadResult = await uploadFile(profileFile);
        if (profileUploadResult.success) {
          profilePublicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${profileUploadResult.data?.path}`;
        } else {
          throw new Error("Failed to upload profile image");
        }
      }

      if (headerFile) {
        const headerUploadResult = await uploadFile(headerFile);
        if (headerUploadResult.success) {
          headerPublicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${headerUploadResult.data?.path}`;
        } else {
          throw new Error("Failed to upload header image");
        }
      }

      if (backgroundFile) {
        const backgroundUploadResult = await uploadFile(backgroundFile);
        if (backgroundUploadResult.success) {
          backgroundPublicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${backgroundUploadResult.data?.path}`;
        } else {
          throw new Error("Failed to upload background image");
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

      const post = await createPost(
        userId,
        mainInformation.link,
        mainInformation.title,
        mainInformation.backgroundColor,
        backgroundPublicUrl,
        updatedItems
      );

      if (post) {
        setItems(initialItems);
        setItemsFile(initialFiles);
        setMainInformation(initialMainInformation);
        toast.success(`${post.title} has been created.`);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
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
                onClick={() => {
                  onSubmit();
                }}
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
            <SettingView />
          </TabsContent>
        </Tabs>

        <div className="relative top-0 bg-slate-900 p-8 w-full">
          <PublicView />
        </div>
      </div>
    </>
  );
}
