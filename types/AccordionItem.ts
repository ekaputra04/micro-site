import { AccordionContent } from "./AccordionContent";

export interface AccordionItem {
  id: string;
  title: string;
  content: AccordionContent;
  isActive: boolean;
}
