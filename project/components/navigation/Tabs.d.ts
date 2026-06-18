import * as React from 'react';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  /** Optional panel content rendered when active. */
  content?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  /** @default "underline" */
  variant?: 'underline' | 'pill';
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/** Tabbed section switcher with optional inline panels. */
export function Tabs(props: TabsProps): JSX.Element;
