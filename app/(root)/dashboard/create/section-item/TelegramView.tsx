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

export default function TelegramView() {
  const { items } = useAccordionStore();

  const itemTelegram = items.find((item) => item.content.type === "telegram");
  return (
    <>
      {itemTelegram?.content.type == "telegram" && (
        <div
          className={`${getIsActiveClassname(itemTelegram.isActive)} p-4 hover:scale-95 animate-in animate-out`}
        >
          <Link
            href={`https://t.me/${itemTelegram.content.username}`}
            target="_blank"
          >
            <div
              className={`relative flex items-center p-4 ${getShapeClassname(itemTelegram.content.shape)}`}
              style={{ background: itemTelegram.content.backgroundColor }}
            >
              <span
                className={`absolute p-2 border ${getShapeClassname(itemTelegram.content.shape)}`}
                style={{
                  color: itemTelegram.content.name.color,
                  background: lightenColorWithOpacity(
                    itemTelegram.content.backgroundColor
                  ),
                  borderColor: itemTelegram.content.name.color,
                }}
              >
                <IconBrandTelegram className="w-4 h-4" />
              </span>
              <p
                className={`w-full text-center ${getFontStyleClassname(itemTelegram.content.name.style)} ${getFontSizeClassname(itemTelegram.content.name.size)} `}
                style={{ color: itemTelegram.content.name.color }}
              >
                {itemTelegram.content.name.title}
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
