import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider';

import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [ThemeDecorator(Theme.Light)],
};

export default preview;
