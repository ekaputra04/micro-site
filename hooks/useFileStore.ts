import { create } from "zustand";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  isActive: boolean;
}

interface ProfileStore {
  items: AccordionItem[];
  moveUp: (index: number) => void;
  moveDown: (index: number) => void;
  setItems: (newItems: AccordionItem[]) => void;
  updateItem: (id: string, updatedData: Partial<AccordionItem>) => void;
  addItem: (newItem: AccordionItem) => void;
  removeItem: (id: string) => void;
  toggleActive: (id: string) => void;
}

const useProfileStore = create<ProfileStore>((set) => ({
  items: [
    {
      id: "item-1",
      title: "Profile",
      content: "Profile Content",
      isActive: false,
    },
    {
      id: "item-2",
      title: "Settings",
      content: "Settings Content",
      isActive: true,
    },
    { id: "item-3", title: "Help", content: "Help Content", isActive: true },
  ],
  moveUp: (index) =>
    set((state) => {
      if (index <= 0) return state;
      const newItems = [...state.items];
      [newItems[index - 1], newItems[index]] = [
        newItems[index],
        newItems[index - 1],
      ];
      return { items: newItems };
    }),
  moveDown: (index) =>
    set((state) => {
      if (index >= state.items.length - 1) return state;
      const newItems = [...state.items];
      [newItems[index], newItems[index + 1]] = [
        newItems[index + 1],
        newItems[index],
      ];
      return { items: newItems };
    }),
  setItems: (newItems) => set({ items: newItems }),
  updateItem: (id, updatedData) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      ),
    })),
  addItem: (newItem) =>
    set((state) => ({
      items: [...state.items, newItem],
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  toggleActive: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      ),
    })),
}));

export default useProfileStore;
