import type { StoryObj } from '@storybook/react-vite';

import { FlagIcon } from 'src/components/icons';

const meta = {
  title: 'Components/Icons/FlagIcon',
  component: FlagIcon,
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
type Story = StoryObj<typeof FlagIcon>;

export const Default: Story = {
  args: {
    size: 'standard'
  }
};
