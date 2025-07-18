import { type ComponentProps } from 'react';
import {
  borderRadiusStandard,
  colorStrokeFocus,
  colorStrokeStandard,
  colorSurfaceStandard,
  colorSurfaceStandardActive, colorSurfaceStandardActiveHover,
  colorSurfaceStandardHover,
  colorTextSecondary,
  colorTextStandard,
  shadowActive,
  shadowFocus,
} from 'src/theme';
import { css } from "@linaria/core";
import clsx from "clsx";

const buttonClass = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${borderRadiusStandard};
  border: none;
  background-color: ${colorSurfaceStandard};
  cursor: pointer;
  color: ${colorTextSecondary};
  padding: 6px 10px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.015em;

  &:hover {
    background-color: ${colorSurfaceStandardHover};
  }

  &:focus-visible {
    background-color: ${colorSurfaceStandardActive};
    outline: 0.5px solid ${colorStrokeFocus};
    box-shadow: ${shadowFocus};
    color: ${colorTextStandard};
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
  background-color: ${colorSurfaceStandardActive};
  color: ${colorTextStandard};

  &:hover {
    background-color: ${colorSurfaceStandardActiveHover};
  }
`

type ButtonProps = {
  variant?: 'standard' | 'active';
} & ComponentProps<'button'>

export const Button = ({
  children,
  variant = 'standard',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(buttonClass, {
        [activeVariantClass]: variant === 'active'
      })}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
