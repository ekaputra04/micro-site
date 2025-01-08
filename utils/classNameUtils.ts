import { Shape, Size } from "@/types/AccordionContent";

export const getShapeClassname = (shape: Shape) => {
  switch (shape) {
    case "square":
      return "rounded-none";
    case "rounded":
      return "rounded-lg";
    case "circle":
      return "rounded-full";
    default:
      return "";
  }
};

export const getFontSizeClassname = (fontSize: Size) => {
  switch (fontSize) {
    case "normal":
      return "text-lg";
    case "large":
      return "text-2xl";
    case "small":
      return "text-sm";
    default:
      return "";
  }
};

export const getIsActiveClassname = (isActive: boolean) => {
  return isActive ? "" : "hidden";
};

export const getFontStyleClassname = (style: {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}) => {
  const classNames = [];

  if (style.bold) classNames.push("font-bold");
  if (style.italic) classNames.push("italic");
  if (style.underline) classNames.push("underline");

  return classNames.join(" ");
};

export const lightenColorWithOpacity = (hexColor: string): string => {
  if (!/^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hexColor)) {
    throw new Error("Invalid hex color format");
  }

  if (hexColor.length === 4) {
    hexColor = `#${hexColor[1]}${hexColor[1]}${hexColor[2]}${hexColor[2]}${hexColor[3]}${hexColor[3]}`;
  }

  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, 0.1)`;
};
