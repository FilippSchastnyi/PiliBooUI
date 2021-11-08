import React, {FC} from 'react';
import './Button.css'

export interface ButtonProps {
    color: string;
    big?: boolean;
}

const Button: FC<ButtonProps> = ({children, color, big, ...props}) => {
    const rootClasses = ['btn']
    big === true ? rootClasses.push('btn--big') : null

    return (
        <button {...props} className={rootClasses.join(' ')} style={{color}}>
            {children}
        </button>
    );
};

export default Button;
