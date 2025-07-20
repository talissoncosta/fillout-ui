import React, { cloneElement, forwardRef, useEffect, useRef, useState } from 'react';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { colorIconActive } from 'src/theme';
import { InnerText } from './elements';
import { useMergeRefs } from '@floating-ui/react';
import { NavigationDropdown } from './navigation-dropdown';
import { NavigationButton } from './navigator-button';

type NavigationItemProps = {
  children: ReactNode;
  icon: ReactElement;
  isActive?: boolean;
} & ComponentProps<'button'>;

export const NavigationItem = forwardRef<HTMLButtonElement, NavigationItemProps>(
  ({ children: text, icon, isActive = false, ...props }, forwardedRef) => {
    const [open, setOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const triggerRef = useRef<HTMLSpanElement | null>(null);
    const contentRef = useRef<HTMLSpanElement | null>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

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
      <NavigationDropdown isOpen={open} onOpenChange={setOpen} triggerRef={triggerRef}>
        <NavigationButton
          isActive={isActive}
          onToggleDropdown={setOpen}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          tooltip={isOverflowing ? text : undefined}
          ref={useMergeRefs([forwardedRef, triggerRef])}
          {...props}
        >
          <InnerText ref={contentRef}>
            {renderedIcon}
            {!isOverflowing && text}
          </InnerText>
        </NavigationButton>
      </NavigationDropdown>
    );
  }
);
