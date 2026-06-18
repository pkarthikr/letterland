import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps {
  label?: string;
  /** Array of {value,label} or plain strings. */
  options?: Array<SelectOption | string>;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  helper?: string;
  error?: string;
  disabled?: boolean;
  /** @default true */
  fullWidth?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}

/** Styled native dropdown with label, helper, and error. */
export function Select(props: SelectProps): JSX.Element;
