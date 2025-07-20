import { Tooltip } from 'src/components/tooltip';
import { PlusIcon } from 'src/components/icons';
import { IconButton } from 'src/components/icon-button';
import type { ComponentProps } from 'react';
import { userEvent, within } from 'storybook/test';
import { Button } from '../../../src/components/button';

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
  render: (args) => (
    <Tooltip {...args}>
      <Button>Button with tooltip</Button>
    </Tooltip>
  ),
  args: {
    content: 'Add item',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.hover(button);
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.hover(button);
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.hover(button);
  },
};
