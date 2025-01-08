export type Size = "normal" | "large" | "small";
export type Shape = "square" | "rounded" | "circle";
export type Style = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
};

export type ProfileContent = {
  type: "profile";
  name: {
    title: string;
    style: Style;
    size: Size;
    color: string;
  };
  description: {
    title: string;
    style: Style;
    size: Size;
    color: string;
  };
  backgroundColor: string;
  headerImage: string;
  profileImage: string;
  shape: Shape;
};

// To Do
type LinkListContent = {
  type: "linkList";
  name: string;
  link: string;
};

type PhoneContent = {
  type: "phone";
  name: {
    title: string;
    style: Style;
    size: Size;
    color: string;
  };
  phoneNumber: string;
  backgroundColor: string;
  shape: Shape;
};

type TwitterContent = {
  type: "twitter";
  name: {
    title: string;
    style: Style;
    size: Size;
    color: string;
  };
  link: string;
  backgroundColor: string;
  shape: Shape;
};

type WhatsAppContent = {
  type: "whatsapp";
  name: {
    title: string;
    style: Style;
    size: Size;
    color: string;
  };
  phoneNumber: string;
  backgroundColor: string;
  shape: Shape;
};

type EmailContent = {
  type: "email";
  name: {
    title: string;
    style: Style;
    size: Size;
    color: string;
  };
  email: string;
  backgroundColor: string;
  shape: Shape;
};

type LinkedInContent = {
  type: "linkedIn";
  name: {
    title: string;
    style: Style;
    size: Size;
    color: string;
  };
  link: string;
  backgroundColor: string;
  shape: Shape;
};

type TelegramContent = {
  type: "telegram";
  name: {
    title: string;
    style: Style;
    size: Size;
    color: string;
  };
  username: string;
  backgroundColor: string;
  shape: Shape;
};

type InstagramContent = {
  type: "instagram";
  name: {
    title: string;
    style: Style;
    size: Size;
    color: string;
  };
  username: string;
  backgroundColor: string;
  shape: Shape;
};

type TextContent = {
  type: "text";
  text: {
    title: string;
    style: Style;
    size: Size;
    color: string;
  };
};

type SpaceContent = {
  type: "space";
  size: 1 | 2 | 3 | 4 | 5;
  style: "default" | "border";
};

export type AccordionContent =
  | ProfileContent
  | PhoneContent
  | TwitterContent
  | WhatsAppContent
  | EmailContent
  | LinkedInContent
  | TelegramContent
  | InstagramContent
  | TextContent
  | SpaceContent;
