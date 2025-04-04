import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRoter } from './providers/router';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRoter />
        </div>
      </div>
    </Suspense>
  );
};
