import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'clay' | 'sage' | 'success' | 'warning' | 'danger' | 'info';
  /** @default "soft" */
  variant?: 'soft' | 'solid' | 'outline';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

/** Small pill for status, category, or counts. */
export function Badge(props: BadgeProps): JSX.Element;
