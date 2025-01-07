export const getShapeClassname = (shape: "square" | "rounded" | "circle") => {
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

export const getFontSizeClassname = (
  fontSize: "normal" | "large" | "small"
) => {
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
