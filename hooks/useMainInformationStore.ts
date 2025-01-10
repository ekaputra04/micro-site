import { create } from "zustand";

type MainInformationType = {
  title: string;
  link: string;
  backgroundImage: string;
  backgroundColor: string;
};

interface MainInformationStore {
  items: MainInformationType;
  setItems: (newItems: MainInformationType) => void;
}

const useMainInformationStore = create<MainInformationStore>((set) => ({
  items: {
    title: "",
    link: "",
    backgroundColor: "",
    backgroundImage: "",
  },
  setItems: (newItems) => set({ items: newItems }),
}));

export default useMainInformationStore;
