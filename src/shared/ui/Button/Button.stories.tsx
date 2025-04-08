import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: ThemeButton.Clear,
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Outline',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};
