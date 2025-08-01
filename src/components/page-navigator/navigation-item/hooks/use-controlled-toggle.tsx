import { useState } from 'react';

export const useControlledToggle = (
  controlledValue: boolean | undefined,
  onChange: ((value: boolean) => void) | undefined,
  initialState = false
) => {
  const [internal, setInternal] = useState(initialState);
  const isControlled = controlledValue !== undefined;

  const value = isControlled ? controlledValue : internal;
  const setValue = isControlled 
    ? (value: boolean | ((prev: boolean) => boolean)) => onChange!(typeof value === 'function' ? value(controlledValue!) : value)
    : setInternal;

  const toggle = () => setValue(!value);

  return [value, setValue, toggle] as const;
};
