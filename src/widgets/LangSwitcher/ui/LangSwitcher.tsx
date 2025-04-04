import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';

export interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.Clear}
      onClick={toggle}
      className={classNames(cls.langSwitcher, {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};
