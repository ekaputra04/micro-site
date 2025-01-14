import { initialFiles } from "@/types/Consts";
import { FileType } from "@/types/Types";
import { create } from "zustand";

interface FileStore {
  itemsFile: FileType[];
  setItemsFile: (newItems: FileType[]) => void;
}

const useFileStore = create<FileStore>((set) => ({
  itemsFile: initialFiles,
  setItemsFile: (newItems) => set({ itemsFile: newItems }),
}));

export default useFileStore;
