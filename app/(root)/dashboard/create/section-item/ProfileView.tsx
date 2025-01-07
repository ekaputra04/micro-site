"use client";

import useAccordionStore from "@/hooks/useAccordionStore";
import {
  getFontSizeClassname,
  getFontStyleClassname,
  getShapeClassname,
} from "@/utils/classNameUtils";

export default function ProfileView() {
  const { items } = useAccordionStore();

  const itemProfile = items.find((item) => item.content.type === "profile");

  return (
    <>
      {itemProfile?.content.type == "profile" && (
        <>
          <div className="w-full h-48">
            <img
              src={itemProfile.content.headerImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`relative mx-auto -mt-12  w-24 h-24 overflow-hidden ${getShapeClassname(itemProfile.content.shape)}`}
          >
            <img
              src={itemProfile.content.profileImage}
              alt=""
              className={`object-cover`}
            />
          </div>
          <div className="space-y-4 py-8">
            <h1
              className={`${getFontStyleClassname(itemProfile.content.name.style)} ${getFontSizeClassname(itemProfile.content.name.size)} text-center`}
              style={{ color: itemProfile.content.name.color }}
            >
              {itemProfile.content.name.title}
            </h1>
            <h1
              className={`${getFontStyleClassname(itemProfile.content.description.style)} ${getFontSizeClassname(itemProfile.content.description.size)} text-center`}
              style={{ color: itemProfile.content.description.color }}
            >
              {itemProfile.content.description.title}
            </h1>
          </div>
        </>
      )}
    </>
  );
}
