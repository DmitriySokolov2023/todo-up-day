import React, {FC} from 'react';
import MyButton from "./UI/button/MyButton";
import {ITodo} from "./types/types";

interface TodoItemProps{
    todo:ITodo
}

const TodoItem:FC<TodoItemProps> = ({todo}:TodoItemProps) => {
    return (
        <div>
            <div className=' flex justify-between  rounded mb-2'>
                <div className='flex items-center px-2 py-1 w-full bg-slate-200 rounded'>{`${todo.id}. ${todo.title}`}</div>
                <MyButton type='del'>-</MyButton>
            </div>

        </div>
    );
};

export default TodoItem;