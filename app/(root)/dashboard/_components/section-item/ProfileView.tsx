"use client";

import useFileStore from "@/hooks/useFileStore";
import { AccordionItem } from "@/types/AccordionItem";
import {
  getFontSizeClassname,
  getFontStyleClassname,
  getIsActiveClassname,
  getShapeClassname,
} from "@/utils/classNameUtils";

interface ProfileViewProps {
  item: AccordionItem;
}

export default function ProfileView({ item }: ProfileViewProps) {
  const { itemsFile } = useFileStore();

  return (
    <>
      {item?.content.type == "profile" && (
        <div className={`${getIsActiveClassname(item.isActive)}`}>
          <div className="w-full h-48">
            <img
              src={
                itemsFile.find((item) => item.type === "headerImage")?.url ??
                item.content.headerImage
              }
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`relative mx-auto -mt-12  w-24 h-24 overflow-hidden ${getShapeClassname(item.content.shape)}`}
          >
            <img
              src={
                itemsFile.find((item) => item.type === "profileImage")?.url ??
                item.content.profileImage
              }
              alt=""
              className={`object-cover`}
            />
          </div>
          <div className="space-y-1 py-6">
            <h1
              className={`${getFontStyleClassname(item.content.name.style)} ${getFontSizeClassname(item.content.name.size)} text-center`}
              style={{ color: item.content.name.color }}
            >
              {item.content.name.title}
            </h1>
            <h1
              className={`${getFontStyleClassname(item.content.description.style)} ${getFontSizeClassname(item.content.description.size)} text-center`}
              style={{ color: item.content.description.color }}
            >
              {item.content.description.title}
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
