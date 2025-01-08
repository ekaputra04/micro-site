"use client";

import useAccordionStore from "@/hooks/useAccordionStore";
import {
  getFontSizeClassname,
  getFontStyleClassname,
  getIsActiveClassname,
  getShapeClassname,
  lightenColorWithOpacity,
} from "@/utils/classNameUtils";
import { IconBrandTelegram } from "@tabler/icons-react";
import Link from "next/link";

export default function InstagramView() {
  const { items } = useAccordionStore();

  const itemInstagram = items.find((item) => item.content.type === "instagram");
  return (
    <>
      {itemInstagram?.content.type == "instagram" && (
        <div
          className={`${getIsActiveClassname(itemInstagram.isActive)} p-4 hover:scale-95 animate-in animate-out`}
        >
          <Link
            href={`https://instagram.com/${itemInstagram.content.username}`}
            target="_blank"
          >
            <div
              className={`relative flex items-center p-4 ${getShapeClassname(itemInstagram.content.shape)}`}
              style={{ background: itemInstagram.content.backgroundColor }}
            >
              <span
                className={`absolute p-2 border ${getShapeClassname(itemInstagram.content.shape)}`}
                style={{
                  color: itemInstagram.content.name.color,
                  background: lightenColorWithOpacity(
                    itemInstagram.content.backgroundColor
                  ),
                  borderColor: itemInstagram.content.name.color,
                }}
              >
                <IconBrandTelegram className="w-4 h-4" />
              </span>
              <p
                className={`w-full text-center ${getFontStyleClassname(itemInstagram.content.name.style)} ${getFontSizeClassname(itemInstagram.content.name.size)} `}
                style={{ color: itemInstagram.content.name.color }}
              >
                {itemInstagram.content.name.title}
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
