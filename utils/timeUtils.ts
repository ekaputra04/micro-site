import { differenceInHours, differenceInMinutes } from "date-fns";

export const formatRelativeTime = (updatedAt: Date) => {
  if (!(updatedAt instanceof Date)) {
    updatedAt = new Date(updatedAt);
  }

  const now = new Date();
  const hours = differenceInHours(now, updatedAt);
  const minutes = differenceInMinutes(now, updatedAt) % 60;

  let result = "";
  if (hours > 0) {
    result += `${hours} hour${hours > 1 ? "s" : ""} `;
  }
  result += `${minutes} minute${minutes > 1 ? "s" : ""} `;

  return result.trim() + " ago";
};
