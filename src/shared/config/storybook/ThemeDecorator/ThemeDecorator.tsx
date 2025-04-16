import { Theme } from 'app/providers/ThemeProvider';
import { PartialStoryFn } from 'storybook/internal/types';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: PartialStoryFn) =>
    (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );
