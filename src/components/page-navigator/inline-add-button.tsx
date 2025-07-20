import { css } from '@linaria/core';
import { type ComponentProps, useEffect, useRef, useState } from 'react';
import { IconButton } from 'src/components/icon-button';
import clsx from 'clsx';
import { PlusIcon } from 'src/components/icons';
import { DashedLine } from 'src/components/page-navigator/elements.tsx';

const addPageButtonClass = css`
  transition: opacity 200ms ease-out;
  opacity: 0;
  pointer-events: none;
  will-change: opacity;
`;

const buttonVisibleClass = css`
  opacity: 1;
  pointer-events: auto;
`;

const containerClass = css`
  width: 16px;
  height: 30px;
  align-content: center;
  justify-items: center;
  transition: width 200ms ease-out;
  align-self: center;
  list-style-type: none;
`;

const animateContainerClass = css`
  width: 48px;
`;

const HOVER_DEBOUNCE = 150; // ms

export const InlineAddButton = ({ onClick }: ComponentProps<typeof IconButton>) => {
  const [isVisible, setIsVisible] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  const showButton = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsVisible(true);
    }, HOVER_DEBOUNCE);
  };

  const hideButton = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  return (
    <li
      className={clsx(containerClass, {
        [animateContainerClass]: isVisible,
      })}
      onMouseEnter={showButton}
      onMouseLeave={hideButton}
    >
      <DashedLine />

      <IconButton
        onClick={onClick}
        className={clsx(addPageButtonClass, {
          [buttonVisibleClass]: isVisible,
        })}
        tooltip="Add page"
        tabIndex={!isVisible ? -1 : 0}
      >
        <PlusIcon size="tiny" />
      </IconButton>
    </li>
  );
};
