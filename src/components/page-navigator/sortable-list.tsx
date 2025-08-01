import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  type Modifier,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { UniqueIdentifier } from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import type { SortingStrategy } from '@dnd-kit/sortable';
import type { ReactNode } from 'react';

interface BaseItem {
  id: UniqueIdentifier;
}

interface Props<T extends BaseItem> {
  items: T[];
  onDragEnd(event: DragEndEvent): void;
  children: ReactNode;
}

interface Props<T extends BaseItem> {
  items: T[];
  onDragEnd(event: DragEndEvent): void;
  children: ReactNode;
  modifiers?: Modifier[];
  strategy?: SortingStrategy;
}

export function SortableList<T extends BaseItem>({
  items,
  onDragEnd,
  children,
  modifiers,
  strategy = horizontalListSortingStrategy,
}: Props<T>) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={onDragEnd}
      modifiers={modifiers ?? [restrictToHorizontalAxis]}
    >
      <SortableContext items={items} strategy={strategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
}
