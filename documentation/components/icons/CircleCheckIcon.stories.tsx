import type { StoryObj } from '@storybook/react-vite';

import { CircleCheckIcon } from 'src/components/icons';

const meta = {
  title: 'Components/Icons/CircleCheckIcon',
  component: CircleCheckIcon,
  argTypes: {
    size: {
      control: 'radio',
      options: ['standard', 'small']
    },
    color: {
      control: 'color'
    }
  }
}

export default meta;
type Story = StoryObj<typeof CircleCheckIcon>;

export const Default: Story = {
  args: {
    size: 'standard'
  }
};
