"use client";

import { Button } from "@/components/ui/button";
import useAccordionStore from "@/hooks/useAccordionStore";
import { AccordionContent } from "@/types/AccordionContent";
import { AccordionItem } from "@/types/AccordionItem";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface AddNewComponentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: AccordionContent;
  disabled: boolean;
}

export default function AddNewComponent({
  icon,
  title,
  description,
  content,
  disabled = false,
}: AddNewComponentProps) {
  const { addItem } = useAccordionStore();

  const handleAddComponent = () => {
    const newComponent = {
      title: title,
      content: content,
      isActive: true,
    };
    addItem(newComponent as AccordionItem);
    toast.success(title + " added successfully");
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
        <Button
          className="justify-end px-2"
          onClick={handleAddComponent}
          disabled={disabled}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </>
  );
}
