"use client";

import { AccordionItem } from "@/types/AccordionItem";
import {
  getFontSizeClassname,
  getFontStyleClassname,
  getIsActiveClassname,
  getShapeClassname,
  lightenColorWithOpacity,
} from "@/utils/classNameUtils";
import { Phone } from "lucide-react";
import Link from "next/link";

interface ContactUsViewProps {
  item: AccordionItem;
}

export default function ContactUsView({ item }: ContactUsViewProps) {
  return (
    <>
      {item?.content.type == "phone" && (
        <div
          className={`${getIsActiveClassname(item.isActive)} p-4 hover:scale-95 animate-in animate-out`}
        >
          <Link href={`tel:${item.content.phoneNumber}`} target="_blank">
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
                <Phone className="w-4 h-4" />
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
