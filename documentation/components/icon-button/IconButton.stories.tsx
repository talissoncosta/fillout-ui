import { IconButton } from 'src/components/icon-button';
import { PlusIcon } from "src/components/icons";

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

export default meta;

export const Default = {
  args: {
    children: <PlusIcon size="tiny" />
  }
};

export const WithTooltip = {
  args: {
    children: <PlusIcon size="tiny" />,
    tooltip: 'Test tooltip'
  }
};

