import * as React from 'react';

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Allow multiple panels open at once. @default false */
  multiple?: boolean;
  /** Item ids open on mount. */
  defaultOpen?: string[];
  style?: React.CSSProperties;
}

/** Collapsible panels — great for FAQs. */
export function Accordion(props: AccordionProps): JSX.Element;
