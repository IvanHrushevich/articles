import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  Clear = 'clear',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, theme, children, ...otherProps } = props;

    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
            type='button'
        >
            {children}
        </button>
    );
};
