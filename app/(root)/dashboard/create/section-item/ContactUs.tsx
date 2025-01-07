"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAccordionStore from "@/hooks/useAccordionStore";
import { AccordionItem } from "@/types/AccordionItem";

interface ContactUsSectionProps {
  item: AccordionItem;
}

export default function ContactUsSection({ item }: ContactUsSectionProps) {
  const { updateItem } = useAccordionStore();

  const updateNameStyle = (
    type: "bold" | "italic" | "underline",
    value: boolean
  ) => {
    if (item.content.type === "phone") {
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

  const handleUpdateNameColor = (color: string = "#000000") => {
    if (item?.content?.type === "phone") {
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

  const handleUpdateNameTitle = (title: string = "Contact Us") => {
    if (item?.content?.type === "phone") {
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

  const handleUpdatePhoneNumber = (phoneNumber: string) => {
    if (item?.content?.type === "phone") {
      const formattedPhoneNumber = phoneNumber.startsWith("0")
        ? "+62" + phoneNumber.slice(1)
        : phoneNumber;

      updateItem(item.id, {
        content: {
          ...item.content,
          phoneNumber: formattedPhoneNumber,
        },
      });
    }
  };

  const updateNameSize = (size: "normal" | "large" | "small") => {
    if (item.content.type === "phone") {
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

  const handleUpdateBackgroundColor = (backgroundColor: string = "#f0f0f0") => {
    if (item?.content?.type === "phone") {
      updateItem(item.id, {
        content: {
          ...item.content,
          backgroundColor: backgroundColor,
        },
      });
    }
  };

  const updateShape = (shape: "square" | "rounded" | "circle") => {
    if (item.content.type === "phone") {
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
      {item.content.type === "phone" && (
        <div className="p-2">
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
                  className="px-2"
                >
                  Reset
                </Button>
              </div>
            </div>
            <Input
              placeholder="Input name here..."
              onChange={(e) => handleUpdateNameTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2 py-2">
            <p className="font-semibold">Phone Number</p>
            <Input
              placeholder="Input phone number here..."
              type="number"
              onChange={(e) => handleUpdatePhoneNumber(e.target.value)}
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
