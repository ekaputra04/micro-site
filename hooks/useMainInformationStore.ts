import { initialMainInformation } from "@/types/Consts";
import { MainInformationType } from "@/types/Types";
import { create } from "zustand";

interface MainInformationStore {
  mainInformation: MainInformationType;
  setMainInformation: (newItems: MainInformationType) => void;
}

const useMainInformationStore = create<MainInformationStore>((set) => ({
  mainInformation: initialMainInformation,
  setMainInformation: (newItem) => set({ mainInformation: newItem }),
}));

export default useMainInformationStore;
