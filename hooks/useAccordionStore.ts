import { AccordionContent } from "@/types/AccordionContent";
import { create } from "zustand";

export interface AccordionItem {
  id: string;
  title: string;
  // content: Partial<AccordionContent>;
  content: AccordionContent;
  isActive: boolean;
}

interface AccordionStore {
  items: AccordionItem[];
  moveUp: (index: number) => void;
  moveDown: (index: number) => void;
  setItems: (newItems: AccordionItem[]) => void;
  updateItem: (id: string, updatedData: Partial<AccordionItem>) => void;
  addItem: (newItem: AccordionItem) => void;
  removeItem: (id: string) => void;
  toggleActive: (id: string) => void;
}

const useAccordionStore = create<AccordionStore>((set) => ({
  items: [
    {
      id: "item-1",
      title: "Profile",
      content: {
        type: "profile",
        name: {
          title: "Profile",
          style: "bold",
          size: "normal",
          color: "#000000",
        },
        description: {
          title: "This is John's profile.",
          style: "bold",
          size: "normal",
          color: "#000000",
        },
        backgroundColor: "#f0f0f0",
        headerImage: "/images/background.png",
        profileImage: "/images/profile.png",
        shape: "circle",
      },
      isActive: false,
    },
    {
      id: "item-2",
      title: "Twitter",
      content: {
        type: "twitter",
        name: "John's Twitter",
        link: "https://twitter.com/johndoe",
      },
      isActive: true,
    },
    {
      id: "item-3",
      title: "Text",
      content: {
        type: "text",
        text: "This is a simple text content.",
      },
      isActive: true,
    },
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

export default useAccordionStore;
