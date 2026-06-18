import * as React from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  /** @default "text" */
  type?: string;
  /** Hint text below the field. */
  helper?: string;
  /** Error message — overrides helper and turns the field red. */
  error?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  disabled?: boolean;
  /** @default true */
  fullWidth?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** Single-line text field with label, helper, error, and icon adornments. */
export function Input(props: InputProps): JSX.Element;
