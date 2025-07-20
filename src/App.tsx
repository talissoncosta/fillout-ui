import { useState } from 'react';
import { CircleCheckIcon, FileTextIcon, InfoIcon } from 'src/components/icons';
import { PageNavigator } from 'src/components/page-navigator';
import { generateId } from 'src/utils/generate-id';
import { type ReactElement } from 'react';
import { colorStrokeStandard, colorSurfaceStandard } from 'src/theme';

type PageMeta = {
  id: string;
  title: string;
  icon: ReactElement;
};

type PageData = {
  id: string;
  title: string;
  content: string;
  backgroundColor?: string;
  // and so on...
};

const initialMeta: PageMeta[] = [
  { id: '1', title: 'Welcome', icon: <InfoIcon /> },
  { id: '2', title: 'User Info', icon: <FileTextIcon /> },
  { id: '3', title: 'Review', icon: <CircleCheckIcon /> },
];

const initialData: Record<string, PageData> = {
  '1': {
    id: '1',
    title: 'Welcome',
    content: 'Welcome to the form builder.',
    backgroundColor: '#f0f0f0',
  },
  '2': {
    id: '2',
    title: 'User Info',
    content: 'Collect user info here.',
    backgroundColor: '#FFFDE7',
  },
  '3': { id: '3', title: 'Review', content: 'Final review step.', backgroundColor: '#F3E5F5' },
};

const App = () => {
  const [pagesMeta, setPagesMeta] = useState<PageMeta[]>(initialMeta);
  const [pagesData, setPagesData] = useState<Record<string, PageData>>(initialData);
  const [activePageId, setActivePageId] = useState<string>('1');

  const activePageData = pagesData[activePageId];

  const handleAddNewPage = (index: number) => {
    const id = generateId();

    const title = `Step ${pagesMeta.length + 1}`;

    const newMeta = { id, title, icon: <FileTextIcon /> };
    const newData = { id, title, content: 'New page content', backgroundColor: '#ffffff' };

    const start = pagesMeta.slice(0, index + 1);
    const end = pagesMeta.slice(index + 1);

    setPagesMeta([...start, newMeta, ...end]);
    setPagesData((prev) => ({ ...prev, [id]: newData }));
  };
  const handleChange = (id: string) => {
    if (pagesData[id]) {
      setActivePageId(id);
    } else {
      console.warn(`No content found for page ${id}`);
    }
  };
  return (
    <div
      style={{
        background: activePageData?.backgroundColor || colorSurfaceStandard,
        padding: 16,
        height: '100vh',
      }}
    >
      <h1 className="text-center">{activePageData.title}</h1>
      <PageNavigator
        pages={pagesMeta}
        activePageId={activePageId}
        onSelectPage={handleChange}
        onAddNewPage={handleAddNewPage}
        onReorder={(pages) => setPagesMeta(pages)}
      />
    </div>
  );
};

export default App;
