type ProfileContent = {
  type: "profile";
  name: string;
  backgroundColor: string;
  shape: string;
  description: string;
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
