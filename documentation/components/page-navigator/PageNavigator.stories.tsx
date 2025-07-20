import { PageNavigator } from 'src/components/page-navigator';
import { InfoIcon, FileTextIcon, CircleCheckIcon } from 'src/components/icons';
import { useState } from 'react';
import { StoryObj } from '@storybook/react-vite';
import { styled } from '@linaria/react';

const meta = {
  title: 'Components/PageNavigator',
  component: PageNavigator,
  decorators: [
    (Story) => (
      <div style={{ height: '200px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen', // removes padding
  },
};

export default meta;

function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
type Story = StoryObj<typeof PageNavigator>;
const PageNavigatorExample = ({ pages: initialPages, activePageId }) => {
  const [activePage, setActivePage] = useState<string>(activePageId);
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
      onReorder={(pages) => setPages(pages)}
    />
  );
};

export const Default: Story = {
  render: (args) => (
    <NavWrapper>
      <PageNavigatorExample {...args} />
    </NavWrapper>
  ),
  args: {
    pages: [
      { id: '1', title: 'Info', icon: <InfoIcon /> },
      { id: '2', title: 'Details', icon: <FileTextIcon /> },
      { id: '3', title: 'Other', icon: <FileTextIcon /> },
      { id: '4', title: 'Ending', icon: <CircleCheckIcon /> },
    ],
    activePageId: '1',
    onSelectPage: () => {},
    onAddNewPage: () => {},
  },
};

const NavWrapper = styled('div')`
  display: flex;
  place-content: center;
  width: 100%;
`;
export const WithManyPages: Story = {
  render: (args) => (
    <NavWrapper>
      <PageNavigatorExample {...args} />
    </NavWrapper>
  ),
  args: {
    pages: [
      { id: '1', title: 'Info', icon: <InfoIcon /> },
      { id: '2', title: 'Details', icon: <FileTextIcon /> },
      { id: '3', title: 'Other', icon: <FileTextIcon /> },
      { id: '4', title: 'Ending', icon: <CircleCheckIcon /> },
      { id: '5', title: 'Info', icon: <InfoIcon /> },
      { id: '6', title: 'Details', icon: <FileTextIcon /> },
      { id: '7', title: 'Other', icon: <FileTextIcon /> },
      { id: '8', title: 'Ending', icon: <CircleCheckIcon /> },
      { id: '9', title: 'Info', icon: <InfoIcon /> },
      { id: '10', title: 'Details', icon: <FileTextIcon /> },
      { id: '11', title: 'Other', icon: <FileTextIcon /> },
      { id: '12', title: 'Ending', icon: <CircleCheckIcon /> },
    ],
    activePageId: '1',
  },
};

export const WithLongTitles: Story = {
  render: (args) => (
    <NavWrapper>
      <PageNavigatorExample {...args} />
    </NavWrapper>
  ),
  args: {
    pages: [
      {
        id: '1',
        title: 'User Information Overview That Might Be Very Long',
        icon: <InfoIcon />,
      },
      {
        id: '2',
        title: 'Detailed Financial Breakdown and Analysis Report',
        icon: <FileTextIcon />,
      },
      {
        id: '3',
        title: 'Final Review & Completion Step for Submission',
        icon: <CircleCheckIcon />,
      },
    ],
    activePageId: '1',
  },
};

export const MoreComplex: Story = {
  render: (args) => (
    <NavWrapper>
      <PageNavigatorExample {...args} />
    </NavWrapper>
  ),
  args: {
    pages: [
      { id: generateId(), title: 'Info', icon: <InfoIcon /> },
      { id: generateId(), title: 'Details', icon: <FileTextIcon /> },
      { id: generateId(), title: 'Other', icon: <FileTextIcon /> },
      { id: generateId(), title: 'Ending', icon: <CircleCheckIcon /> },
    ],
  },
};

export const NoPages: Story = {
  render: (args) => (
    <NavWrapper>
      <PageNavigatorExample {...args} />
    </NavWrapper>
  ),
  args: {
    pages: [],
  },
};
