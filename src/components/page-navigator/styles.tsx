import { css } from '@linaria/core';
import { shadowDragging, shadowPulseHighlight } from 'src/theme';

export const dragEndsCss = css`
  animation: pulseHighlight 0.6s ease;

  @keyframes pulseHighlight {
    0% {
      box-shadow: none;
    }
    50% {
      box-shadow: ${shadowPulseHighlight};
    }
    100% {
      box-shadow: none;
    }
  }
`;

export const isDraggingCss = css`
  box-shadow: ${shadowDragging};
  background-color: var(--colorSurfaceStandardActive);
`;

export const contextButtonHiddenClass = css`
  display: none;
`;

export const contextButtonVisibleClass = css`
  display: flex;
`;

export const buttonIconClass = css`
  margin-left: 8px;
`;
