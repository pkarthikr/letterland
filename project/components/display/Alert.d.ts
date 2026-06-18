import * as React from 'react';

export interface AlertProps {
  children?: React.ReactNode;
  title?: string;
  /** @default "info" */
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'sage';
  /** Custom icon node (defaults to a tone icon). */
  icon?: React.ReactNode;
  /** Show a dismiss button. */
  onClose?: () => void;
  style?: React.CSSProperties;
}

/** Inline message banner for feedback and notices. */
export function Alert(props: AlertProps): JSX.Element;
