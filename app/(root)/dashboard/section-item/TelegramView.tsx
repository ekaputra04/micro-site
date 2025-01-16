"use client";

import useAccordionStore from "@/hooks/useAccordionStore";
import { AccordionItem } from "@/types/AccordionItem";
import {
  getFontSizeClassname,
  getFontStyleClassname,
  getIsActiveClassname,
  getShapeClassname,
  lightenColorWithOpacity,
} from "@/utils/classNameUtils";
import { IconBrandTelegram } from "@tabler/icons-react";
import Link from "next/link";

interface TelegramViewProps {
  item: AccordionItem;
}

export default function TelegramView({ item }: TelegramViewProps) {
  return (
    <>
      {item?.content.type == "telegram" && (
        <div
          className={`${getIsActiveClassname(item.isActive)} p-4 hover:scale-95 animate-in animate-out`}
        >
          <Link href={`https://t.me/${item.content.username}`} target="_blank">
            <div
              className={`relative flex items-center p-4 ${getShapeClassname(item.content.shape)}`}
              style={{ background: item.content.backgroundColor }}
            >
              <span
                className={`absolute p-2 border ${getShapeClassname(item.content.shape)}`}
                style={{
                  color: item.content.name.color,
                  background: lightenColorWithOpacity(
                    item.content.backgroundColor
                  ),
                  borderColor: item.content.name.color,
                }}
              >
                <IconBrandTelegram className="w-4 h-4" />
              </span>
              <p
                className={`w-full text-center ${getFontStyleClassname(item.content.name.style)} ${getFontSizeClassname(item.content.name.size)} `}
                style={{ color: item.content.name.color }}
              >
                {item.content.name.title}
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
