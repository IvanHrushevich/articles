import { lazy } from 'react';

// TODO: testing purposes. remove later 
export const MainPageAsync = lazy(() =>
    new Promise((resolve) => {
        setTimeout(resolve, 1000);
    }).then(() => import('./MainPage'))
);
