import { styled } from '@linaria/react';
import {
  borderRadiusStandard,
  colorStrokeInverseStandard,
  colorSurfaceInverseStandard,
  colorTextInverseStandard,
  shadowInverseStandard,
  zIndexFloating,
} from 'src/theme';
import { Content } from '@radix-ui/react-tooltip';

export const TooltipContent = styled(Content)`
  border-radius: ${borderRadiusStandard};
  padding: 10px 15px;
  font-size: 14px;
  line-height: 1;
  color: ${colorTextInverseStandard};
  background-color: ${colorSurfaceInverseStandard};
  box-shadow: ${shadowInverseStandard};
  border: 0.5px solid ${colorStrokeInverseStandard};
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  z-index: ${zIndexFloating};

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }

  &[data-state='delayed-open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }

  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }

  &[data-state='delayed-open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
