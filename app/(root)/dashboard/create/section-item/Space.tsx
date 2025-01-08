"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import useAccordionStore from "@/hooks/useAccordionStore";
import { AccordionItem } from "@/types/AccordionItem";

interface SpaceSectionProps {
  item: AccordionItem;
}

export default function SpaceSection({ item }: SpaceSectionProps) {
  const { updateItem } = useAccordionStore();

  const handleUpdateStyle = (style: "default" | "border") => {
    if (item.content.type === "space") {
      updateItem(item.id, {
        content: {
          ...item.content,
          style: style,
        },
      });
    }
  };

  const handleUpdateSize = (size: 1 | 2 | 3 | 4 | 5) => {
    if (item.content.type === "space") {
      updateItem(item.id, {
        content: {
          ...item.content,
          size: size,
        },
      });
    }
  };

  return (
    <>
      {JSON.stringify(item, null, 2)}
      {item.content.type === "space" && (
        <div className="flex gap-4 p-2">
          <div className="space-y-2 w-1/2">
            <p className="font-semibold">Style</p>
            <Select
              defaultValue={item.content.style}
              onValueChange={(value) =>
                handleUpdateStyle(value as "default" | "border")
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="border">Border</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4 w-1/2">
            <p className="font-semibold">Size</p>
            <Slider
              defaultValue={[item.content.size]}
              min={1}
              max={5}
              step={1}
              onValueChange={(e) => {
                const newSize = e[0] as 1 | 2 | 3 | 4 | 5;
                handleUpdateSize(newSize);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
