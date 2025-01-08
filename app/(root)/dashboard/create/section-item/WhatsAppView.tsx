"use client";

import useAccordionStore from "@/hooks/useAccordionStore";
import {
  getFontSizeClassname,
  getFontStyleClassname,
  getIsActiveClassname,
  getShapeClassname,
  lightenColorWithOpacity,
} from "@/utils/classNameUtils";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

export default function WhatsAppView() {
  const { items } = useAccordionStore();

  const itemContactUs = items.find((item) => item.content.type === "whatsapp");
  return (
    <>
      {itemContactUs?.content.type == "whatsapp" && (
        <div className={`${getIsActiveClassname(itemContactUs.isActive)} p-4`}>
          <Link
            href={`https://wa.me/${itemContactUs.content.phoneNumber}`}
            target="_blank"
          >
            <div
              className={`relative flex items-center p-4 ${getShapeClassname(itemContactUs.content.shape)}`}
              style={{ background: itemContactUs.content.backgroundColor }}
            >
              <span
                className={`absolute p-2 border ${getShapeClassname(itemContactUs.content.shape)}`}
                style={{
                  color: itemContactUs.content.name.color,
                  background: lightenColorWithOpacity(
                    itemContactUs.content.backgroundColor
                  ),
                  borderColor: itemContactUs.content.name.color,
                }}
              >
                <IconBrandWhatsapp className="w-4 h-4" />
              </span>
              <p
                className={`w-full text-center ${getFontStyleClassname(itemContactUs.content.name.style)} ${getFontSizeClassname(itemContactUs.content.name.size)} `}
                style={{ color: itemContactUs.content.name.color }}
              >
                {itemContactUs.content.name.title}
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
