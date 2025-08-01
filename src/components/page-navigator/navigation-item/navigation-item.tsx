import { forwardRef, useRef } from 'react';
import type { ComponentProps, ReactElement, MouseEvent, KeyboardEvent } from 'react';

import { colorIconStandardLighter } from 'src/theme';
import { ButtonWrapper, InnerText } from '../elements';
import { NavigationDropdown } from '../navigation-dropdown';
import { Tooltip } from 'src/components/tooltip';
import { DropdownMenuTrigger } from 'src/components/dropdown-menu';
import { Button } from 'src/components/button';
import { VerticalDotsIcon } from 'src/components/icons';
import { buttonIconClass } from '../styles';
import type { IconProps } from 'src/components/icons/svg';
import { useControlledToggle } from './hooks/use-controlled-toggle';
import { useFocusState } from './hooks/use-focus-state';
import { useActiveIcon } from './hooks/use-active-icon';
import { useTextOverflow } from './hooks/use-text-overflow';

type NavigationItemProps = {
  label: string;
  icon: ReactElement<IconProps>;
  isActive?: boolean;
  onToggleDropdown?: (open: boolean) => void;
} & Pick<ComponentProps<'button'>, 'onClick' | 'onKeyDown' | 'disabled' | 'className'>;

export const NavigationItem = forwardRef<HTMLButtonElement, NavigationItemProps>(
  ({ label, icon, isActive = false, onToggleDropdown, ...props }, forwardedRef) => {
    const [open, setOpen, toggleOpen] = useControlledToggle(undefined, onToggleDropdown);
    const { isFocused, onFocus, onBlur } = useFocusState();
    const contentRef = useRef<HTMLSpanElement | null>(null);
    const isOverflowing = useTextOverflow(contentRef, [label]);
    const renderedIcon = useActiveIcon(icon, isActive, isFocused);

    const handleContextMenu = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (isActive) toggleOpen();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      props.onKeyDown?.(e);
      if (e.metaKey && e.key === 'Enter') toggleOpen();
      e.stopPropagation();
    };

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      props.onClick?.(e);
      if (!open) return;
      toggleOpen();
    };

    return (
      <NavigationDropdown isOpen={open} onOpenChange={setOpen}>
        <Tooltip content={isOverflowing ? label : undefined}>
          <DropdownMenuTrigger>
            <Button
              aria-current={isActive ? 'page' : undefined}
              variant={isActive ? 'active' : 'standard'}
              ref={forwardedRef}
              {...props}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              onContextMenu={handleContextMenu}
              onFocus={onFocus}
              onBlur={onBlur}
            >
              <ButtonWrapper>
                <InnerText ref={contentRef}>
                  {renderedIcon}
                  {!isOverflowing && label}
                </InnerText>
                <VerticalDotsIcon
                  className={buttonIconClass}
                  data-visible={isActive}
                  size="small"
                  color={colorIconStandardLighter}
                />
              </ButtonWrapper>
            </Button>
          </DropdownMenuTrigger>
        </Tooltip>
      </NavigationDropdown>
    );
  }
);
