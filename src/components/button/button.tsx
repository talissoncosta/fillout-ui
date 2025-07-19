import { type ComponentProps, type ForwardedRef, forwardRef } from 'react';
import {
  borderRadiusStandard,
  colorStrokeFocus,
  colorStrokeStandard,
  colorSurfaceStandard,
  colorSurfaceStandardActive,
  colorSurfaceStandardHover,
  colorSurfaceTertiary,
  colorSurfaceTertiaryActive,
  colorSurfaceTertiaryHover,
  colorTextSecondary,
  colorTextStandard,
  shadowActive,
  shadowFocus,
} from 'src/theme';
import { css } from '@linaria/core';
import clsx from 'clsx';

const buttonClass = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${borderRadiusStandard};
  border: none;
  background-color: ${colorSurfaceTertiary};
  cursor: pointer;
  color: ${colorTextSecondary};
  padding: 6px 10px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.015em;

  &:hover {
    background-color: ${colorSurfaceTertiaryHover};
  }

  &:focus-visible {
    background-color: ${colorSurfaceStandard};
    outline: 0.5px solid ${colorStrokeFocus};
    box-shadow: ${shadowFocus};
    color: ${colorTextStandard};
  }

  &:active {
    background-color: ${colorSurfaceTertiaryActive};
  }

  transition:
    background-color 0.6s ease,
    color 0.6s ease,
    box-shadow 0.6s ease,
    border-color 0.6s ease;
`;

const activeVariantClass = css`
  box-shadow: ${shadowActive};
  border: 0.5px solid ${colorStrokeStandard};
  background-color: ${colorSurfaceStandard};
  color: ${colorTextStandard};

  &:hover {
    background-color: ${colorSurfaceStandardHover};
  }

  &:active {
    background-color: ${colorSurfaceStandardActive};
  }
`;

type ButtonProps = {
  variant?: 'standard' | 'active';
} & ComponentProps<'button'>;

export const Button = forwardRef(
  (
    { children, variant = 'standard', ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(buttonClass, {
          [activeVariantClass]: variant === 'active',
        })}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  }
);
