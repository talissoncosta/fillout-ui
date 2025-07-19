import { Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip';
import { TooltipContent } from './elements';
import type { ComponentProps, ReactNode } from 'react';

type TooltipProps = {
  content: ReactNode | string;
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
} & Omit<ComponentProps<typeof Content>, 'content'>;

export const Tooltip = ({ content, children, side, sideOffset, ...props }: TooltipProps) => {
  if (!content) return children;

  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <TooltipContent side={side || 'top'} sideOffset={sideOffset || 5} {...props}>
            {content}
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  );
};
