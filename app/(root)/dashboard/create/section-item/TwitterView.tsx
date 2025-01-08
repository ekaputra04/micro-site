"use client";

import useAccordionStore from "@/hooks/useAccordionStore";
import {
  getFontSizeClassname,
  getFontStyleClassname,
  getIsActiveClassname,
  getShapeClassname,
  lightenColorWithOpacity,
} from "@/utils/classNameUtils";
import { Twitter } from "lucide-react";
import Link from "next/link";

export default function TwitterView() {
  const { items } = useAccordionStore();

  const itemTwitter = items.find((item) => item.content.type === "twitter");
  return (
    <>
      {itemTwitter?.content.type == "twitter" && (
        <div
          className={`${getIsActiveClassname(itemTwitter.isActive)} p-4 hover:scale-95 animate-in animate-out`}
        >
          <Link
            href={`https://twitter.com/${itemTwitter.content.link}`}
            target="_blank"
          >
            <div
              className={`relative flex items-center p-4 ${getShapeClassname(itemTwitter.content.shape)}`}
              style={{ background: itemTwitter.content.backgroundColor }}
            >
              <span
                className={`absolute p-2 border ${getShapeClassname(itemTwitter.content.shape)}`}
                style={{
                  color: itemTwitter.content.name.color,
                  background: lightenColorWithOpacity(
                    itemTwitter.content.backgroundColor
                  ),
                  borderColor: itemTwitter.content.name.color,
                }}
              >
                <Twitter className="w-4 h-4" />
              </span>
              <p
                className={`w-full text-center ${getFontStyleClassname(itemTwitter.content.name.style)} ${getFontSizeClassname(itemTwitter.content.name.size)} `}
                style={{ color: itemTwitter.content.name.color }}
              >
                {itemTwitter.content.name.title}
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
