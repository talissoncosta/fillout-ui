import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import {
  colorIconActive,
  colorIconContrast,
  colorIconDestructive,
  colorIconStandardLighter,
  colorStrokeStandard,
  colorSurfaceSecondary,
  colorTextStandard,
} from 'src/theme';
import { Button } from 'src/components/button';
import {
  ClipboardIcon,
  FlagIcon,
  PencilIcon,
  SquareBehindSquareIcon,
  TrashIcon,
  VerticalDotsIcon,
} from 'src/components/icons';
import { css } from '@linaria/core';
import { InnerText } from './elements';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'src/components/dropdown-menu';
import { styled } from '@linaria/react';
import { useDropdownMenu } from 'src/components/dropdown-menu/dropdown-menu-context.tsx';
import clsx from 'clsx';
import { Tooltip } from 'src/components/tooltip';
import { useMergeRefs } from '@floating-ui/react';

const buttonIconClass = css`
  margin-left: 8px;
`;

const TitleContainer = styled('div')`
  padding: 8px 12px;
  background: ${colorSurfaceSecondary};
  border-bottom: 0.5px solid ${colorStrokeStandard};
`;

const TitleText = styled('span')`
  width: 62px;
  height: 24px;
  font-family: 'BL Melody';
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${colorTextStandard};
`;

const Container = styled('div')`
  max-height: 40vh;
  overflow: auto;
`;

const ButtonWrapper = styled('span')`
  display: flex;
  align-items: center;
`;

const contextButtonHiddenClass = css`
  display: none;
`;

const contextButtonVisibleClass = css`
  display: flex;
`;

interface NavButtonProps extends Omit<ComponentProps<'button'>, 'ref'> {
  triggerRef: React.RefObject<HTMLSpanElement>;
  children: ReactNode;
  isActive?: boolean;
  onToggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  tooltip?: ReactNode;
}

const NavButton = forwardRef<HTMLButtonElement, NavButtonProps>(({
  children,
  onClick,
  isActive,
  onToggleDropdown,
  tooltip,
  onFocus,
  onBlur,
  ...props
},forwardedRef) => {
    const { refs } = useDropdownMenu();

    const handleStopPropagation = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleContextMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault(); // Prevents the browser's default context menu from appearing
      if (isActive) onToggleDropdown((prev: boolean) => !prev);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.metaKey && e.key === 'Enter') {
        onToggleDropdown((prev) => !prev);
      }
    };

    return (
      <Tooltip content={tooltip}>
        <Button
          aria-current={isActive ? 'page' : undefined}
          variant={isActive ? 'active' : 'standard'}
          ref={useMergeRefs([refs.setReference, forwardedRef])}
          onClick={onClick}
          onContextMenu={handleContextMenu}
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
        >
          <ButtonWrapper>
            {children}
            <DropdownMenuTrigger onMouseDown={handleStopPropagation}>
              <VerticalDotsIcon
                className={clsx(buttonIconClass, {
                  [contextButtonHiddenClass]: !isActive,
                  [contextButtonVisibleClass]: isActive,
                })}
                size="small"
                color={colorIconStandardLighter}
              />
            </DropdownMenuTrigger>
          </ButtonWrapper>
        </Button>
      </Tooltip>
    );
  }
);

type NavigationButtonProps = {
  children: ReactNode;
  icon: ReactElement;
  isActive?: boolean;
} & ComponentProps<'button'>;

export const NavigationButton = React.forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ children: text, icon, isActive = false, ...props }, forwardedRef) => {
    const [open, setOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const triggerRef = useRef<HTMLSpanElement>(null) as React.RefObject<HTMLSpanElement>;
    const contentRef = useRef<HTMLSpanElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
      if (contentRef.current) {
        const el = contentRef.current;
        setIsOverflowing(el.scrollWidth > el.clientWidth);
      }
    }, [text]);

    const renderedIcon =
      isActive || isFocused
        ? React.cloneElement(icon as ReactElement<{ color?: string }>, { color: colorIconActive })
        : icon;

    return (
      <DropdownMenu isOpen={open} onOpenChange={setOpen} triggerRef={triggerRef}>
        <NavButton
          triggerRef={triggerRef}
          isActive={isActive}
          onToggleDropdown={setOpen}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          tooltip={isOverflowing ? text : undefined}
          ref={forwardedRef}
          {...props}
        >
          <InnerText ref={contentRef}>
            {renderedIcon}
            {!isOverflowing && text}
          </InnerText>
        </NavButton>
        <DropdownMenuContent>
          <TitleContainer>
            <TitleText>Settings</TitleText>
          </TitleContainer>
          <Container>
            <DropdownMenuItem>
              <FlagIcon size="small" color={colorIconContrast} />
              <span>Set as first page</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PencilIcon size="small" color={colorIconStandardLighter} />
              <span>Rename</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ClipboardIcon size="small" color={colorIconStandardLighter} />
              <span>Copy</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SquareBehindSquareIcon size="small" color={colorIconStandardLighter} />
              <span>Duplicate</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <TrashIcon size="small" color={colorIconDestructive} />
              Delete
            </DropdownMenuItem>
          </Container>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);
