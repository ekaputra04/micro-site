"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import useAccordionStore from "@/hooks/useAccordionStore";
import {
  CaseUpper,
  EllipsisVertical,
  Instagram,
  Linkedin,
  Mail,
  MoveDown,
  MoveUp,
  Phone,
  Plus,
  Space,
  Trash2,
  Twitter,
  User,
  X,
} from "lucide-react";
import React, { useState } from "react";
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
import {
  IconBrandTelegram,
  IconBrandTiktok,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import AddNewComponent from "./AddNewComponent";
import { ElementType } from "@/types/types";
import { getIconFromTitle } from "@/utils/iconUtils";
import { AccordionContent as ContentElement } from "@/types/AccordionContent";
import { COLOR } from "@/types/Consts";

type newComponentItemsType = {
  title: ElementType;
  description: string;
  content: ContentElement;
};

const styleContent = {
  bold: false,
  italic: false,
  underline: false,
};

const sizeContent = "normal";
const shapeContent = "rounded";

const newComponentItems: newComponentItemsType[] = [
  {
    title: "Profile",
    description:
      "A profile component that includes a profile picture, text, and subtext.",
    content: {
      type: "profile",
      name: {
        title: "Profile",
        style: styleContent,
        size: sizeContent,
        color: COLOR.PRIMARY,
      },
      description: {
        title: "Description",
        style: styleContent,
        size: sizeContent,
        color: COLOR.PRIMARY,
      },
      backgroundColor: COLOR.BACKGROUND,
      headerImage: "/images/background.png",
      profileImage: "/images/profile.png",
      shape: shapeContent,
    },
  },
  {
    title: "Contact Us",
    description:
      "A component designed to display contact information, such as a phone number",
    content: {
      type: "phone",
      name: {
        title: "Contact Us",
        style: styleContent,
        size: sizeContent,
        color: COLOR.PRIMARY,
      },
      phoneNumber: "",
      backgroundColor: COLOR.BACKGROUND,
      shape: shapeContent,
    },
  },
  {
    title: "Twitter X",
    description:
      "A component that displays a Twitter profile or username with a link to the user's account, enabling easy access to their tweets and updates.",
    content: {
      type: "twitter",
      name: {
        title: "Twitter X",
        style: styleContent,
        size: sizeContent,
        color: COLOR.PRIMARY,
      },
      link: "",
      backgroundColor: COLOR.BACKGROUND,
      shape: shapeContent,
    },
  },
  {
    title: "WhatsApp",
    description:
      "A component that displays a WhatsApp contact number, enabling users to initiate a chat directly via WhatsApp.",
    content: {
      type: "whatsapp",
      name: {
        title: "WhatsApp",
        style: styleContent,
        size: sizeContent,
        color: COLOR.PRIMARY,
      },
      phoneNumber: "",
      backgroundColor: COLOR.BACKGROUND,
      shape: shapeContent,
    },
  },
  {
    title: "Email",
    description:
      "A component that displays an email address, allowing users to easily contact through email by clicking or copying the address.",
    content: {
      type: "email",
      name: {
        title: "Email",
        style: styleContent,
        size: sizeContent,
        color: COLOR.PRIMARY,
      },
      email: "",
      backgroundColor: COLOR.BACKGROUND,
      shape: shapeContent,
    },
  },
  {
    title: "LinkedIn",
    description:
      "A component that displays a LinkedIn profile link, allowing users to view and connect with the profile directly.",
    content: {
      type: "linkedIn",
      name: {
        title: "LinkedIn",
        style: styleContent,
        size: sizeContent,
        color: COLOR.PRIMARY,
      },
      link: "",
      backgroundColor: COLOR.BACKGROUND,
      shape: shapeContent,
    },
  },
  {
    title: "Instagram",
    description:
      "A component that showcases an Instagram username, enabling users to visit the profile and explore posts.",
    content: {
      type: "instagram",
      name: {
        title: "Instagram",
        style: styleContent,
        size: sizeContent,
        color: COLOR.PRIMARY,
      },
      username: "",
      backgroundColor: COLOR.BACKGROUND,
      shape: shapeContent,
    },
  },
  {
    title: "Telegram",
    description:
      "A component that displays a Telegram username, allowing users to contact or follow the profile on the messaging platform.",
    content: {
      type: "telegram",
      name: {
        title: "Telegram",
        style: styleContent,
        size: sizeContent,
        color: COLOR.PRIMARY,
      },
      username: "",
      backgroundColor: COLOR.BACKGROUND,
      shape: shapeContent,
    },
  },
  {
    title: "Text",
    description: "Component that displays text.",
    content: {
      type: "text",
      text: {
        title: "Text",
        style: styleContent,
        size: sizeContent,
        color: COLOR.PRIMARY,
      },
    },
  },
  {
    title: "Space",
    description: "Creates an empty line/divider between components.",
    content: {
      type: "space",
      size: 3,
      style: "border",
    },
  },
];

export default function ComponentView() {
  const { items, moveUp, moveDown, removeItem, toggleActive } =
    useAccordionStore();
  const [addComponentActive, setAddComponentActive] = useState(false);

  return (
    <>
      <div className="flex justify-between">
        <Button
          className="flex items-center gap-2 mb-4"
          onClick={() => setAddComponentActive(!addComponentActive)}
          variant={addComponentActive ? "destructive" : "default"}
        >
          {addComponentActive ? (
            <X className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
          <p>{addComponentActive ? "Close" : "Add new component"}</p>
        </Button>
      </div>

      <div
        className={`gap-4 grid grid-cols-2 mt-8 animate-accordion-up ${addComponentActive ? "" : "hidden"}`}
      >
        {newComponentItems.map((item, index) => (
          <div className="" key={index}>
            <AddNewComponent
              icon={getIconFromTitle(item.title as ElementType)}
              name={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>

      <Accordion
        type="single"
        collapsible
        className={`${addComponentActive ? "hidden" : ""}`}
      >
        {items.map((item, index) => (
          <AccordionItem key={item.id} value={item.id.toString()}>
            <div className="flex justify-between items-center">
              <AccordionTrigger>
                <div className="flex items-center gap-4">
                  {getIconFromTitle(item.title as ElementType)} {item.title}
                </div>
              </AccordionTrigger>
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
