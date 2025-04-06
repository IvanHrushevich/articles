import { screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
// eslint-disable-next-line max-len
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';
import React from 'react';

describe('Sidebar', () => {
    test('test render', () => {
        renderWithTranslation(<Sidebar />)

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
