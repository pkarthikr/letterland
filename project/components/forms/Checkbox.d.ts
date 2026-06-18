import * as React from 'react';

export interface CheckboxProps {
  label?: string;
  /** Optional second line under the label. */
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** Checkbox with label and optional description. */
export function Checkbox(props: CheckboxProps): JSX.Element;
