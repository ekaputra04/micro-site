"use client";

import useAccordionStore from "@/hooks/useAccordionStore";
import {
  getSpaceSizeBorderClassname,
  getSpaceSizeClassname,
} from "@/utils/classNameUtils";

export default function SpaceView() {
  const { items } = useAccordionStore();

  const itemSpace = items.find((item) => item.content.type === "space");

  return (
    <>
      {itemSpace?.content.type == "space" && (
        <>
          {itemSpace.content.style == "default" ? (
            <div
              className={`${getSpaceSizeClassname(itemSpace.content.size)}`}
            ></div>
          ) : (
            <div className="px-4">
              <div
                className={`${getSpaceSizeBorderClassname(itemSpace.content.size)}`}
              ></div>
              <hr />
              <div
                className={`${getSpaceSizeBorderClassname(itemSpace.content.size)}`}
              ></div>
            </div>
          )}
        </>
      )}
    </>
  );
}
