import type { StoryObj } from '@storybook/react-vite';

import { FileTextIcon } from 'src/components/icons';

const meta = {
  title: 'Components/Icons/FileTextIcon',
  component: FileTextIcon,
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
type Story = StoryObj<typeof FileTextIcon>;

export const Default: Story = {
  args: {
    size: 'standard'
  }
};
