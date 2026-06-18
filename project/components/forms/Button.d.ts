import * as React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual weight. @default "primary" */
  variant?: 'primary' | 'secondary' | 'soft' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded ends. @default true */
  pill?: boolean;
  /** @default false */
  fullWidth?: boolean;
  /** Icon node rendered before the label. */
  leadingIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  trailingIcon?: React.ReactNode;
  /** @default false */
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Primary interactive control for Letter Land.
 * @startingPoint section="Forms" subtitle="Buttons in every variant & size" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
