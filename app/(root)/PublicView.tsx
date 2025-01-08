import { Monitor } from "lucide-react";
import ProfileView from "./dashboard/create/section-item/ProfileView";
import { Button } from "@/components/ui/button";
import ContactUsView from "./dashboard/create/section-item/ContactUsView";
import useAccordionStore from "@/hooks/useAccordionStore";
import TwitterView from "./dashboard/create/section-item/TwitterView";
import WhatsAppView from "./dashboard/create/section-item/WhatsAppView";
import EmailView from "./dashboard/create/section-item/EmailView";
import LinkedInView from "./dashboard/create/section-item/LinkedInView";
import TelegramView from "./dashboard/create/section-item/TelegramView";
import InstagramView from "./dashboard/create/section-item/InstagramView";
import SpaceView from "./dashboard/create/section-item/SpaceView";
import TextView from "./dashboard/create/section-item/TextView";

export default function PublicView() {
  const { items } = useAccordionStore();
  return (
    <>
      <div className="top-16 right-0 left-0 sticky rounded-xl">
        <div className="flex justify-between items-center bg-slate-800 p-4">
          <p className="text-white">Link disini</p>
          <Button className="h-8">
            <Monitor className="w-4 h-4 text-white" />
          </Button>
        </div>
        <div className="bg-white h-96 overflow-y-scroll">
          {items.map((item) => (
            <div className="" key={item.id}>
              {item.content.type == "profile" ? (
                <ProfileView />
              ) : item.content.type == "phone" ? (
                <ContactUsView />
              ) : item.content.type == "twitter" ? (
                <TwitterView />
              ) : item.content.type == "whatsapp" ? (
                <WhatsAppView />
              ) : item.content.type == "email" ? (
                <EmailView />
              ) : item.content.type == "linkedIn" ? (
                <LinkedInView />
              ) : item.content.type == "telegram" ? (
                <TelegramView />
              ) : item.content.type == "instagram" ? (
                <InstagramView />
              ) : item.content.type == "space" ? (
                <SpaceView />
              ) : item.content.type == "text" ? (
                <TextView />
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
