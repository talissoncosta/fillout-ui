import type { ReactElement } from 'react';
import type { IconProps } from 'src/components/icons/svg.tsx';
import { cloneElement, useMemo } from 'react';
import { colorIconActive } from 'src/theme';

export const useActiveIcon = (
  icon: ReactElement<IconProps>,
  isActive: boolean,
  isFocused: boolean
) => {
  return useMemo(
    () => (isActive || isFocused ? cloneElement(icon, { color: colorIconActive }) : icon),
    [icon, isActive, isFocused]
  );
};
