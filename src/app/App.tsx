import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRoter } from './providers/router';
import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

// TODO: remove
function MyComponent() {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <button onClick={toggle}>{t('Перевод')}</button>
      <h1>{t('Тестовый пример')}</h1>
    </div>
  );
}

export const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <MyComponent />
        <div className="content-page">
          <Sidebar />
          <AppRoter />
        </div>
      </div>
    </Suspense>
  );
};
