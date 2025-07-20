import React, { type MouseEvent, useRef, createRef, type ReactElement, useMemo } from 'react';
import { PlusIcon } from 'src/components/icons';
import { colorTextStandard } from 'src/theme';
import { InnerText, PageButtonWrapper, PageNavigatorBar, PageNavigatorContent } from './elements';
import { Button } from 'src/components/button';
import { NavigationButton } from './navigation-button.tsx';
import { InlineAddButton } from './inline-add-button.tsx';
import { styled } from '@linaria/react';
import { useHorizontalListNavigation } from 'src/hooks/use-horizontal-list-navigation';

interface Page {
  title: string;
  icon: ReactElement;
  id: string;
}

const PageItems = styled('div')`
  display: flex;
  flex-direction: row;
`;

function scrollToEnd(container: HTMLElement | null) {
  if (!container) return;
  container.scrollTo({
    left: container.scrollWidth,
    behavior: 'smooth',
  });
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
  // const navsRef = useRef<RefObject<HTMLButtonElement>[]>(
  //   Array(pages.length + 1)
  //     .fill()
  //     .map(() => createRef<HTMLButtonElement>())
  // );

  const onAddPageAtEnd = () => {
    requestAnimationFrame(() => scrollToEnd(pageNavigatorScrollRef.current));
    onAddNewPage?.(pages.length);
  };

  const refs = useMemo(() => {
    return Array(pages.length + 1)
      .fill()
      .map(() => createRef<HTMLElement>());
  }, [pages.length]);

  const pageNavigatorScrollRef = useRef<HTMLOListElement | null>(null);

  const { getItemProps } = useHorizontalListNavigation({
    refs,
    loop: true,
    initialActiveIndex: pages.findIndex((page) => page.id === activePageId) ?? 0,
    onSelect: (index) => {
      if (index < pages.length) {
        onSelectPage?.(pages[index].id);
      } else if (onAddNewPage && index === pages.length) {
        onAddPageAtEnd();
      }
    },
  });

  const handleChange = (event: MouseEvent<HTMLButtonElement>, id: string) => {
    event.preventDefault();
    onSelectPage?.(id);
  };

  return (
    <PageNavigatorBar>
      <PageNavigatorContent
        role="navigation"
        aria-label="Page navigation"
        ref={pageNavigatorScrollRef}
      >
        <PageItems>
          {pages.map(({ title, icon, id }, index) => (
            <React.Fragment key={id}>
              <PageButtonWrapper>
                <NavigationButton
                  icon={icon}
                  isActive={id === activePageId}
                  onClick={(e) => handleChange(e, id)}
                  aria-current={id === activePageId ? 'page' : undefined}
                  aria-label={title}
                  {...getItemProps(index)}
                  ref={refs[index]}
                >
                  {title}
                </NavigationButton>
              </PageButtonWrapper>
              {index < pages.length && (
                <>
                  <InlineAddButton
                    aria-hidden="true"
                    onClick={() => onAddNewPage?.(index)}
                    aria-label={`Add page after ${title}`}
                  />
                </>
              )}
            </React.Fragment>
          ))}

          <PageButtonWrapper>
            <Button
              variant="active"
              aria-label="Add new page"
              ref={refs[pages.length]}
              {...getItemProps(pages.length)}
              onClick={onAddPageAtEnd}
            >
              <InnerText>
                <PlusIcon size="small" color={colorTextStandard} />
                Add page
              </InnerText>
            </Button>
          </PageButtonWrapper>
        </PageItems>
      </PageNavigatorContent>
    </PageNavigatorBar>
  );
};
