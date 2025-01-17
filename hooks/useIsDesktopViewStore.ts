import { create } from "zustand";

interface UseIsDesktopViewStore {
  isDesktopViewStore: boolean;
  setIsDesktopViewStore: (newItems: boolean) => void;
}

const UseIsDesktopViewStore = create<UseIsDesktopViewStore>((set) => ({
  isDesktopViewStore: false,
  setIsDesktopViewStore: (newItem) => set({ isDesktopViewStore: newItem }),
}));

export default UseIsDesktopViewStore;
