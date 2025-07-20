import React, {
  cloneElement,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import type {
  ComponentProps,
  ReactElement,
  ReactNode,
  MouseEvent,
  Dispatch,
  SetStateAction,
  MouseEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
} from 'react';
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

interface PageNavButtonProps {
  children: ReactNode;
  isActive?: boolean;
  onToggleDropdown: Dispatch<SetStateAction<boolean>>;
  tooltip?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
}

const PageNavButton = forwardRef<HTMLButtonElement, PageNavButtonProps>(
  (
    {
      children,
      onClick,
      isActive,
      onToggleDropdown,
      tooltip,
      onFocus,
      onBlur,
      onKeyDown,
      ...props
    },
    forwardedRef
  ) => {
    const { refs } = useDropdownMenu();

    const handleStopPropagation = (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleContextMenu = (e: MouseEvent<HTMLButtonElement>) => {
      console.log('here');
      e.preventDefault(); // Prevents the browser's default context menu from appearing
      if (isActive) onToggleDropdown((prev: boolean) => !prev);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e);
      if (e.metaKey && e.key === 'Enter') {
        onToggleDropdown((prev: boolean) => !prev);
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

export const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(
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
      <DropdownMenu isOpen={open} onOpenChange={setOpen} triggerRef={triggerRef}>
        <PageNavButton
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
        </PageNavButton>
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
