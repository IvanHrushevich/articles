import { classNames } from 'shared/lib/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

export interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
