import type { StoryObj } from '@storybook/react-vite';

import { InfoIcon } from 'src/components/icons';

const meta = {
  title: 'Components/Icons/InfoIcon',
  component: InfoIcon,
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
type Story = StoryObj<typeof InfoIcon>;

export const Default: Story = {
  args: {
    size: 'standard',
  },
};
