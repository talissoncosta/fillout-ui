import { useSortable } from '@dnd-kit/sortable';
import { shadowActive, zIndexDefault, zIndexFloating } from 'src/theme';
import { useMemo } from 'react';

export const SortableItem = ({
  id,
  children,
}: {
  id: string;
  children: (props: {
    listeners: ReturnType<typeof useSortable>['listeners'];
    attributes: ReturnType<typeof useSortable>['attributes'];
    setNodeRef: ReturnType<typeof useSortable>['setNodeRef'];
    isDragging: boolean;
    style: React.CSSProperties;
  }) => React.ReactNode;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style = useMemo(
    () => ({
      transform: `translateX(${transform?.x ?? 0}px) translateY(${transform?.y ?? 0}px) scale(1)`,
      transition,
      zIndex: isDragging ? zIndexFloating : zIndexDefault,
      boxShadow: shadowActive,
      opacity: isDragging ? 0.5 : 1,
    }),
    [transform, transition, isDragging]
  );

  return children({ listeners, attributes, setNodeRef, isDragging, style });
};
