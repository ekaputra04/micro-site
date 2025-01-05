"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil, Share, Share2, Trash } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import ComponentView from "./ComponentView";
import SettingView from "./SettingView";

export default function CreateView() {
  return (
    <>
      <div className="gap-4 grid grid-cols-2">
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

        <div className="">tes</div>
      </div>
    </>
  );
}
