import type { StoryObj } from '@storybook/react-vite';

import { ClipboardIcon } from 'src/components/icons';

const meta = {
  title: 'Components/Icons/ClipboardIcon',
  component: ClipboardIcon,
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
type Story = StoryObj<typeof ClipboardIcon>;

export const Default: Story = {
  args: {
    size: "standard"
  }
};
