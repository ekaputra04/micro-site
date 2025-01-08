"use client";

import useAccordionStore from "@/hooks/useAccordionStore";
import {
  getFontSizeClassname,
  getFontStyleClassname,
  getIsActiveClassname,
  getShapeClassname,
  lightenColorWithOpacity,
} from "@/utils/classNameUtils";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function EmailView() {
  const { items } = useAccordionStore();

  const itemEmail = items.find((item) => item.content.type === "email");
  return (
    <>
      {itemEmail?.content.type == "email" && (
        <div
          className={`${getIsActiveClassname(itemEmail.isActive)} p-4 hover:scale-95 animate-in animate-out`}
        >
          <Link href={`mailto:${itemEmail.content.email}`} target="_blank">
            <div
              className={`relative flex items-center p-4 ${getShapeClassname(itemEmail.content.shape)}`}
              style={{ background: itemEmail.content.backgroundColor }}
            >
              <span
                className={`absolute p-2 border ${getShapeClassname(itemEmail.content.shape)}`}
                style={{
                  color: itemEmail.content.name.color,
                  background: lightenColorWithOpacity(
                    itemEmail.content.backgroundColor
                  ),
                  borderColor: itemEmail.content.name.color,
                }}
              >
                <Mail className="w-4 h-4" />
              </span>
              <p
                className={`w-full text-center ${getFontStyleClassname(itemEmail.content.name.style)} ${getFontSizeClassname(itemEmail.content.name.size)} `}
                style={{ color: itemEmail.content.name.color }}
              >
                {itemEmail.content.name.title}
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
