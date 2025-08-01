import { css } from '@linaria/core';
import { type ComponentProps } from 'react';
import clsx from 'clsx';
import { IconButton } from 'src/components/icon-button';
import { PlusIcon } from 'src/components/icons';
import { DashedLine } from 'src/components/page-navigator/elements';
import { useHoverVisibility } from './hooks/use-hover-visibility';

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

export const InlineAddButton = ({ onClick }: ComponentProps<typeof IconButton>) => {
  const { isVisible, show, hide } = useHoverVisibility();

  return (
    <li
      className={clsx(containerClass, {
        [animateContainerClass]: isVisible,
      })}
      onMouseEnter={show}
      onMouseLeave={hide}
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
