import type { ReactNode, Dispatch, SetStateAction, RefObject, ComponentType } from 'react';
import type { IconProps } from 'src/components/icons/svg';
import { colorIconContrast, colorIconDestructive, colorIconStandardLighter } from 'src/theme';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from 'src/components/dropdown-menu';
import { Container, TitleContainer, TitleText } from 'src/components/page-navigator/elements.tsx';
import {
  ClipboardIcon,
  FlagIcon,
  PencilIcon,
  SquareBehindSquareIcon,
  TrashIcon,
} from 'src/components/icons';

interface NavigationDropdownProps {
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  triggerRef?: RefObject<HTMLSpanElement | null>;
}

type MenuItem = {
  icon: ComponentType<IconProps>;
  text: string;
  color: string;
} | {
  separator: true;
};

const MENU_ITEMS: MenuItem[] = [
  {
    icon: FlagIcon,
    text: 'Set as first page',
    color: colorIconContrast,
  },
  {
    icon: PencilIcon,
    text: 'Rename',
    color: colorIconStandardLighter,
  },
  {
    icon: ClipboardIcon,
    text: 'Copy',
    color: colorIconStandardLighter,
  },
  {
    icon: SquareBehindSquareIcon,
    text: 'Duplicate',
    color: colorIconStandardLighter,
  },
  { separator: true },
  {
    icon: TrashIcon,
    text: 'Delete',
    color: colorIconDestructive,
  },
];

export const NavigationDropdown = ({ children, isOpen, onOpenChange }: NavigationDropdownProps) => {
  return (
    <DropdownMenu isOpen={isOpen} onOpenChange={onOpenChange}>
      {children}
      <DropdownMenuContent>
        <TitleContainer>
          <TitleText>Settings</TitleText>
        </TitleContainer>
        <Container>
          {MENU_ITEMS.map((item, index) =>
            'separator' in item ? (
              <DropdownMenuSeparator key={`separator-${index}`} />
            ) : (
              <DropdownMenuItem key={item.text}>
                <item.icon size="small" color={item.color} />
                <span>{item.text}</span>
              </DropdownMenuItem>
            )
          )}
        </Container>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
