import { lazy } from 'react';

// TODO: testing purposes. remove later
export const AboutPageAsync = lazy(() =>
    new Promise((resolve) => {
        setTimeout(resolve, 1000);
    }).then(() => import('./AboutPage'))
);
