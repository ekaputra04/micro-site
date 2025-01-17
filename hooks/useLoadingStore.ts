import { create } from "zustand";

interface UseLoadingStore {
  isLoadingGlobal: boolean;
  setIsLoadingGlobal: (newItems: boolean) => void;
}

const UseLoadingStore = create<UseLoadingStore>((set) => ({
  isLoadingGlobal: false,
  setIsLoadingGlobal: (newItem) => set({ isLoadingGlobal: newItem }),
}));

export default UseLoadingStore;
