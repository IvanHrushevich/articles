import { BrowserRouter } from 'react-router-dom';
import { PartialStoryFn } from 'storybook/internal/types';

export const RouterDecorator = (Story: PartialStoryFn) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
