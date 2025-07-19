import { styled } from '@linaria/react';
import {
  borderRadiusStandard,
  colorStrokeSecondary,
  colorStrokeStandard,
  colorSurfaceStandard,
  colorSurfaceStandardActive,
  shadowStandard,
  zIndexBase,
  zIndexDefault,
} from 'src/theme';

export const InnerText = styled('span')`
  display: flex;
  gap: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;

export const PageNavigatorBar = styled('nav')`
  position: fixed;
  bottom: 24px;
  z-index: ${zIndexDefault};
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${colorStrokeStandard};
  border-radius: ${borderRadiusStandard};
  background-color: ${colorSurfaceStandard};
  box-shadow: ${shadowStandard};
  place-self: center;
  max-width: 100%;
  transition:
    opacity 180ms ease-out,
    transform 180ms ease-out;
  --toolbar-animation-speed: 120ms;

  transition-timing-function: ease-out;
  animation-name: slide-up;
  animation-duration: var(--toolbar-animation-speed);

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translate(0, 100%);
    }
  }
`;

export const PageNavigatorContent = styled('ol')`
  display: flex;
  position: relative;
  overflow-y: auto;
  padding: 2px;
  &::-webkit-scrollbar {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorStrokeStandard};
    border-radius: 4px;
  }
`;

export const DashedLine = styled('div')`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: transparent;
  border-top: 1px dashed ${colorStrokeSecondary};
  z-index: ${zIndexBase};
`;

export const PageButtonWrapper = styled('li')`
  position: relative;
  z-index: ${zIndexDefault};
  background-color: ${colorSurfaceStandardActive};
  border-radius: ${borderRadiusStandard};
  list-style-type: none;
`;
