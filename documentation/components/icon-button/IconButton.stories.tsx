import { IconButton } from 'src/components/icon-button';
import { InfoIcon, PlusIcon } from "src/components/icons";

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

export const Sizes = {
  render: () => {

    return(
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <IconButton size="small"><PlusIcon size="tiny" /></IconButton>
        <IconButton size="medium"><PlusIcon size="small" /></IconButton>
        <IconButton size="large"><PlusIcon size="standard" /></IconButton>
      </div>
    )
  }
}

export const Shapes = {
  render: () => {

    return(
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <IconButton size="large" shape="rounded"><InfoIcon size="small" /></IconButton>
        <IconButton size="large" shape="square"><InfoIcon size="small" /></IconButton>
      </div>
    )
  }
}

export const StandardVariant = {
  render: () => {

    return(
      <IconButton size="large" variant="standard">
        <InfoIcon />
      </IconButton>
    )
  }
}

export const GhostVariant = {
  render: () => {

    return(
      <IconButton size="large" variant="ghost">
        <InfoIcon />
      </IconButton>
    )
  }
}

