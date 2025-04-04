import { classNames } from 'shared/lib/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

export interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
