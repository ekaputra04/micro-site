"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Share2 } from "lucide-react";
import ComponentView from "./ComponentView";
import SettingView from "./SettingView";
import PublicView from "../../PublicView";

export default function CreateView() {
  return (
    <>
      <div className="gap-8 grid grid-cols-2">
        <Tabs defaultValue="component" className="w-full">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="component">Component</TabsTrigger>
              <TabsTrigger value="setting">Setting</TabsTrigger>
            </TabsList>
            <Button variant={"outline"} className="rounded-full">
              <Share2 className="w-4 h-4" />
            </Button>
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
