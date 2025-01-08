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
import TwitterSection from "./section-item/Twitter";
import WhatsAppSection from "./section-item/WhatsApp";
import EmailSection from "./section-item/Email";
import LinkedInSection from "./section-item/LinkedIn";
import TelegramSection from "./section-item/Telegram";
import InstagramSection from "./section-item/Instagram";
import SpaceSection from "./section-item/Space";
import TextSection from "./section-item/Text";

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
        <Button className="bg-green-500 hover:bg-green-600">Save</Button>
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
              {item.content.type == "profile" ? (
                <ProfileSection item={item} />
              ) : item.content.type == "phone" ? (
                <ContactUsSection item={item} />
              ) : item.content.type == "twitter" ? (
                <TwitterSection item={item} />
              ) : item.content.type == "whatsapp" ? (
                <WhatsAppSection item={item} />
              ) : item.content.type == "email" ? (
                <EmailSection item={item} />
              ) : item.content.type == "linkedIn" ? (
                <LinkedInSection item={item} />
              ) : item.content.type == "telegram" ? (
                <TelegramSection item={item} />
              ) : item.content.type == "instagram" ? (
                <InstagramSection item={item} />
              ) : item.content.type == "space" ? (
                <SpaceSection item={item} />
              ) : item.content.type == "text" ? (
                <TextSection item={item} />
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
