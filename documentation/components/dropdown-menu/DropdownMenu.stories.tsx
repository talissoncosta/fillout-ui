import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuContext,
} from 'src/components/dropdown-menu';
import { Button } from 'src/components/button';
import { styled } from '@linaria/react';
import {
  colorIconActive,
  colorIconContrast,
  colorIconDestructive,
  colorIconStandardLighter,
  colorStrokeStandard,
  colorSurfaceSecondary,
  colorTextStandard,
} from 'src/theme';
import {
  ClipboardIcon,
  FileTextIcon,
  FlagIcon,
  PencilIcon,
  SquareBehindSquareIcon,
  TrashIcon,
  VerticalDotsIcon,
} from 'src/components/icons';
import { useContext, useRef, useState } from 'react';

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  subcomponents: [DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    side: {
      control: 'radio',
      options: ['top', 'bottom'],
    },
    align: {
      control: 'radio',
      options: ['start', 'center', 'end'],
    },
  },
  args: {
    side: 'bottom',
    align: 'start',
  },
};

export default meta;

const TitleContainer = styled('div')`
  padding: 8px 12px;
  background: ${colorSurfaceSecondary};
  border-bottom: 0.5px solid ${colorStrokeStandard};
`;

const TitleText = styled('span')`
  width: 62px;
  height: 24px;
  font-family: 'BL Melody';
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${colorTextStandard};
`;

const InnerText = styled('span')`
  display: flex;
  gap: 6px;
`;

const ButtonWrapper = styled('span')`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Container = styled('div')`
  max-height: 40vh;
  overflow: auto;
`;

export const Default = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(await canvas.findByText('Text example'));
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <DropdownMenu open={open} onOpenChange={setOpen} closeOnClickOutside>
        <DropdownMenuTrigger>
          <Button variant="active">
            <ButtonWrapper>
              <InnerText>
                <FileTextIcon color={colorIconActive} /> Text example
              </InnerText>
              <VerticalDotsIcon size="small" color={colorIconStandardLighter} />
            </ButtonWrapper>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent {...args}>
          <TitleContainer>
            <TitleText>Settings</TitleText>
          </TitleContainer>
          <Container>
            <DropdownMenuItem>
              <FlagIcon size="small" color={colorIconContrast} />
              <span>Set as first page</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PencilIcon size="small" color={colorIconStandardLighter} />
              <span>Rename</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ClipboardIcon size="small" color={colorIconStandardLighter} />
              <span>Copy</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SquareBehindSquareIcon size="small" color={colorIconStandardLighter} />
              <span>Duplicate</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <TrashIcon size="small" color={colorIconDestructive} />
              Delete
            </DropdownMenuItem>
          </Container>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

const MenuTrigger = ({ triggerRef }) => {
  const { refs } = useContext(DropdownMenuContext);

  const handleStopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Button variant="active" ref={refs.setReference}>
      <ButtonWrapper>
        <InnerText>
          <FileTextIcon color={colorIconActive} /> Text example
        </InnerText>
        <DropdownMenuTrigger>
          <VerticalDotsIcon
            ref={triggerRef}
            onMouseDown={handleStopPropagation}
            size="small"
            color={colorIconStandardLighter}
          />
        </DropdownMenuTrigger>
      </ButtonWrapper>
    </Button>
  );
};

export const CustomReference = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLSpanElement>(null);

    return (
      <DropdownMenu open={open} onOpenChange={setOpen} closeOnClickOutside triggerRef={triggerRef}>
        <MenuTrigger triggerRef={triggerRef} />
        <DropdownMenuContent {...args}>
          <Container>
            <DropdownMenuItem onSelect={() => alert('Edit')}>Edit</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => alert('Delete')}>Delete</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => alert('Report')}>Report</DropdownMenuItem>
          </Container>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
