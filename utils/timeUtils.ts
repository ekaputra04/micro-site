import { differenceInHours, differenceInMinutes, format } from "date-fns";

export const formatRelativeTime = (updatedAt: Date) => {
  if (!(updatedAt instanceof Date)) {
    updatedAt = new Date(updatedAt);
  }

  const now = new Date();
  const hours = differenceInHours(now, updatedAt);
  const minutes = differenceInMinutes(now, updatedAt) % 60;

  // Jika lebih dari 24 jam, tampilkan tanggal asli
  if (hours >= 24) {
    return format(updatedAt, "MMMM d, yyyy h:mm a"); // Contoh format: "January 14, 2025 3:45 PM"
  }

  // Jika kurang dari 24 jam, tampilkan waktu relatif
  let result = "";
  if (hours > 0) {
    result += `${hours} hour${hours > 1 ? "s" : ""} `;
  }
  result += `${minutes} minute${minutes > 1 ? "s" : ""} `;

  return result.trim() + " ago";
};
