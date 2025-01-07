import { Monitor } from "lucide-react";
import ProfileView from "./dashboard/create/section-item/ProfileView";
import { Button } from "@/components/ui/button";
import ContactUsView from "./dashboard/create/section-item/ContactUsView";
import useAccordionStore from "@/hooks/useAccordionStore";

export default function PublicView() {
  const { items } = useAccordionStore();
  return (
    <>
      {/* <p className="text-white">{JSON.stringify(items, null, 2)}</p> */}

      <div className="top-0 right-0 left-0 sticky rounded-xl h-96">
        <div className="flex justify-between items-center bg-slate-800 p-4">
          <p className="text-white">Link disini</p>
          <Button className="h-8">
            <Monitor className="w-4 h-4 text-white" />
          </Button>
        </div>
        <div className="bg-white overflow-y-scroll">
          {items.map((items) => (
            <div className="" key={items.id}>
              {items.title == "Profile" ? (
                <ProfileView />
              ) : items.title == "Contact Us" ? (
                <ContactUsView />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
