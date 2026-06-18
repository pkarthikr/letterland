import * as React from 'react';

export interface RadioProps {
  label?: string;
  description?: string;
  /** Share one name across a group. */
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** Single-choice radio control; group by shared `name`. */
export function Radio(props: RadioProps): JSX.Element;
