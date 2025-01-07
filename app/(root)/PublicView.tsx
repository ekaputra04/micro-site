import { Monitor } from "lucide-react";
import ProfileView from "./dashboard/create/section-item/ProfileView";
import { Button } from "@/components/ui/button";

export default function PublicView() {
  return (
    <>
      <div className="top-0 right-0 left-0 sticky rounded-xl h-96">
        <div className="flex justify-between items-center bg-slate-800 p-4">
          <p className="text-white">Link disini</p>
          <Button className="h-8">
            <Monitor className="w-4 h-4 text-white" />
          </Button>
        </div>
        <div className="bg-white overflow-y-scroll">
          <ProfileView />
        </div>
      </div>
    </>
  );
}
