import React, {FC} from 'react';
import './Input.css'

export interface InputProps {
    big: boolean;
    placeholder: string;
    label: string;
}

const Input: FC<InputProps> = ({big, placeholder, label, ...props}) => {
    const cls = ['input']
    big ? cls.push('input--big') : null
    return (
        <label>
            {label}
            <input className={cls.join(' ')} placeholder={placeholder} {...props}/>
        </label>
    );
};

export default Input;
