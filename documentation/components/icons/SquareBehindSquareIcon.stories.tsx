import type { StoryObj } from '@storybook/react-vite';

import { SquareBehindSquareIcon } from 'src/components/icons';

const meta = {
  title: 'Components/Icons/SquareBehindSquareIcon',
  component: SquareBehindSquareIcon,
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
type Story = StoryObj<typeof SquareBehindSquareIcon>;

export const Default: Story = {
  args: {
    size: 'standard'
  }
};
