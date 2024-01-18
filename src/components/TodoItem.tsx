import React, {FC, useState} from 'react';
import MyButton from "./UI/button/MyButton";
import {ITodo} from "./types/types";

interface TodoItemProps{
    todo:ITodo
    removeTodo:(id:number)=>void
    statusExchange:(id:number)=>void
    index?:number
}

const TodoItem:FC<TodoItemProps> = ({todo, removeTodo, statusExchange, index}:TodoItemProps) => {
    const [status, setStatus] = useState('bg-slate-200')


    return (
        <div>
            <div className=' flex justify-between  rounded mb-2'>
                <div
                    className={`flex items-center justify-between px-2 py-1 w-full ${todo.complete ? 'bg-green-400' : 'bg-slate-200'} rounded`}
                    onClick={()=> statusExchange(todo.id)}
                >
                    <div>{`${index}. ${todo.title}`}</div>
                    <div className='text-xl uppercase'>{todo.complete ? 'Сделал':'Делаю'}</div>
                </div>
                <MyButton
                    type='del'
                    onClick={()=>removeTodo(todo.id)}
                >-</MyButton>
            </div>

        </div>
    );
};

export default TodoItem;