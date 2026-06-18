import * as React from 'react';

export interface SwitchProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md';
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** On/off toggle switch. */
export function Switch(props: SwitchProps): JSX.Element;
