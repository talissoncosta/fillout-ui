import type { StoryObj } from '@storybook/react-vite';

import { PlusIcon } from 'src/components/icons';

const meta = {
  title: 'Components/Icons/PlusIcon',
  component: PlusIcon,
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
type Story = StoryObj<typeof PlusIcon>;

export const Default: Story = {
  args: {
    size: 'standard'
  }
};
