import { cloneElement, forwardRef, useEffect, useRef, useState } from 'react';
import type { ComponentProps, ReactElement, MouseEvent, KeyboardEvent } from 'react';

import { colorIconActive, colorIconStandardLighter } from 'src/theme';
import { ButtonWrapper, InnerText } from './elements';
import { NavigationDropdown } from './navigation-dropdown';
import { Tooltip } from 'src/components/tooltip';
import { DropdownMenuTrigger } from 'src/components/dropdown-menu';
import { Button } from 'src/components/button';
import { VerticalDotsIcon } from 'src/components/icons';
import clsx from 'clsx';
import { buttonIconClass, contextButtonHiddenClass, contextButtonVisibleClass } from './styles';
import type { IconProps } from 'src/components/icons/svg';

type NavigationItemProps = {
  children: string;
  icon: ReactElement<IconProps>;
  isActive?: boolean;
} & ComponentProps<'button'>;

export const NavigationItem = forwardRef<HTMLButtonElement, NavigationItemProps>(
  ({ children: text, icon, isActive = false, ...props }, forwardedRef) => {
    const [open, setOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);

    const triggerRef = useRef<HTMLSpanElement | null>(null);
    const contentRef = useRef<HTMLSpanElement | null>(null);

    const onToggleDropdown = () => setOpen((prev) => !prev);

    const handleContextMenu = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (isActive) onToggleDropdown();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
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
      const el = contentRef.current;
      if (el && 'scrollWidth' in el) {
        setIsOverflowing(el.scrollWidth > el.clientWidth);
      }
    }, [text]);

    const renderedIcon =
      isActive || isFocused ? cloneElement(icon, { color: colorIconActive }) : icon;

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

                <span ref={triggerRef}>
                  <VerticalDotsIcon
                    className={clsx(buttonIconClass, {
                      [contextButtonHiddenClass]: !isActive,
                      [contextButtonVisibleClass]: isActive,
                    })}
                    size="small"
                    color={colorIconStandardLighter}
                  />
                </span>
              </ButtonWrapper>
            </Button>
          </DropdownMenuTrigger>
        </Tooltip>
      </NavigationDropdown>
    );
  }
);
