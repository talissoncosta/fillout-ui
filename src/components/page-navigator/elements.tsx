import { styled } from '@linaria/react';
import {
  borderRadiusStandard,
  colorStrokeSecondary,
  colorStrokeStandard,
  colorSurfaceSecondary,
  colorSurfaceStandard,
  colorSurfaceStandardActive,
  colorTextStandard,
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
  transition:
    opacity 180ms ease-out,
    transform 180ms ease-out;
  --toolbar-animation-speed: 120ms;
  transition-timing-function: ease-out;
  animation-name: slide-up;
  animation-duration: var(--toolbar-animation-speed);
  max-width: calc(100% - 48px);
  width: fit-content;

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
  padding: 4px 2px;
  overflow: visible;
  overflow-y: auto;

  &::-webkit-scrollbar {
    height: 0.5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorStrokeStandard};
    border-radius: 4px;
  }
`;

export const DashedLine = styled('div')`
  position: absolute;
  top: 50%;
  width: 100px;
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

export const TitleContainer = styled('div')`
  padding: 8px 12px;
  background: ${colorSurfaceSecondary};
  border-bottom: 0.5px solid ${colorStrokeStandard};
`;

export const TitleText = styled('span')`
  width: 62px;
  height: 24px;
  font-family: 'BL Melody';
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${colorTextStandard};
`;

export const Container = styled('div')`
  max-height: 40vh;
  overflow: auto;
`;

export const ButtonWrapper = styled('span')`
  display: flex;
  align-items: center;
`;
