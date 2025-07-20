import type { StoryObj } from '@storybook/react-vite';

import { expect, userEvent, waitFor, within } from 'storybook/test';

import { FormBuilder } from 'src/pages/form-builder';

const meta = {
  title: 'Examples/FormBuilder',
  component: FormBuilder,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FormBuilderExample: Story = {
  render: () => {
    return <FormBuilder />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole('heading', { name: /info/i })).toBeInTheDocument();

    const detailsButton = canvas.getByRole('button', { name: /details/i });
    await userEvent.click(detailsButton);

    await waitFor(() => {
      expect(canvas.getByRole('heading', { name: /details/i })).toBeInTheDocument();
    });
    await userEvent.keyboard('[ArrowRight]');
    await userEvent.keyboard('[ArrowRight]');
    await userEvent.keyboard('[Enter]');
    await expect(canvas.getByRole('heading', { name: /ending/i })).toBeInTheDocument();

    await userEvent.keyboard('[ArrowRight]');
    await userEvent.keyboard('[Enter]');

    const newPageButton = canvas.getByRole('button', { name: 'New page' });
    expect(newPageButton).toBeInTheDocument();

    await userEvent.keyboard('[ArrowRight]');
    await userEvent.keyboard('[Enter]');

    await expect(canvas.getByRole('heading', { name: /info/i })).toBeInTheDocument();
  },
};
