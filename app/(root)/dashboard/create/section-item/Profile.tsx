"use client";

import { Button } from "@/components/ui/button";
import { Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useAccordionStore, { AccordionItem } from "@/hooks/useAccordionStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getShapeClassname } from "@/utils/classNameUtils";
import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Checkbox } from "@/components/ui/checkbox";

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

  const handleUpdateBackgroundColor = (backgroundColor: string = "#f0f0f0") => {
    if (item?.content?.type === "profile") {
      updateItem(item.id, {
        content: {
          ...item.content,
          backgroundColor: backgroundColor,
        },
      });
    }
  };

  const handleUpdateNameColor = (color: string = "#000000") => {
    if (item?.content?.type === "profile") {
      useAccordionStore.getState().updateItem(item.id, {
        content: {
          ...item.content,
          name: {
            ...item.content.name,
            color: color,
          },
        },
      });
    }
  };

  const handleUpdateDescriptionColor = (color: string = "#000000") => {
    if (item?.content?.type === "profile") {
      useAccordionStore.getState().updateItem(item.id, {
        content: {
          ...item.content,
          description: {
            ...item.content.description,
            color: color,
          },
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

  const updateNameSize = (size: "normal" | "large" | "small") => {
    if (item.content.type === "profile") {
      updateItem(item.id, {
        content: {
          ...item.content,
          name: {
            ...item.content.name,
            size: size,
          },
        },
      });
    }
  };

  return (
    <>
      {JSON.stringify(item, null, 2)}
      {item.content.type === "profile" && (
        <div className="p-2">
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

          <div className="flex justify-between gap-4 pt-8 pb-4">
            <div className="">
              <p className="pb-2 font-semibold">Background Color</p>
              <div className="flex items-center gap-2">
                <Input
                  type="color"
                  name="profile-color"
                  id="backgroundColor"
                  className="w-16"
                  value={item.content.backgroundColor}
                  onChange={(e) => handleUpdateBackgroundColor(e.target.value)}
                />
                <Button
                  onClick={() => handleUpdateBackgroundColor()}
                  variant={"ghost"}
                >
                  Reset
                </Button>
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

          <div className="space-y-2 py-2">
            <p className="pb-2 font-semibold">Name</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="bold" checked={item.content.name.style.bold} />
                <label
                  htmlFor="bold"
                  className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
                >
                  Bold
                </label>
                <Checkbox
                  id="italic"
                  checked={item.content.name.style.italic}
                />
                <label
                  htmlFor="italic"
                  className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
                >
                  Italic
                </label>
                <Checkbox
                  id="underline"
                  checked={item.content.name.style.underline}
                />
                <label
                  htmlFor="underline"
                  className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
                >
                  Underline
                </label>
              </div>

              <Select
                defaultValue={item.content.name.size}
                onValueChange={(value) =>
                  updateNameSize(value as "normal" | "large" | "small")
                }
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Shape" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                  <SelectItem value="small">Small</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2">
                <Input
                  className="w-16"
                  type="color"
                  onChange={(e) => handleUpdateNameColor(e.target.value)}
                  value={item.content.name.color}
                />
                <Button
                  onClick={() => handleUpdateNameColor()}
                  variant={"ghost"}
                >
                  Reset
                </Button>
              </div>
            </div>
            <Input placeholder="Input name here..." />
          </div>

          <div className="py-2">
            <p className="pb-2 font-semibold">Description</p>
            <div className="flex justify-between gap-4">
              <Input placeholder="Input description here..." />
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold className="w-4 h-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic className="w-4 h-4" />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="strikethrough"
                  aria-label="Toggle strikethrough"
                >
                  <Underline className="w-4 h-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
