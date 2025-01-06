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

export const getFontsizeClassname = (
  fontSize: "normal" | "large" | "small"
) => {
  switch (fontSize) {
    case "normal":
      return "text-md";
    case "large":
      return "text-xl";
    case "small":
      return "text-sm";
    default:
      return "";
  }
};
