"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface AddNewComponentProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}
export default function AddNewComponent({
  icon,
  name,
  description,
}: AddNewComponentProps) {
  return (
    <>
      <div className="flex justify-between gap-2">
        <div className="flex gap-2">
          <div className="p-1">{icon}</div>
          <div className="space-y-2">
            <h4 className="text-base">{name}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
        <Button className="justify-end px-2">
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </>
  );
}
