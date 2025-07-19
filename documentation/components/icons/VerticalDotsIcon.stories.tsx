import type { StoryObj } from '@storybook/react-vite';

import { VerticalDotsIcon } from 'src/components/icons';

const meta = {
  title: 'Components/Icons/VerticalDotsIcon',
  component: VerticalDotsIcon,
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
type Story = StoryObj<typeof VerticalDotsIcon>;

export const Default: Story = {
  args: {
    size: 'standard',
  },
};
