import React, {Dispatch, FC, SetStateAction} from 'react';

interface ButtonProps{
    onClick?:React.MouseEventHandler<HTMLButtonElement>
    children:React.ReactNode
    type:string
}
const MyButton:FC<ButtonProps> = ({onClick, children, type}) => {
    return (
        <button
            className={`uppercase p-1 rounded w-6 ml-1 ${type==='add' ? 'bg-slate-200' : 'bg-red-500'}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default MyButton;