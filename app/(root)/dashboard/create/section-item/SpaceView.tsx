"use client";

import useAccordionStore from "@/hooks/useAccordionStore";
import { AccordionItem } from "@/types/AccordionItem";
import {
  getSpaceSizeBorderClassname,
  getSpaceSizeClassname,
} from "@/utils/classNameUtils";

interface SpaceViewProps {
  item: AccordionItem;
}

export default function SpaceView({ item }: SpaceViewProps) {
  return (
    <>
      {item?.content.type == "space" && (
        <>
          {item.content.style == "default" ? (
            <div
              className={`${getSpaceSizeClassname(item.content.size)}`}
            ></div>
          ) : (
            <div className="px-4">
              <div
                className={`${getSpaceSizeBorderClassname(item.content.size)}`}
              ></div>
              <hr />
              <div
                className={`${getSpaceSizeBorderClassname(item.content.size)}`}
              ></div>
            </div>
          )}
        </>
      )}
    </>
  );
}
