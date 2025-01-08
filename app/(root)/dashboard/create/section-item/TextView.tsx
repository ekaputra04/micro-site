"use client";

import useAccordionStore from "@/hooks/useAccordionStore";
import {
  getFontSizeClassname,
  getFontStyleClassname,
  getIsActiveClassname,
  getShapeClassname,
  lightenColorWithOpacity,
} from "@/utils/classNameUtils";

export default function TextView() {
  const { items } = useAccordionStore();

  const itemText = items.find((item) => item.content.type === "text");
  return (
    <>
      {itemText?.content.type == "text" && (
        <div className={`${getIsActiveClassname(itemText.isActive)} p-4`}>
          <p
            className={`text-center ${getFontStyleClassname(itemText.content.text.style)} ${getFontSizeClassname(itemText.content.text.size)}`}
            style={{ color: itemText.content.text.color }}
          >
            {itemText.content.text.title}
          </p>
        </div>
      )}
    </>
  );
}
