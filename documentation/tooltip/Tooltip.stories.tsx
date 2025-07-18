import { Tooltip } from 'src/components/tooltip';
import { PlusIcon } from "src/components/icons";
import { IconButton } from "src/components/icon-button";

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    side: 'top',
    sideOffset: 5,
    content: 'Tooltip text'
  },
};

export default meta;

export const Default = {
  render: (args) => (
    <Tooltip {...args}>
      <IconButton>
        <PlusIcon size="tiny" />
      </IconButton>
    </Tooltip>
  ),
};

export const BottomSide = {
  args: {
    content: 'This tooltip shows below',
    side: 'bottom',
  },
  render: (args) => (
    <Tooltip {...args}>
      <IconButton>
        <PlusIcon size="tiny" />
      </IconButton>
    </Tooltip>
  ),
};

export const WithCustomContent = {
  args: {
    content: (
      <span>
        <strong>Bold text</strong> inside tooltip
      </span>
    ),
  },
  render: (args) => (
    <Tooltip {...args}>
      <IconButton>
        <PlusIcon size="tiny" />
      </IconButton>
    </Tooltip>
  ),
};
