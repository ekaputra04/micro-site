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
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
