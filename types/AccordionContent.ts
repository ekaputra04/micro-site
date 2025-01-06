export type ProfileContent = {
  type: "profile";
  name: {
    title: string;
    style: "bold" | "italic" | "underline";
    size: "normal" | "large" | "small";
    color: string;
  };
  description: {
    title: string;
    style: "bold" | "italic" | "underline";
    size: "normal" | "large" | "small";
    color: string;
  };
  backgroundColor: string;
  headerImage: string;
  profileImage: string;
  shape: "square" | "rounded" | "circle";
};

type TwitterContent = {
  type: "twitter";
  name: string;
  link: string;
};

type TextContent = {
  type: "text";
  text: string;
};

export type AccordionContent = ProfileContent | TwitterContent | TextContent;
