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
