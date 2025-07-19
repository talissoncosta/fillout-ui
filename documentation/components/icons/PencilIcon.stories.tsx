import type { StoryObj } from '@storybook/react-vite';

import { PencilIcon } from 'src/components/icons';

const meta = {
  title: 'Components/Icons/PencilIcon',
  component: PencilIcon,
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
type Story = StoryObj<typeof PencilIcon>;

export const Default: Story = {
  args: {
    size: 'standard',
  },
};
