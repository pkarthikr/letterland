import * as React from 'react';

export interface IconButtonProps {
  /** A single icon node. */
  children?: React.ReactNode;
  /** Accessible label — always provide. */
  label?: string;
  /** @default "ghost" */
  variant?: 'primary' | 'secondary' | 'soft' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Circular vs 12px-radius square. @default true */
  round?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Compact button holding a single icon. */
export function IconButton(props: IconButtonProps): JSX.Element;
