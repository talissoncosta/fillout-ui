import { type ComponentProps, type ForwardedRef, forwardRef, type ReactNode } from 'react';
import {
  borderRadiusStandard,
  colorStrokeStandard,
  colorSurfaceStandard,
  colorSurfaceStandardHover,
  colorSurfaceStandardActive,
  shadowActive,
  zIndexDefault,
} from 'src/theme';
import { css } from '@linaria/core';
import { Tooltip } from 'src/components/tooltip';
import clsx from 'clsx';

const buttonClass = css`
  display: flex;
  justify-content: center;
  background-color: ${colorSurfaceStandard};
  box-shadow: ${shadowActive};
  border-radius: ${borderRadiusStandard};
  border: 0.5px solid ${colorStrokeStandard};
  cursor: pointer;
  z-index: ${zIndexDefault};

  &:hover {
    background-color: ${colorSurfaceStandardHover};
  }

  &:active {
    background-color: ${colorSurfaceStandardActive};
  }

  transition:
    background-color 0.6s ease,
    color 0.6s ease,
    box-shadow 0.6s ease,
    border-color 0.6s ease;
`;

const smallButtonClass = css`
  width: 16px;
  height: 16px;
`;
const mediumButtonClass = css`
  width: 20px;
  height: 20px;
`;
const largeButtonClass = css`
  width: 24px;
  height: 24px;
`;

const roundedButtonClass = css`
  border-radius: ${borderRadiusStandard};
`;

const squareButtonClass = css`
  border-radius: 2px;
`;

const standardButtonClass = css`
  background-color: ${colorSurfaceStandard};
`;

const ghostButtonClass = css`
  background-color: transparent;
  border: none;
  box-shadow: none;
  &:hover {
    background-color: ${colorSurfaceStandardHover};
  }
`;

type ButtonProps = {
  tooltip?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded' | 'square';
  variant?: 'standard' | 'ghost';
} & ComponentProps<'button'>;

export const IconButton = forwardRef(
  (
    {
      children,
      tooltip,
      size = 'small',
      shape = 'rounded',
      variant = 'standard',
      className,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <Tooltip content={tooltip}>
      <button
        ref={ref}
        className={clsx(
          buttonClass,
          {
            [smallButtonClass]: size === 'small',
            [mediumButtonClass]: size === 'medium',
            [largeButtonClass]: size === 'large',
            [roundedButtonClass]: shape === 'rounded',
            [squareButtonClass]: shape === 'square',
            [standardButtonClass]: variant === 'standard',
            [ghostButtonClass]: variant === 'ghost',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    </Tooltip>
  )
);
