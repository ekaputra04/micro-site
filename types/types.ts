import { JsonValue } from "@prisma/client/runtime/library";

export type ElementType =
  | "Profile"
  | "Contact Us"
  | "Space"
  | "Twitter X"
  | "WhatsApp"
  | "Email"
  | "LinkedIn"
  | "Instagram"
  | "Telegram"
  | "Text"
  | "Tiktok";

export type PostType = {
  id: number;
  title: string;
  slug: string;
  backgroundColor: string;
  backgroundImage: string;
  iconImage: string;
  description: string;
  content: JsonValue;
  published: boolean;
  isStarred: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string | null;
};

export type FileType = {
  File: File | null;
  url: string | null;
  type: "profileImage" | "backgroundImage" | "headerImage" | "iconImage";
};

export type MainInformationType = {
  title: string;
  link: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  iconImage: string;
};
