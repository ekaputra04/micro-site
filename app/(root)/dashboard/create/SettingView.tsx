"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ButtonTheme from "./ButtonTheme";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { themeData } from "@/types/themeData";
import useMainInformationStore from "@/hooks/useMainInformationStore";

export default function SettingView() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  const { items, setItems } = useMainInformationStore();

  function handleChangeTitle(title: string) {
    setItems({
      ...items,
      title,
    });
  }

  function handleChangeLink(link: string) {
    setItems({
      ...items,
      link,
    });
  }

  return (
    <>
      {JSON.stringify(items)}
      <div className="space-y-4">
        <h2 className="font-bold text-2xl">📝 Main Information</h2>
        <div className="">
          <Label htmlFor="title">Title</Label>
          <Input
            type="title"
            id="title"
            placeholder="Insert title here..."
            onChange={(e) => handleChangeTitle(e.target.value)}
          />
        </div>
        <div className="">
          <Label htmlFor="link">Link</Label>
          <Input
            type="link"
            id="link"
            placeholder="Insert link here..."
            onChange={(e) => handleChangeLink(e.target.value)}
          />
        </div>
        <hr />
        <h3 className="font-bold text-xl">🎨 Theme and Color</h3>
        <h4 className="font-semibold text-lg">Theme</h4>
        <div className="gap-2 grid xl:grid-cols-4 p-2 border rounded-md h-80 overflow-y-scroll">
          {themeData.map((theme, index) => (
            <ButtonTheme theme={theme} key={index} />
          ))}
        </div>

        <h4 className="font-semibold text-lg">Background Image</h4>

        <div className="relative bg-slate-200 w-full h-48 group">
          {items.backgroundImage ? (
            <img
              src={items.backgroundImage}
              alt=""
              className="relative mx-auto w-fit h-48 aspect-4/5 object-cover"
            />
          ) : null}
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
    </>
  );
}
