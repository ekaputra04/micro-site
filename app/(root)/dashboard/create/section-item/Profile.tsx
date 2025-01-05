"use client";

import { Button } from "@/components/ui/button";
import { Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ProfileSection() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <>
      <div className="">
        <div className="relative w-full h-48">
          <img
            src="/images/background.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="top-2 right-2 absolute flex gap-2">
            <Label
              htmlFor="background"
              className="block border-input bg-background hover:bg-accent p-2 border rounded-md hover:text-accent-foreground"
            >
              <Pencil className="w-4 h-4" />
            </Label>
            <Input id="background" type="file" className="hidden" />
            <Button className="px-2 h-fit">
              <Trash className="w-4 h-4" />
            </Button>
          </div>
        </div>
        {/* pilih salah satu */}
        <div className="relative mx-auto -mt-12 rounded-md w-24 h-24 overflow-hidden">
          <img src="/images/batik.png" alt="" className="object-cover" />
        </div>
        {/* atau */}
        <div className="relative bg-gray-200 mx-auto -mt-12 rounded-md w-24 h-24 overflow-hidden">
          <Label
            htmlFor="profile"
            className="flex flex-col justify-center items-center gap-2 border h-full"
          >
            <Plus />
            <p>Add Profile</p>
          </Label>
          <Input id="profile" type="file" className="hidden" />
        </div>
        {/* end */}
      </div>
    </>
  );
}
