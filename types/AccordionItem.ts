import { AccordionContent } from "./AccordionContent";

export interface AccordionItem {
  id: number;
  title: string;
  content: AccordionContent;
  isActive: boolean;
}
