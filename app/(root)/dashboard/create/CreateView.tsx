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
import { redirect } from "next/navigation";

export default function CreateView({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const { items } = useAccordionStore();
  const { mainInformation } = useMainInformationStore();

  async function onSubmit() {
    setIsLoading(true);

    try {
      if (mainInformation.link == "" || mainInformation.title == "null") {
        toast.error("Please fill in all the fields.");
        return;
      }

      const post = await createPost(
        userId,
        mainInformation.link,
        mainInformation.title,
        mainInformation.backgroundColor,
        mainInformation.backgroundImage,
        items
      );
      if (post) {
        toast.success(post.title + " has been created.");
        redirect("/dashboard");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Unable to create post");
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
