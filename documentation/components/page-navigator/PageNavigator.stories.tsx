import { PageNavigator } from 'src/components/page-navigator';
import { InfoIcon, FileTextIcon, CircleCheckIcon } from 'src/components/icons';
import { useState } from 'react';

const meta = {
  title: 'Components/PageNavigator',
  component: PageNavigator,
};

export default meta;

export function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export const Default = {
  render: ({ pages: initialPages }) => {
    const [activePage, setActivePage] = useState<string>('');
    const [pages, setPages] = useState(initialPages);

    const handleChange = (id) => {
      console.log({ id });
      setActivePage(id);
    };

    const handleAddNewPage = (index) => {
      const newPage = {
        id: generateId(),
        title: 'New page',
        icon: <FileTextIcon />,
      };

      const start = pages.slice(0, index + 1);
      const end = pages.slice(index + 1);

      setPages([...start, newPage, ...end]);
    };

    return (
      <PageNavigator
        pages={pages}
        activePageId={activePage}
        onSelectPage={handleChange}
        onAddNewPage={handleAddNewPage}
      />
    );
  },
  args: {
    pages: [
      { id: generateId(), title: 'Info', icon: <InfoIcon /> },
      { id: generateId(), title: 'Details', icon: <FileTextIcon /> },
      { id: generateId(), title: 'Other', icon: <FileTextIcon /> },
      { id: generateId(), title: 'Ending', icon: <CircleCheckIcon /> },
    ],
  },
};
