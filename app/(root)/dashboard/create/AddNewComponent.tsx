"use client";

import { Button } from "@/components/ui/button";
import useAccordionStore from "@/hooks/useAccordionStore";
import { AccordionContent } from "@/types/AccordionContent";
import { AccordionItem } from "@/types/AccordionItem";
import { Plus } from "lucide-react";

interface AddNewComponentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: AccordionContent;
}
export default function AddNewComponent({
  icon,
  title,
  description,
  content,
}: AddNewComponentProps) {
  const { addItem } = useAccordionStore();

  const handleAddComponent = () => {
    const newComponent = {
      title: title,
      content: content,
      isActive: true,
    };
    console.log(newComponent);

    addItem(newComponent as AccordionItem);
  };

  return (
    <>
      <div className="flex justify-between gap-2">
        <div className="flex gap-2">
          <div className="p-1">{icon}</div>
          <div className="space-y-2">
            <h4 className="text-base">{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
        <Button className="justify-end px-2" onClick={handleAddComponent}>
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </>
  );
}
