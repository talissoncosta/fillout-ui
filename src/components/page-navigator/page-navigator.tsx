import React, {
  type MouseEvent,
  useRef,
  createRef,
  type RefObject,
  useEffect,
  type ReactElement,
} from 'react';
import { PlusIcon } from 'src/components/icons'; // Adjust import as needed
import { colorTextStandard } from 'src/theme';
import {
  DashedLine,
  InnerText,
  PageButtonWrapper,
  PageNavigatorBar,
  PageNavigatorContent,
} from './elements';
import { Button } from 'src/components/button';
import { NavigationButton } from './navigation-button.tsx';
import { InlineAddButton } from './inline-add-button.tsx'; // Adjust import as needed

interface Page {
  title: string;
  icon: ReactElement;
  id: string;
}

interface PageNavigatorProps {
  pages: Page[];
  activePageId: string;
  onSelectPage?: (id: string) => void;
  onAddNewPage?: (index: number) => void;
}

export const PageNavigator = ({
  pages,
  activePageId,
  onSelectPage,
  onAddNewPage,
}: PageNavigatorProps) => {
  const navsRef = useRef<RefObject<HTMLButtonElement | null>[]>([]);
  const addPageRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    navsRef.current = [
      ...pages.map((_, index) => navsRef.current[index] || createRef<HTMLButtonElement>()),
      addPageRef,
    ];
  }, [pages]);
  const handleChange = (event: MouseEvent<HTMLButtonElement>, id: string) => {
    event.preventDefault();
    onSelectPage?.(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    console.log({ key: e.key }); // Debugging log
    if (!navsRef.current || navsRef.current.length === 0) return; // Safety check

    // Find the index of the currently focused button
    const currentIndex = navsRef.current.findIndex((ref) => ref.current === document.activeElement);
    if (currentIndex === -1) return; // No button is focused

    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % navsRef.current.length; // Loop to 0 after last
      navsRef.current[nextIndex].current?.focus();
    }
    if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + navsRef.current.length) % navsRef.current.length; // Loop to last after 0
      navsRef.current[prevIndex].current?.focus();
    }
  };

  return (
    <PageNavigatorBar>
      <PageNavigatorContent
        role="navigation"
        aria-label="Page navigation"
        onKeyDown={handleKeyDown}
      >
        <DashedLine />
        {pages.map(({ title, icon, id }, index) => (
          <React.Fragment key={id}>
            <PageButtonWrapper>
              <NavigationButton
                icon={icon}
                isActive={id === activePageId}
                onClick={(e) => handleChange(e, id)}
                aria-current={id === activePageId ? 'page' : undefined}
                aria-label={title}
                ref={navsRef.current[index]} // Assign ref to each button
              >
                {title}
              </NavigationButton>
            </PageButtonWrapper>
            {index < pages.length && onAddNewPage && (
              <InlineAddButton
                onClick={() => onAddNewPage?.(index)}
                aria-label={`Add page after ${title}`}
              />
            )}
          </React.Fragment>
        ))}
        <PageButtonWrapper>
          <Button
            variant="active"
            aria-label="Add new page"
            ref={addPageRef} // Assign ref to Add page button
          >
            <InnerText>
              <PlusIcon size="small" color={colorTextStandard} />
              Add page
            </InnerText>
          </Button>
        </PageButtonWrapper>
      </PageNavigatorContent>
    </PageNavigatorBar>
  );
};
