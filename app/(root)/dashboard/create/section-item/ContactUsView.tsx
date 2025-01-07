"use client";

import useAccordionStore from "@/hooks/useAccordionStore";
import {
  getFontSizeClassname,
  getFontStyleClassname,
  getIsActiveClassname,
  getShapeClassname,
  lightenColorWithOpacity,
} from "@/utils/classNameUtils";
import { color } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function ContactUsView() {
  const { items } = useAccordionStore();

  const itemContactUs = items.find((item) => item.content.type === "phone");
  return (
    <>
      {itemContactUs?.content.type == "phone" && (
        <div className={`${getIsActiveClassname(itemContactUs.isActive)} p-4`}>
          <Link href={`tel:${itemContactUs.content.phoneNumber}`}>
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
                <Phone className="w-4 h-4" />
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
