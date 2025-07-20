import { useSortable } from '@dnd-kit/sortable';
import { shadowActive, zIndexDefault, zIndexFloating } from 'src/theme';
import { CSS } from '@dnd-kit/utilities';

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

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? zIndexFloating : zIndexDefault,
    boxShadow: shadowActive,
    opacity: isDragging ? 0.5 : 1,
  };

  return <>{children({ listeners, attributes, setNodeRef, isDragging, style })}</>;
};
