import { useState } from 'react';
import { CircleCheckIcon, FileTextIcon, InfoIcon } from 'src/components/icons';
import { PageNavigator } from 'src/components/page-navigator';
import { generateId } from 'src/utils/generate-id';
import { type ReactElement } from 'react';

type Page = { id: string; title: string; icon: ReactElement };

export const FormBuilder = () => {
  const initialPages: Page[] = [
    { id: generateId(), title: 'Info', icon: <InfoIcon /> },
    { id: generateId(), title: 'Details', icon: <FileTextIcon /> },
    { id: generateId(), title: 'Other', icon: <FileTextIcon /> },
    { id: generateId(), title: 'Ending', icon: <CircleCheckIcon /> },
  ];
  const [activePage, setActivePage] = useState<Page>(initialPages[0]);
  const [pages, setPages] = useState(initialPages);

  const handleChange = (id: string) => {
    setActivePage(pages.find((page) => page.id === id) ?? pages[0]);
  };

  const handleAddNewPage = (index: number) => {
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
    <div>
      <h1 className="text-center">{activePage?.title}</h1>
      <PageNavigator
        pages={pages}
        activePageId={activePage?.id}
        onSelectPage={handleChange}
        onAddNewPage={handleAddNewPage}
        onReorder={(pages) => setPages(pages)}
      />
    </div>
  );
};
