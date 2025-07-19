import { styled } from '@linaria/react';
import { colorSurfaceStandardHover, colorTextStandard } from 'src/theme';
import type { ComponentProps, KeyboardEvent, ReactNode } from 'react';
import { useDropdownMenu } from './dropdown-menu-context';
import clsx from 'clsx';
import { css } from '@linaria/core';
import { useListItem } from '@floating-ui/react';

const MenuItem = styled('button')`
  display: flex;
  gap: 6px;
  line-height: 16px;
  font-size: 14px;
  align-items: center;
  letter-spacing: -0.015em;
  color: ${colorTextStandard};
  cursor: default;
  user-select: none;
  width: 100%;
  padding: 8px 12px;
  background: none;
  outline: none;
  border: none;

  &[data-highlighted] {
    background-color: ${colorSurfaceStandardHover};
  }

  &:focus-visible {
    outline: none;
  }

  &:hover {
    background-color: ${colorSurfaceStandardHover};
  }
`;

const isSelectedClass = css`
  background-color: ${colorSurfaceStandardHover};
`;

type DropdownMenuItemProps = {
  children: ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
} & ComponentProps<'button'>;

export const DropdownMenuItem = ({ children, onSelect, ...props }: DropdownMenuItemProps) => {
  const { activeIndex, onOpenChange } = useDropdownMenu();
  const { index, ref } = useListItem();
  const isActive = index === activeIndex;

  const handleClick = () => {
    onSelect?.();
    onOpenChange(false);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && isActive) {
      e.preventDefault();
      onSelect?.();
      onOpenChange(false);
    }
  };

  return (
    <MenuItem
      role="menuitem"
      tabIndex={isActive ? 0 : -1}
      ref={ref}
      className={clsx({
        [isSelectedClass]: activeIndex === index,
      })}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </MenuItem>
  );
};
