import React, { cloneElement, forwardRef, MouseEvent, useEffect, useRef, useState } from 'react';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { colorIconActive, colorIconStandardLighter } from 'src/theme';
import { ButtonWrapper, InnerText } from './elements';
import { NavigationDropdown } from './navigation-dropdown';
import { Tooltip } from 'src/components/tooltip';
import { DropdownMenuTrigger } from 'src/components/dropdown-menu';
import { Button } from 'src/components/button';
import { VerticalDotsIcon } from 'src/components/icons';
import clsx from 'clsx';
import { buttonIconClass, contextButtonHiddenClass, contextButtonVisibleClass } from './styles';

type NavigationItemProps = {
  children: ReactNode;
  icon: ReactElement;
  isActive?: boolean;
} & ComponentProps<'button'>;

export const NavigationItem = forwardRef<HTMLButtonElement, NavigationItemProps>(
  ({ children: text, icon, isActive = false, ...props }, forwardedRef) => {
    const [open, setOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const onToggleDropdown = () => setOpen((prev) => !prev);

    const triggerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLSpanElement | null>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    const handleContextMenu = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault(); // Prevents the browser's default context menu from appearing
      if (isActive) onToggleDropdown();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      props.onKeyDown?.(e);
      if (e.metaKey && e.key === 'Enter') {
        onToggleDropdown();
      }
      e.stopPropagation();
    };

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      props.onClick?.(e);
      const isTriggerClick = triggerRef.current?.contains(e.target as Node);

      if (!isTriggerClick && !open) return;

      onToggleDropdown();
    };

    useEffect(() => {
      if (contentRef.current) {
        const el = contentRef.current;
        if ('scrollWidth' in el) {
          setIsOverflowing(el.scrollWidth > el.clientWidth);
        }
      }
    }, [text]);

    const renderedIcon =
      isActive || isFocused
        ? cloneElement(icon as React.ReactElement<{ color?: string }>, { color: colorIconActive })
        : icon;

    return (
      <NavigationDropdown isOpen={open} onOpenChange={setOpen}>
        <Tooltip content={isOverflowing ? text : undefined}>
          <DropdownMenuTrigger>
            <Button
              aria-current={isActive ? 'page' : undefined}
              variant={isActive ? 'active' : 'standard'}
              ref={forwardedRef}
              {...props}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              onContextMenu={handleContextMenu}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            >
              <ButtonWrapper>
                <InnerText ref={contentRef}>
                  {renderedIcon}
                  {!isOverflowing && text}
                </InnerText>
                <VerticalDotsIcon
                  ref={triggerRef}
                  className={clsx(buttonIconClass, {
                    [contextButtonHiddenClass]: !isActive,
                    [contextButtonVisibleClass]: isActive,
                  })}
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
