import React, {ComponentProps, ReactNode, useRef } from 'react';
import {
  borderRadiusStandard,
  colorStrokeStandard,
  colorSurfaceStandardActive,
  colorSurfaceStandardActiveHover,
  shadowActive,
} from 'src/theme';
import { css } from "@linaria/core";
import { Tooltip } from 'src/components/tooltip'

const buttonClass = css`
  display: flex;
  justify-content: center;
  width: 16px;
  height: 16px;
  background-color: ${colorSurfaceStandardActive};
  box-shadow: ${shadowActive};
  border-radius: ${borderRadiusStandard};
  border: 0.5px solid ${colorStrokeStandard};
  cursor: pointer;
  
  &:hover {
    background-color: ${colorSurfaceStandardActiveHover};
  }
  
  transition:
          background-color 0.6s ease,
          color 0.6s ease,
          box-shadow 0.6s ease,
          border-color 0.6s ease;
  
`;

type ButtonProps = {
  tooltip?: ReactNode
} & ComponentProps<'button'>

export const IconButton = ({
  children,
  tooltip,
  ...props
}: ButtonProps) => {
  const ref = useRef<HTMLButtonElement | null>(null)

  return (
    <Tooltip content={tooltip}>
      <button
        ref={ref}
        className={buttonClass}
        type="button"
        {...props}
      >
        {children}
      </button>
    </Tooltip>
  )
}
