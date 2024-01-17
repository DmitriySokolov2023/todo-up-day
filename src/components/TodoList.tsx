import React, {FC} from 'react';
import {ITodo} from "./types/types";
import TodoItem from "./TodoItem";

interface TodoListProps{
    items:ITodo[]
}

const TodoList:FC<TodoListProps> = ({items}:TodoListProps) => {
    return (
        <div>
            <h1 className='text-2xl my-2'>Задачи на сегодня</h1>
            {
                items.map(item => <TodoItem todo={item} key={item.id}/>)
            }
        </div>
    );
};

export default TodoList;