import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
// eslint-disable-next-line max-len
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('test render', () => {
        renderWithTranslation(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('check collapsing', () => {
        renderWithTranslation(<Sidebar />);

        const toggleButton = screen.getByTestId('sidebar-toggle');

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
