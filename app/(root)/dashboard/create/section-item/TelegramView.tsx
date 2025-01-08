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

  const itemLinkedIn = items.find((item) => item.content.type === "telegram");
  return (
    <>
      {itemLinkedIn?.content.type == "telegram" && (
        <div
          className={`${getIsActiveClassname(itemLinkedIn.isActive)} p-4 hover:scale-95 animate-in animate-out`}
        >
          <Link
            href={`https://t.me/${itemLinkedIn.content.username}`}
            target="_blank"
          >
            <div
              className={`relative flex items-center p-4 ${getShapeClassname(itemLinkedIn.content.shape)}`}
              style={{ background: itemLinkedIn.content.backgroundColor }}
            >
              <span
                className={`absolute p-2 border ${getShapeClassname(itemLinkedIn.content.shape)}`}
                style={{
                  color: itemLinkedIn.content.name.color,
                  background: lightenColorWithOpacity(
                    itemLinkedIn.content.backgroundColor
                  ),
                  borderColor: itemLinkedIn.content.name.color,
                }}
              >
                <IconBrandTelegram className="w-4 h-4" />
              </span>
              <p
                className={`w-full text-center ${getFontStyleClassname(itemLinkedIn.content.name.style)} ${getFontSizeClassname(itemLinkedIn.content.name.size)} `}
                style={{ color: itemLinkedIn.content.name.color }}
              >
                {itemLinkedIn.content.name.title}
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
