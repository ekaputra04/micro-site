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
import { Shape, Size, Style } from "@/types/AccordionContent";
import { AccordionItem } from "@/types/AccordionItem";
import { COLOR } from "@/types/Consts";

interface TextSectionProps {
  item: AccordionItem;
}

export default function TextSection({ item }: TextSectionProps) {
  const { updateItem } = useAccordionStore();

  const handleUpdateTextStyle = (
    type: "bold" | "italic" | "underline",
    value: boolean
  ) => {
    if (item.content.type === "text") {
      updateItem(item.id, {
        content: {
          ...item.content,
          text: {
            ...item.content.text,
            style: {
              bold: type === "bold" ? value : item.content.text.style.bold,
              italic:
                type === "italic" ? value : item.content.text.style.italic,
              underline:
                type === "underline"
                  ? value
                  : item.content.text.style.underline,
            },
          },
        },
      });
    }
  };

  const handleUpdateTextColor = (color: string = COLOR.PRIMARY) => {
    if (item?.content?.type === "text") {
      updateItem(item.id, {
        content: {
          ...item.content,
          text: {
            ...item.content.text,
            color: color,
          },
        },
      });
    }
  };

  const handleUpdateTextSize = (size: Size) => {
    if (item.content.type === "text") {
      updateItem(item.id, {
        content: {
          ...item.content,
          text: {
            ...item.content.text,
            size: size,
          },
        },
      });
    }
  };

  const handleUpdateTextTitle = (title: string) => {
    if (item.content.type === "text") {
      updateItem(item.id, {
        content: {
          ...item.content,
          text: {
            ...item.content.text,
            title: title,
          },
        },
      });
    }
  };

  return (
    <>
      {JSON.stringify(item, null, 2)}
      {item.content.type === "text" && (
        <div className="p-2">
          <div className="space-y-2 py-2">
            <p className="font-semibold">Name</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Checkbox
                  id="nameBold"
                  onCheckedChange={(checked) =>
                    handleUpdateTextStyle("bold", checked == true)
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
                    handleUpdateTextStyle("italic", checked == true)
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
                    handleUpdateTextStyle("underline", checked == true)
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
                defaultValue={item.content.text.size}
                onValueChange={(value) => handleUpdateTextSize(value as Size)}
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
                  onChange={(e) => handleUpdateTextColor(e.target.value)}
                  value={item.content.text.color}
                />
                <Button
                  onClick={() => handleUpdateTextColor()}
                  variant={"ghost"}
                  className="px-2"
                >
                  Reset
                </Button>
              </div>
            </div>
            <Input
              placeholder="Input text here..."
              defaultValue={item.content.text.title}
              onChange={(e) => handleUpdateTextTitle(e.target.value)}
            />
          </div>
        </div>
      )}
    </>
  );
}
