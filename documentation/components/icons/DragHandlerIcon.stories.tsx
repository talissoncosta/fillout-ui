import type { StoryObj } from '@storybook/react-vite';

import { DragHandlerIcon } from 'src/components/icons';

const meta = {
  title: 'Components/Icons/DragHandlerIcon',
  component: DragHandlerIcon,
  argTypes: {
    size: {
      control: 'radio',
      options: ['standard', 'small'],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DragHandlerIcon>;

export const Default: Story = {
  args: {
    size: 'standard',
  },
};
