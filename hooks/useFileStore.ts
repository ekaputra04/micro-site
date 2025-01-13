import { create } from "zustand";

interface FileType {
  File: File | null;
  url: string | null;
  type: "profileImage" | "backgroundImage" | "headerImage";
}

interface FileStore {
  itemsFile: FileType[];
  setItemsFile: (newItems: FileType[]) => void;
}

const useFileStore = create<FileStore>((set) => ({
  itemsFile: [
    {
      File: null,
      url: null,
      type: "profileImage",
    },
    {
      File: null,
      url: null,
      type: "backgroundImage",
    },
    {
      File: null,
      url: null,
      type: "headerImage",
    },
  ],
  setItemsFile: (newItems) => set({ itemsFile: newItems }),
}));

export default useFileStore;
