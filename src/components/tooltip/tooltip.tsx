import { Tooltip as RadixTooltip } from "radix-ui";
import { TooltipContent } from "./elements.tsx";
import type { ReactNode } from "react";

type TooltipProps = {
  content: ReactNode
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
};
export const Tooltip = ({ content, children, side, sideOffset }: TooltipProps) => {
  if (!content) return children

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent side={side || 'top'} sideOffset={sideOffset || 5}>
            {content}
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

