import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRoter } from './providers/router';
import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRoter></AppRoter>
      <button onClick={toggleTheme}>Toggle theme</button>
      <br />
    </div>
  );
};
