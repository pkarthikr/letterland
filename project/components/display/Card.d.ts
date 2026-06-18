import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** @default "elevated" */
  variant?: 'elevated' | 'outlined' | 'soft';
  /** @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Adds hover lift + pointer cursor. @default false */
  interactive?: boolean;
  /** Render as a different element/component. @default "div" */
  as?: any;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Rounded surface container for grouped content.
 * @startingPoint section="Display" subtitle="Cards, badges, avatars & alerts" viewport="700x320"
 */
export function Card(props: CardProps): JSX.Element;
