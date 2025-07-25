import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
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
import { useRef, useState } from 'react';

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  subcomponents: [DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    placement: {
      control: 'radio',
      options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'],
    },
  },
  args: {
    placement: 'bottom-start',
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
  render: ({ placement, ...args }) => {
    const [open, setOpen] = useState(false);
    return (
      <DropdownMenu isOpen={open} onOpenChange={setOpen} placement={placement}>
        <DropdownMenuTrigger shouldHandleInteractions>
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
            <DropdownMenuItem index={1} onSelect={() => alert('Set as first page')}>
              <FlagIcon size="small" color={colorIconContrast} />
              <span>Set as first page</span>
            </DropdownMenuItem>
            <DropdownMenuItem index={2} onSelect={() => alert('Rename')}>
              <PencilIcon size="small" color={colorIconStandardLighter} />
              <span>Rename</span>
            </DropdownMenuItem>
            <DropdownMenuItem index={3} onSelect={() => alert('Copy')}>
              <ClipboardIcon size="small" color={colorIconStandardLighter} />
              <span>Copy</span>
            </DropdownMenuItem>
            <DropdownMenuItem index={4} onSelect={() => alert('Duplicate')}>
              <SquareBehindSquareIcon size="small" color={colorIconStandardLighter} />
              <span>Duplicate</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem index={5} onSelect={() => alert('Delete')}>
              <TrashIcon size="small" color={colorIconDestructive} />
              Delete
            </DropdownMenuItem>
          </Container>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const CustomReference = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(await canvas.findByRole('menu'));
  },
  render: ({ placement, ...args }) => {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLSpanElement>(null);
    const toogle = () => setOpen((prev) => !prev);

    const handleClick = (e: MouseEvent) => {
      const isTriggerClick = triggerRef.current?.contains(e.target as Node);

      if (!isTriggerClick && !open) return;

      toogle();
    };

    return (
      <DropdownMenu isOpen={open} onOpenChange={setOpen} placement={placement}>
        <DropdownMenuTrigger>
          <Button variant="active" onClick={handleClick}>
            <ButtonWrapper>
              <InnerText>
                <FileTextIcon color={colorIconActive} /> Text example
              </InnerText>
              <span ref={triggerRef}>
                <VerticalDotsIcon size="small" color={colorIconStandardLighter} />
              </span>
            </ButtonWrapper>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent {...args}>
          <Container>
            <DropdownMenuItem index={1} onSelect={() => alert('Edit')}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem index={2} onSelect={() => alert('Delete')}>
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem index={3} onSelect={() => alert('Report')}>
              Report
            </DropdownMenuItem>
          </Container>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
