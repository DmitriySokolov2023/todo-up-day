import React, {Dispatch, FC, SetStateAction} from 'react';

interface ButtonProps{
    onClick?:React.MouseEventHandler<HTMLButtonElement>
    children:React.ReactNode
    className?:string
}
const MyButton:FC<ButtonProps> = ({onClick, children, className}) => {
    return (
        <button
            className={`flex justify-center items-center uppercase p-1 rounded w-6 ml-1  ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default MyButton;