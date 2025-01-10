import { create } from "zustand";

interface UseLoadingStore {
  isLoadingGlobal: boolean;
  setItems: (newItems: boolean) => void;
}

const UseLoadingStore = create<UseLoadingStore>((set) => ({
  isLoadingGlobal: false,
  setItems: (newItem) => set({ isLoadingGlobal: newItem }),
}));

export default UseLoadingStore;
