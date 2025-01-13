import { ElementType } from "@/types/types";
import {
  IconBrandTelegram,
  IconBrandTiktok,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import {
  CaseUpper,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Space,
  Twitter,
  User,
} from "lucide-react";

export function getIconFromTitle(title: ElementType) {
  return title == "Profile" ? (
    <User className="w-5 h-5" />
  ) : title == "Contact Us" ? (
    <Phone className="w-5 h-5" />
  ) : title == "Space" ? (
    <Space className="w-5 h-5" />
  ) : title == "Twitter X" ? (
    <Twitter className="w-5 h-5" />
  ) : title == "WhatsApp" ? (
    <IconBrandWhatsapp className="w-5 h-5" />
  ) : title == "Email" ? (
    <Mail className="w-5 h-5" />
  ) : title == "LinkedIn" ? (
    <Linkedin className="w-5 h-5" />
  ) : title == "Instagram" ? (
    <Instagram className="w-5 h-5" />
  ) : title == "Telegram" ? (
    <IconBrandTelegram className="w-5 h-5" />
  ) : title == "Text" ? (
    <CaseUpper className="w-5 h-5" />
  ) : title == "Tiktok" ? (
    <IconBrandTiktok className="w-5 h-5" />
  ) : null;
}
