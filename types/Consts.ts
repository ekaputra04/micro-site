import { AccordionItem } from "./AccordionItem";
import { ThemeDataType } from "./ThemeData";
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
  {
    File: null,
    url: null,
    type: "iconImage",
  },
];

export const initialMainInformation: MainInformationType = {
  title: "",
  link: "",
  backgroundColor: "#ffffff",
  backgroundImage: "",
  description: "",
  iconImage: "",
};

export const ThemeData: ThemeDataType[] = [
  {
    name: "Abstract Flat Modern",
    url: "/images/abstract-flat-modern.png",
  },
  {
    name: "Abstract Selene",
    url: "/images/abstract-selene.png",
  },
  {
    name: "Abstract Zephyra",
    url: "/images/abstract-zephyra.png",
  },
  {
    name: "Astronom",
    url: "/images/astronom.png",
  },
  {
    name: "Batik",
    url: "/images/batik.png",
  },
  {
    name: "Christmas Holy",
    url: "/images/christmas-holy.png",
  },
  {
    name: "Corporation",
    url: "/images/corporation.png",
  },
  {
    name: "Crimson Harmony",
    url: "/images/crimson-harmony.png",
  },
  {
    name: "Darkness Hallowen",
    url: "/images/darkness-hallowen.png",
  },
  {
    name: "Dusks Cloud",
    url: "/images/dusks-cloud.png",
  },
  {
    name: "Grocery",
    url: "/images/grocery.png",
  },
  {
    name: "Hallowen Day",
    url: "/images/hallowen-day.png",
  },
  {
    name: "Hallowen Party",
    url: "/images/hallowen-party.png",
  },
  {
    name: "Ignite The Future",
    url: "/images/ignite-the-future.png",
  },
  {
    name: "Indonesian",
    url: "/images/indonesian.png",
  },
  {
    name: "Juicy",
    url: "/images/juicy.png",
  },
  {
    name: "Lunar Prosperity",
    url: "/images/lunar-prosperity.png",
  },
  {
    name: "Merry Christmas",
    url: "/images/merry-christmas.png",
  },
  {
    name: "New Year New You",
    url: "/images/new-year-new-you.png",
  },
  {
    name: "Rainbowwave Marble",
    url: "/images/rainbowwave-marble.png",
  },
  {
    name: "Self",
    url: "/images/self.png",
  },
  {
    name: "Serene Dawn",
    url: "/images/serene-dawn.png",
  },
  {
    name: "Soft Pastel",
    url: "/images/soft-pastel.png",
  },
  {
    name: "Travel",
    url: "/images/travel.png",
  },
  {
    name: "Trick or Treat Hallowen",
    url: "/images/trick-or-treat-hallowen.png",
  },
];
