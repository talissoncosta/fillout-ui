import { Tooltip } from 'src/components/tooltip';
import { PlusIcon } from 'src/components/icons';
import { IconButton } from 'src/components/icon-button';
import type { ComponentProps } from 'react';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    side: 'top',
    sideOffset: 5,
    content: 'Tooltip text',
  },
};

export default meta;

export const Default = {
  render: (args: ComponentProps<typeof Tooltip>) => (
    <Tooltip {...args}>
      <IconButton>
        <PlusIcon size="tiny" />
      </IconButton>
    </Tooltip>
  ),
};

export const BottomSide = {
  args: {
    content: 'This tooltip shows below',
    side: 'bottom',
  },
  render: (args: ComponentProps<typeof Tooltip>) => (
    <Tooltip {...args}>
      <IconButton>
        <PlusIcon size="tiny" />
      </IconButton>
    </Tooltip>
  ),
};

export const WithCustomContent = {
  args: {
    content: (
      <span>
        <strong>Bold text</strong> inside tooltip
      </span>
    ),
  },
  render: (args: ComponentProps<typeof Tooltip>) => (
    <Tooltip {...args}>
      <IconButton>
        <PlusIcon size="tiny" />
      </IconButton>
    </Tooltip>
  ),
};
