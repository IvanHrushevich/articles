import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('test render', () => {
        componentRender(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('check collapsing', () => {
        componentRender(<Sidebar />);

        const toggleButton = screen.getByTestId('sidebar-toggle');

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
