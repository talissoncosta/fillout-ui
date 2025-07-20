import { css } from '@linaria/core';

export const dragEndsCss = css`
  animation: pulseHighlight 0.6s ease;

  @keyframes pulseHighlight {
    0% {
      box-shadow: none;
    }
    50% {
      box-shadow:
        0 0 0 1.5px rgba(47, 114, 226, 0.25),
        /* focus ring */ 0px 1px 1px rgba(0, 0, 0, 0.02),
        /* subtle shadow */ 0px 1px 3px rgba(0, 0, 0, 0.04); /* subtle shadow */
    }
    100% {
      box-shadow: none;
    }
  }
`;

export const isDraggingCss = css`
  box-shadow: 0 0 0 2px rgba(47, 114, 226, 0.4);
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
