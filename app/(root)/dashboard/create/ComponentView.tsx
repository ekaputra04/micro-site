"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import useAccordionStore from "@/hooks/useAccordionStore";
import { EllipsisVertical, MoveDown, MoveUp, Plus, Trash2 } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ProfileSection from "./section-item/Profile";
import ContactUsSection from "./section-item/ContactUs";

export default function ComponentView() {
  const { items, moveUp, moveDown, removeItem, toggleActive } =
    useAccordionStore();

  return (
    <>
      <div className="flex justify-between">
        <Button className="flex items-center gap-2 mb-4">
          <Plus className="w-4 h-4" />
          <p>Add new component</p>
        </Button>
        <Button className="bg-green-500">Save</Button>
      </div>

      <Accordion type="single" collapsible>
        {items.map((item, index) => (
          <AccordionItem key={item.id} value={item.id}>
            <div className="flex justify-between items-center">
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <div className="flex items-center gap-4">
                <Switch
                  checked={item.isActive}
                  onCheckedChange={() => toggleActive(item.id)}
                />
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Trash2 className="w-4 h-4" />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this component.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => removeItem(item.id)}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => moveUp(index)}
                      disabled={index === 0}
                    >
                      <MoveUp className="w-4 h-4" />
                      <p>Move up</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => moveDown(index)}
                      disabled={index === items.length - 1}
                    >
                      <MoveDown className="w-4 h-4" />
                      <p>Move down</p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <AccordionContent>
              {item.title == "Profile" ? (
                <ProfileSection item={item} />
              ) : item.title == "Contact Us" ? (
                <ContactUsSection item={item} />
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
