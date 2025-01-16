"use client";

import { AccordionItem } from "@/types/AccordionItem";
import {
  getFontSizeClassname,
  getFontStyleClassname,
  getIsActiveClassname,
} from "@/utils/classNameUtils";

interface TextViewProps {
  item: AccordionItem;
}

export default function TextView({ item }: TextViewProps) {
  return (
    <>
      {item?.content.type == "text" && (
        <div className={`${getIsActiveClassname(item.isActive)} p-4`}>
          <p
            className={`text-center ${getFontStyleClassname(item.content.text.style)} ${getFontSizeClassname(item.content.text.size)}`}
            style={{ color: item.content.text.color }}
          >
            {item.content.text.title}
          </p>
        </div>
      )}
    </>
  );
}
