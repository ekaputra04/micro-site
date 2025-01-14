import { AccordionItem } from "./AccordionItem";
import { FileType, MainInformationType } from "./Types";

export enum COLOR {
  BACKGROUND = "#f0f0f0",
  PRIMARY = "#000000",
}

export const initialItems: AccordionItem[] = [
  {
    id: 1,
    title: "Profile",
    content: {
      type: "profile",
      name: {
        title: "John Doe",
        style: {
          bold: false,
          italic: false,
          underline: false,
        },
        size: "normal",
        color: COLOR.PRIMARY,
      },
      description: {
        title: "This is John's profile.",
        style: {
          bold: false,
          italic: false,
          underline: false,
        },
        size: "normal",
        color: COLOR.PRIMARY,
      },
      backgroundColor: COLOR.BACKGROUND,
      headerImage: "/images/background.png",
      profileImage: "/images/profile.png",
      shape: "circle",
    },
    isActive: true,
  },
  {
    id: 2,
    title: "Contact Us",
    content: {
      type: "phone",
      name: {
        title: "Contact Us",
        style: {
          bold: false,
          italic: false,
          underline: false,
        },
        size: "normal",
        color: COLOR.PRIMARY,
      },
      phoneNumber: "08123456",
      backgroundColor: COLOR.BACKGROUND,
      shape: "rounded",
    },
    isActive: true,
  },
  {
    id: 3,
    title: "Space",
    content: {
      type: "space",
      size: 3,
      style: "border",
    },
    isActive: true,
  },
  {
    id: 4,
    title: "Text",
    content: {
      type: "text",
      text: {
        title: "Text",
        style: {
          bold: false,
          italic: false,
          underline: false,
        },
        size: "normal",
        color: COLOR.PRIMARY,
      },
    },
    isActive: true,
  },
];

export const initialFiles: FileType[] = [
  {
    File: null,
    url: null,
    type: "profileImage",
  },
  {
    File: null,
    url: null,
    type: "backgroundImage",
  },
  {
    File: null,
    url: null,
    type: "headerImage",
  },
];

export const initialMainInformation: MainInformationType = {
  title: "",
  link: "",
  backgroundColor: "#ffffff",
  backgroundImage: "",
  iconImage: "",
  description: "",
};
