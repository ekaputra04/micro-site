"use client";

import { Monitor } from "lucide-react";
import ProfileView from "./dashboard/section-item/ProfileView";
import { Button } from "@/components/ui/button";
import ContactUsView from "./dashboard/section-item/ContactUsView";
import useAccordionStore from "@/hooks/useAccordionStore";
import TwitterView from "./dashboard/section-item/TwitterView";
import WhatsAppView from "./dashboard/section-item/WhatsAppView";
import EmailView from "./dashboard/section-item/EmailView";
import LinkedInView from "./dashboard/section-item/LinkedInView";
import TelegramView from "./dashboard/section-item/TelegramView";
import InstagramView from "./dashboard/section-item/InstagramView";
import SpaceView from "./dashboard/section-item/SpaceView";
import TextView from "./dashboard/section-item/TextView";
import useMainInformationStore from "@/hooks/useMainInformationStore";
import useFileStore from "@/hooks/useFileStore";

export default function PublicView() {
  const { items } = useAccordionStore();
  const { mainInformation } = useMainInformationStore();
  const { itemsFile } = useFileStore();

  return (
    <>
      <div className="top-16 right-0 left-0 sticky rounded-xl">
        <div className="flex justify-between items-center bg-slate-800 p-4">
          <p className="text-white">Link disini</p>
          <Button className="h-8">
            <Monitor className="w-4 h-4 text-white" />
          </Button>
        </div>
        <div
          className={`relative h-96 w-full overflow-y-scroll ${
            mainInformation.backgroundImage ? "bg-cover bg-center" : "bg-white"
          }`}
          style={{
            backgroundImage:
              itemsFile.find((item) => item.type === "backgroundImage")?.url ||
              mainInformation.backgroundImage
                ? `url(${itemsFile.find((item) => item.type === "backgroundImage")?.url || mainInformation.backgroundImage})`
                : undefined,
            backgroundColor: mainInformation.backgroundColor,
            objectFit: "cover",
          }}
        >
          {items.map((item) => (
            <div className="" key={item.id}>
              {item.content.type == "profile" ? (
                <ProfileView item={item} />
              ) : item.content.type == "phone" ? (
                <ContactUsView item={item} />
              ) : item.content.type == "twitter" ? (
                <TwitterView item={item} />
              ) : item.content.type == "whatsapp" ? (
                <WhatsAppView item={item} />
              ) : item.content.type == "email" ? (
                <EmailView item={item} />
              ) : item.content.type == "linkedIn" ? (
                <LinkedInView item={item} />
              ) : item.content.type == "telegram" ? (
                <TelegramView item={item} />
              ) : item.content.type == "instagram" ? (
                <InstagramView item={item} />
              ) : item.content.type == "space" ? (
                <SpaceView item={item} />
              ) : item.content.type == "text" ? (
                <TextView item={item} />
              ) : null}
            </div>
          ))}
          <div className="flex justify-center py-16">
            <div className="flex justify-center items-center gap-2 p-4 rounded-full animate-bounce">
              <p>Inspired by</p>
              <img
                src="/images/sid.png"
                alt="Logo"
                className="h-4 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
