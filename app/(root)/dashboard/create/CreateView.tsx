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
              <h4 className="font-semibold text-lg">Theme</h4>
              <div className="gap-2 grid xl:grid-cols-4 p-2 border rounded-md h-64 overflow-y-scroll">
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
                <ButtonTheme />
              </div>

              <h4 className="font-semibold text-lg">Background Image</h4>

              <div className="relative bg-slate-200 w-full h-48 group">
                <img
                  src="/images/batik.png"
                  alt=""
                  className="relative mx-auto w-fit h-48 aspect-4/5 object-contain"
                />
                <div className="group-hover:block right-2 bottom-2 absolute space-x-2 hidden animate-in animate-out">
                  <Button variant={"outline"}>
                    <Trash className="w-4 h-4" />
                  </Button>
                  <Link href={"/"}>
                    <Button variant={"outline"}>
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <h4 className="font-semibold text-lg">Background Color</h4>

              <input
                type="color"
                onChange={(event) => {
                  console.log(event.target.value);
                }}
              />
              <h4 className="font-semibold text-lg">Background Dark</h4>
            </div>
          </TabsContent>
        </Tabs>

        <div className="">tes</div>
      </div>
    </>
  );
}

function ButtonTheme() {
  return (
    <>
      <button className="p-1 border rounded-md">
        <img
          src="/images/batik.png"
          alt="Image"
          className="aspect-4/5 object-cover"
        />
        <p>Batik</p>
      </button>
    </>
  );
}
