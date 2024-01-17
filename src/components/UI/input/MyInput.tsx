import React, {Dispatch, FC, SetStateAction} from 'react';

interface InputProps{
    placeholder:string
    onChange:Dispatch<SetStateAction<string>>
    value:string
}

const MyInput:FC<InputProps> = ({placeholder, onChange,value}) => {
    return (
        <input
            className='border rounded px-2 py-1 outline-none w-full'
            value={value}
            placeholder={placeholder}
            onChange={(event)=>onChange(event.target.value)}
        />
    );
};

export default MyInput;