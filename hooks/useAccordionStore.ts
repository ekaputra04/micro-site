import { AccordionItem } from "@/types/AccordionItem";
import { COLOR } from "@/types/Consts";
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
  items: [
    {
      id: 1,
      title: "Profile",
      content: {
        type: "profile",
        name: {
          title: "John Doe",
          style: {
            bold: false,
            italic: false,
            underline: false,
          },
          size: "normal",
          color: COLOR.PRIMARY,
        },
        description: {
          title: "This is John's profile.",
          style: {
            bold: false,
            italic: false,
            underline: false,
          },
          size: "normal",
          color: COLOR.PRIMARY,
        },
        backgroundColor: COLOR.BACKGROUND,
        headerImage: "/images/background.png",
        profileImage: "/images/profile.png",
        shape: "circle",
      },
      isActive: true,
    },
    {
      id: 2,
      title: "Contact Us",
      content: {
        type: "phone",
        name: {
          title: "Contact Us",
          style: {
            bold: false,
            italic: false,
            underline: false,
          },
          size: "normal",
          color: COLOR.PRIMARY,
        },
        phoneNumber: "08123456",
        backgroundColor: COLOR.BACKGROUND,
        shape: "rounded",
      },
      isActive: true,
    },
    {
      id: 3,
      title: "Space",
      content: {
        type: "space",
        size: 3,
        style: "border",
      },
      isActive: true,
    },
    {
      id: 4,
      title: "Text",
      content: {
        type: "text",
        text: {
          title: "Text",
          style: {
            bold: false,
            italic: false,
            underline: false,
          },
          size: "normal",
          color: COLOR.PRIMARY,
        },
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
