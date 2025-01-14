import { AccordionItem } from "@/types/AccordionItem";
import { COLOR, initialItems } from "@/types/Consts";
import { create } from "zustand";

interface AccordionStore {
  items: AccordionItem[];
  moveUp: (index: number) => void;
  moveDown: (index: number) => void;
  setItems: (newItems: AccordionItem[]) => void;
  updateItem: (id: number, updatedData: Partial<AccordionItem>) => void;
  addItem: (newItem: AccordionItem) => void;
  removeItem: (id: number) => void;
  toggleActive: (id: number) => void;
}

const useAccordionStore = create<AccordionStore>((set) => ({
  items: initialItems,

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
        item.id == id ? { ...item, ...updatedData } : item
      ),
    })),
  addItem: (newItem) =>
    set((state) => {
      const maxId = state.items.reduce(
        (max, item) => Math.max(max, item.id),
        0
      );
      const newId = maxId + 1;
      return {
        items: [...state.items, { ...newItem, id: newId }],
      };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id != id),
    })),
  toggleActive: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id == id ? { ...item, isActive: !item.isActive } : item
      ),
    })),
}));

export default useAccordionStore;
