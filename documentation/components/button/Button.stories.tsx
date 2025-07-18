import type { StoryObj } from '@storybook/react-vite';

import { Button } from 'src/components/button';
import { FileTextIcon } from "src/components/icons";
import { colorIconActive, colorIconStandard } from "src/theme";
import { styled } from "@linaria/react";
import { type ComponentProps, useState} from "react";

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    isActive: {
      control: 'boolean',
      defaultValue: false,
    },
    onClick: { action: 'clicked' }
  }
}

const ContentWrapper = styled('span')`
  display: flex;
  gap: 6px;
`

export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {
  args: {
    children: 'Text example'
  }
};

export const Active: Story = {
  args: {
    children: 'Text example',
    variant: "active"
  }
};


export const ToggleActiveState  = {
  render: (args: ComponentProps<typeof Button>) => {
    const [isActive, setIsActive] = useState(false)
    const [isFocusVisible, setIsFocusVisible] = useState(false)
    return (
      <Button
        {...args}
        onKeyUp={() => setIsFocusVisible(true)}
        onBlur={() => setIsFocusVisible(false)}
        onClick={() => setIsActive(prev => !prev)}
        variant={isActive ? "active" : "standard"}
      >
        <span className="flex">
          <ContentWrapper>
            <FileTextIcon color={isActive || isFocusVisible ? colorIconActive : colorIconStandard} />
            Other
          </ContentWrapper>
        </span>
      </Button>
    )
  }
};
