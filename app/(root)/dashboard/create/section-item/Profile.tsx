"use client";

import { Button } from "@/components/ui/button";
import { Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useAccordionStore from "@/hooks/useAccordionStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getShapeClassname } from "@/utils/classNameUtils";
import { Checkbox } from "@/components/ui/checkbox";
import { AccordionItem } from "@/types/AccordionItem";
import { COLOR } from "@/types/Consts";
import { Shape, Size } from "@/types/AccordionContent";
import useFileStore from "@/hooks/useFileStore";
import { toast } from "sonner";

interface ProfileSectionProps {
  item: AccordionItem;
}

export default function ProfileSection({ item }: ProfileSectionProps) {
  const { updateItem } = useAccordionStore();
  const { itemsFile, setItemsFile } = useFileStore();

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "profileImage" | "backgroundImage" | "headerImage"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1048576) {
        toast.error("Ukuran file maksimal adalah 1 MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const updatedItems = itemsFile.map((item) =>
          item.type === type
            ? { ...item, File: file, url: reader.result as string }
            : item
        );
        setItemsFile(updatedItems);
        e.target.value = "";
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteFile = (
    type: "profileImage" | "backgroundImage" | "headerImage"
  ) => {
    const updatedItems = itemsFile.map((item) =>
      item.type === type ? { ...item, File: null, url: null } : item
    );
    setItemsFile(updatedItems);
  };

  const handleUpdateBackgroundColor = (
    backgroundColor: string = COLOR.BACKGROUND
  ) => {
    if (item?.content?.type === "profile") {
      updateItem(item.id, {
        content: {
          ...item.content,
          backgroundColor: backgroundColor,
        },
      });
    }
  };

  const handleUpdateNameColor = (color: string = COLOR.PRIMARY) => {
    if (item?.content?.type === "profile") {
      updateItem(item.id, {
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

  const handleUpdateDescriptionColor = (color: string = COLOR.PRIMARY) => {
    if (item?.content?.type === "profile") {
      updateItem(item.id, {
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

  const handleUpdateNameTitle = (title: string = "Profile") => {
    if (item?.content?.type === "profile") {
      updateItem(item.id, {
        content: {
          ...item.content,
          name: {
            ...item.content.name,
            title: title,
          },
        },
      });
    }
  };

  const handleUpdateDescriptionTitle = (title: string = "Profile") => {
    if (item?.content?.type === "profile") {
      updateItem(item.id, {
        content: {
          ...item.content,
          description: {
            ...item.content.description,
            title: title,
          },
        },
      });
    }
  };

  const updateShape = (shape: Shape) => {
    if (item.content.type === "profile") {
      updateItem(item.id, {
        content: {
          ...item.content,
          shape: shape,
        },
      });
    }
  };

  const updateNameSize = (size: Size) => {
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

  const updateDescriptionSize = (size: Size) => {
    if (item.content.type === "profile") {
      updateItem(item.id, {
        content: {
          ...item.content,
          description: {
            ...item.content.description,
            size: size,
          },
        },
      });
    }
  };

  const updateNameStyle = (
    type: "bold" | "italic" | "underline",
    value: boolean
  ) => {
    if (item.content.type === "profile") {
      updateItem(item.id, {
        content: {
          ...item.content,
          name: {
            ...item.content.name,
            style: {
              bold: type === "bold" ? value : item.content.name.style.bold,
              italic:
                type === "italic" ? value : item.content.name.style.italic,
              underline:
                type === "underline"
                  ? value
                  : item.content.name.style.underline,
            },
          },
        },
      });
    }
  };

  const updateDescriptionStyle = (
    type: "bold" | "italic" | "underline",
    value: boolean
  ) => {
    if (item.content.type === "profile") {
      updateItem(item.id, {
        content: {
          ...item.content,
          description: {
            ...item.content.description,
            style: {
              bold:
                type === "bold" ? value : item.content.description.style.bold,
              italic:
                type === "italic"
                  ? value
                  : item.content.description.style.italic,
              underline:
                type === "underline"
                  ? value
                  : item.content.description.style.underline,
            },
          },
        },
      });
    }
  };

  return (
    <>
      {item.content.type === "profile" && (
        <div className="p-2">
          <div className="relative w-full h-48">
            <img
              src={
                itemsFile.find((item) => item.type === "headerImage")?.url ??
                item.content.headerImage
              }
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="top-2 right-2 absolute flex gap-2">
              <Label
                htmlFor="background"
                className={`block border-input bg-background hover:bg-accent p-2 border  hover:text-accent-foreground rounded-md hover:cursor-pointer`}
              >
                <Pencil className="w-4 h-4" />
              </Label>
              <Input
                id="background"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "headerImage")}
              />
              <Button
                className="px-2 h-fit"
                onClick={() => handleDeleteFile("headerImage")}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div
            className={`relative overflow-hidden mx-auto -mt-12  w-24 h-24  ${getShapeClassname(item.content.shape as Shape)}`}
          >
            <img
              src={
                itemsFile.find((item) => item.type === "profileImage")?.url ??
                item.content.profileImage
              }
              alt="Image"
              className={`object-cover `}
            />
          </div>

          <div className="flex justify-center gap-2 mx-auto mt-4">
            <Label
              htmlFor="profileImage"
              className={`block border-input bg-background hover:bg-accent p-2 border  hover:text-accent-foreground rounded-md hover:cursor-pointer`}
            >
              <Pencil className="w-4 h-4" />
            </Label>
            <Input
              id="profileImage"
              name="profileImage"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "profileImage")}
            />
            <Button
              className="px-2 h-fit"
              onClick={() => handleDeleteFile("profileImage")}
            >
              <Trash className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-2 py-2">
            <p className="font-semibold">Name</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Checkbox
                  id="nameBold"
                  onCheckedChange={(checked) =>
                    updateNameStyle("bold", checked == true)
                  }
                />
                <label
                  htmlFor="nameBold"
                  className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
                >
                  Bold
                </label>
                <Checkbox
                  id="nameItalic"
                  onCheckedChange={(checked) =>
                    updateNameStyle("italic", checked == true)
                  }
                />
                <label
                  htmlFor="nameItalic"
                  className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
                >
                  Italic
                </label>
                <Checkbox
                  id="nameUnderline"
                  onCheckedChange={(checked) =>
                    updateNameStyle("underline", checked == true)
                  }
                />
                <label
                  htmlFor="nameUnderline"
                  className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
                >
                  Underline
                </label>
              </div>

              <Select
                defaultValue={item.content.name.size}
                onValueChange={(value) => updateNameSize(value as Size)}
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
                  className="px-2"
                >
                  Reset
                </Button>
              </div>
            </div>
            <Input
              placeholder="Input name here..."
              defaultValue={item.content.name.title}
              onChange={(e) => handleUpdateNameTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2 py-2">
            <p className="font-semibold">Description</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Checkbox
                  id="DescriptionBold"
                  onCheckedChange={(checked) =>
                    updateDescriptionStyle("bold", checked == true)
                  }
                />
                <label
                  htmlFor="DescriptionBold"
                  className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
                >
                  Bold
                </label>
                <Checkbox
                  id="DescriptionItalic"
                  onCheckedChange={(checked) =>
                    updateDescriptionStyle("italic", checked == true)
                  }
                />
                <label
                  htmlFor="DescriptionItalic"
                  className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
                >
                  Italic
                </label>
                <Checkbox
                  id="DescriptionUnderline"
                  onCheckedChange={(checked) =>
                    updateDescriptionStyle("underline", checked == true)
                  }
                />
                <label
                  htmlFor="DescriptionUnderline"
                  className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
                >
                  Underline
                </label>
              </div>

              <Select
                defaultValue={item.content.name.size}
                onValueChange={(value) => updateDescriptionSize(value as Size)}
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
                  onChange={(e) => handleUpdateDescriptionColor(e.target.value)}
                  value={item.content.name.color}
                />
                <Button
                  onClick={() => handleUpdateDescriptionColor()}
                  variant={"ghost"}
                  className="px-2"
                >
                  Reset
                </Button>
              </div>
            </div>
            <Input
              placeholder="Input description here..."
              defaultValue={item.content.description.title}
              onChange={(e) => handleUpdateDescriptionTitle(e.target.value)}
            />
          </div>

          <div className="flex justify-between gap-4 pt-4">
            <div className="space-y-2">
              <p className="font-semibold">Background Color</p>
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

            <div className="space-y-2">
              <p className="font-semibold">Shape</p>
              <Select
                defaultValue={item.content.shape}
                onValueChange={(value) => updateShape(value as Shape)}
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
