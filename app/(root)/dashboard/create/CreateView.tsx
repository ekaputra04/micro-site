"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Share, Share2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CreateView() {
  return (
    <>
      <div className="gap-4 grid grid-cols-2">
        <Tabs defaultValue="komponen" className="w-full">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="komponen">Komponen</TabsTrigger>
              <TabsTrigger value="pengaturan">Pengaturan</TabsTrigger>
            </TabsList>
            <Button variant={"outline"} className="rounded-full">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>

          <TabsContent value="komponen" className="py-8">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="pengaturan" className="py-8">
            <div className="space-y-4">
              <h2 className="font-bold text-2xl">📝 Main Information</h2>
              <div className="">
                <Label htmlFor="title">Title</Label>
                <Input
                  type="title"
                  id="title"
                  placeholder="Insert title here..."
                />
              </div>
              <div className="">
                <Label htmlFor="link">Link</Label>
                <Input
                  type="link"
                  id="link"
                  placeholder="Insert link here..."
                />
              </div>
              <hr />
              <h3 className="font-bold text-xl">🎨 Theme and Color</h3>
            </div>
          </TabsContent>
        </Tabs>

        <div className="">tes</div>
      </div>
    </>
  );
}
