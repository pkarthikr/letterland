import * as React from 'react';

export interface AvatarProps {
  /** Image URL; falls back to initials when absent. */
  src?: string;
  /** Full name — used for initials and fallback color. */
  name?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** @default "circle" */
  shape?: 'circle' | 'rounded';
  /** Force a fallback color. */
  tone?: 'clay' | 'sage' | 'ink';
  style?: React.CSSProperties;
}

/** User/child avatar with image or initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
