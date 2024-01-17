import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {ITodo} from "./types/types";

interface TodoAddProps{
    todos:ITodo[],
    setTodo:Dispatch<SetStateAction<ITodo[]>>
}
const TodoAdd:FC<TodoAddProps> = ({todos, setTodo}) => {
    const [value, setValue] = useState('')
    const addTodo = () =>{
        const todo:ITodo = {
            id:todos.length + 1,
            title:value,
            complete:false
        }
        setTodo([...todos, todo])
    }
    return (
        <div className='flex mt-2'>
            <MyInput
                value={value}
                onChange={setValue}
                placeholder='Введите задачу'
            />
            <MyButton
                onClick={addTodo}
                type='add'
            >+</MyButton>
        </div>
    );
};

export default TodoAdd;