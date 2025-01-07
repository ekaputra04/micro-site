export type ProfileContent = {
  type: "profile";
  name: {
    title: string;
    style: {
      bold: boolean;
      italic: boolean;
      underline: boolean;
    };
    size: "normal" | "large" | "small";
    color: string;
  };
  description: {
    title: string;
    style: {
      bold: boolean;
      italic: boolean;
      underline: boolean;
    };
    size: "normal" | "large" | "small";
    color: string;
  };
  backgroundColor: string;
  headerImage: string;
  profileImage: string;
  shape: "square" | "rounded" | "circle";
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
    style: {
      bold: boolean;
      italic: boolean;
      underline: boolean;
    };
    size: "normal" | "large" | "small";
    color: string;
  };
  phoneNumber: string;
  backgroundColor: string;
  shape: "square" | "rounded" | "circle";
};

type TwitterContent = {
  type: "twitter";
  name: {
    title: string;
    style: {
      bold: boolean;
      italic: boolean;
      underline: boolean;
    };
    size: "normal" | "large" | "small";
    color: string;
  };
  link: string;
  backgroundColor: string;
  shape: "square" | "rounded" | "circle";
};

type TextContent = {
  type: "text";
  text: string;
};

export type AccordionContent =
  | ProfileContent
  | PhoneContent
  | TwitterContent
  | TextContent;
