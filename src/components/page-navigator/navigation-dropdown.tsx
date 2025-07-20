import type { ReactNode, Dispatch, SetStateAction, RefObject } from 'react';
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

export const NavigationDropdown = ({
  children,
  isOpen,
  onOpenChange,
  triggerRef,
}: NavigationDropdownProps) => {
  return (
    <DropdownMenu isOpen={isOpen} onOpenChange={onOpenChange} triggerRef={triggerRef}>
      {children}
      <DropdownMenuContent>
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
};
