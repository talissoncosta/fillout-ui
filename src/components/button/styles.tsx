import { css } from '@linaria/core';
import {
  borderRadiusStandard,
  colorStrokeFocus,
  colorStrokeStandard,
  colorSurfaceStandard,
  colorSurfaceStandardActive,
  colorSurfaceStandardHover,
  colorSurfaceTertiaryActive,
  colorSurfaceTertiaryHover,
  colorTextSecondary,
  colorTextStandard,
  shadowActive,
  shadowFocus,
} from 'src/theme';

export const buttonClass = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${borderRadiusStandard};
  border: none;
  background-color: red;
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

export const activeVariantClass = css`
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
