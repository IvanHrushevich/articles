import {render, screen} from '@testing-library/react'
import { Button } from './Button';
import React from 'react';

describe('Button', () => {
    test('with only first param', () => {
        render(<Button>TEST</Button>);
        
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
