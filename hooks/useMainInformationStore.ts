import { create } from "zustand";

type MainInformationType = {
  title: string;
  link: string;
  backgroundImage: string;
  backgroundColor: string;
};

interface MainInformationStore {
  mainInformation: MainInformationType;
  setItems: (newItems: MainInformationType) => void;
}

const useMainInformationStore = create<MainInformationStore>((set) => ({
  mainInformation: {
    title: "",
    link: "",
    backgroundColor: "#ffffff",
    backgroundImage: "",
  },
  setItems: (newItem) => set({ mainInformation: newItem }),
}));

export default useMainInformationStore;
