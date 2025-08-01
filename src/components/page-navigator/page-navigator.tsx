import React, {
  type MouseEvent,
  useRef,
  createRef,
  type ReactElement,
  useMemo,
  useState,
} from 'react';
import { PlusIcon } from 'src/components/icons';
import { colorTextStandard } from 'src/theme';
import { InnerText, PageButtonWrapper, PageNavigatorBar, PageNavigatorContent } from './elements';
import { Button } from 'src/components/button';
import { NavigationItem } from './navigation-item/navigation-item.tsx';
import { InlineAddButton } from './inline-add-button/inline-add-button.tsx';
import { styled } from '@linaria/react';
import { useHorizontalListNavigation } from 'src/hooks/use-horizontal-list-navigation';
import { type DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { SortableItem } from 'src/components/page-navigator/sortable-item.tsx';
import clsx from 'clsx';
import { SortableList } from 'src/components/page-navigator/sortable-list.tsx';
import { dragEndsCss, isDraggingCss } from './styles';
import type { IconProps } from 'src/components/icons/svg';

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
  onReorder?: (updatedPages: Page[]) => void;
}

export const PageNavigator = ({
  pages,
  activePageId,
  onSelectPage,
  onAddNewPage,
  onReorder,
}: PageNavigatorProps) => {
  const [lastDraggedId, setLastDraggedId] = useState<string | null>(null);

  const onAddPageAtEnd = () => {
    requestAnimationFrame(() => scrollToEnd(pageNavigatorScrollRef.current));
    onAddNewPage?.(pages.length);
  };

  const refs = useMemo(() => {
    return Array(pages.length + 1)
      .fill(null)
      .map(() => createRef<HTMLButtonElement>());
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = pages.findIndex((page) => page.id === active.id);
      const newIndex = pages.findIndex((page) => page.id === over.id);
      const newPages = arrayMove(pages, oldIndex, newIndex);

      onReorder?.(newPages);

      setLastDraggedId(String(active.id));
      setTimeout(() => setLastDraggedId(null), 600);
    }
  };

  return (
    <PageNavigatorBar>
      <PageNavigatorContent
        role="navigation"
        aria-label="Page navigation"
        ref={pageNavigatorScrollRef}
      >
        <PageItems>
          <SortableList<Page> items={pages} onDragEnd={handleDragEnd}>
            {pages.map(({ title, icon, id }, index) => (
              <React.Fragment key={id}>
                <SortableItem id={id} key={id}>
                  {({ listeners, attributes, setNodeRef, style, isDragging }) => (
                    <PageButtonWrapper ref={setNodeRef} style={style}>
                      <NavigationItem
                        ref={refs[index]}
                        label={title}
                        icon={icon as ReactElement<IconProps>}
                        isActive={id === activePageId}
                        onClick={(e) => handleChange(e, id)}
                        {...listeners}
                        {...attributes}
                        {...getItemProps(index)}
                        className={clsx({
                          [isDraggingCss]: isDragging,
                          [dragEndsCss]: lastDraggedId === id,
                        })}
                      />
                    </PageButtonWrapper>
                  )}
                </SortableItem>
                {index < pages.length && (
                  <InlineAddButton
                    aria-hidden="true"
                    onClick={() => onAddNewPage?.(index)}
                    aria-label={`Add page after ${title}`}
                  />
                )}
              </React.Fragment>
            ))}
          </SortableList>
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
