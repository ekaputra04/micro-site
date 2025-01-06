"use client";

import { Button } from "@/components/ui/button";
import { Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AccordionContent, ProfileContent } from "@/types/AccordionContent";
import useAccordionStore, { AccordionItem } from "@/hooks/useAccordionStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getShapeClassname } from "@/utils/classNameUtils";

interface ProfileSectionProps {
  item: AccordionItem;
}

export default function ProfileSection({ item }: ProfileSectionProps) {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  const { items, moveUp, moveDown, removeItem, toggleActive, updateItem } =
    useAccordionStore();

  const [shapeClassname, setShapeClassname] = useState<string>();

  const handleUpdateBackgroundColor = (backgroundColor: string) => {
    const currentItem = useAccordionStore
      .getState()
      .items.find((i) => i.id === item.id);

    if (currentItem?.content?.type === "profile") {
      updateItem(item.id, {
        content: {
          ...currentItem.content, // Salin semua properti lain
          backgroundColor: backgroundColor, // Perbarui hanya backgroundColor
        },
      });
    }
  };

  const updateShape = (shape: "square" | "rounded" | "circle") => {
    if (item.content.type === "profile") {
      updateItem(item.id, {
        content: {
          ...item.content,
          shape: shape,
        },
      });
    }
  };

  return (
    <>
      {JSON.stringify(item, null, 2)}
      {item.content.type === "profile" && (
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
                className={`block border-input bg-background hover:bg-accent p-2 border  hover:text-accent-foreground  `}
              >
                {/* ${convertShapeClassname(item.content.shape as "square" | "rounded" | "circle")} */}
                <Pencil className="w-4 h-4" />
              </Label>
              <Input id="background" type="file" className="hidden" />
              <Button className="px-2 h-fit">
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {item.content.headerImage == "/images/background.png" ? (
            <div
              className={`relative mx-auto -mt-12  w-24 h-24 overflow-hidden ${getShapeClassname(item.content.shape as "square" | "rounded" | "circle")}`}
            >
              <img src="/images/batik.png" alt="" className={`object-cover `} />
            </div>
          ) : (
            <div className="relative bg-gray-200 mx-auto -mt-12 w-24 h-24 overflow-hidden">
              <Label
                htmlFor="profile"
                className={`flex flex-col justify-center items-center gap-2 border h-full hover:cursor-pointer ${getShapeClassname(item.content.shape as "square" | "rounded" | "circle")}`}
              >
                <Plus className="text-black" />
                <p className="text-black">Add Photo</p>
              </Label>
              <Input id="profile" type="file" className="hidden" />
            </div>
          )}

          <div className="flex justify-between gap-4 pt-8">
            <div className="">
              <p className="font-semibold">Profile Background Color</p>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  name="profile-color"
                  id="backgroundColor"
                  defaultValue={item.content.backgroundColor}
                  onChange={(e) => handleUpdateBackgroundColor(e.target.value)}
                />
                <p className="underline" onClick={() => console.log("Reset")}>
                  Reset
                </p>
              </div>
            </div>
            <div className="">
              <Select
                defaultValue={item.content.shape}
                onValueChange={(value) =>
                  updateShape(value as "square" | "rounded" | "circle")
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Shape" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="rounded">Rounded</SelectItem>
                  <SelectItem value="circle">Circle</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
