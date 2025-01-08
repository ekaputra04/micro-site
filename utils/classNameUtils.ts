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

export const getSpaceStyleClassname = (style: "default" | "border") => {
  switch (style) {
    case "default":
      return "";
    case "border":
      return "border-b";
    default:
      return "";
  }
};

export const getSpaceSizeClassname = (size: 1 | 2 | 3 | 4 | 5) => {
  switch (size) {
    case 1:
      return "h-2";
    case 2:
      return "h-4";
    case 3:
      return "h-6";
    case 4:
      return "h-8";
    case 5:
      return "h-10";
    default:
      return "";
  }
};

export const getSpaceSizeBorderClassname = (size: 1 | 2 | 3 | 4 | 5) => {
  switch (size) {
    case 1:
      return "h-1";
    case 2:
      return "h-2";
    case 3:
      return "h-3";
    case 4:
      return "h-4";
    case 5:
      return "h-5";
    default:
      return "";
  }
};
