import { classNames } from 'shared/lib/classNames';
import './Loader.scss';

export interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('lds-ripple', {}, [className])}>
            <div></div>
            <div></div>
        </div>
    );
};
