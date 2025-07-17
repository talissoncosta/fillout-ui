import type { StoryObj } from '@storybook/react-vite';

import { TrashIcon } from 'src/components/icons';

const meta = {
  title: 'Components/Icons/TrashIcon',
  component: TrashIcon,
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
type Story = StoryObj<typeof TrashIcon>;

export const Default: Story = {
  args: {
    size: 'standard'
  }
};
