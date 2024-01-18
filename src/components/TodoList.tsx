import React, {FC, useState} from 'react';
import {ITodo} from "./types/types";
import TodoItem from "./TodoItem";
import MyButton from "./UI/button/MyButton";

interface TodoListProps{
    items:ITodo[]
    setTodo:React.Dispatch<React.SetStateAction<ITodo[]>>
}

const TodoList:FC<TodoListProps> = ({items, setTodo}:TodoListProps) => {
    const [status, setStatus] = useState(false)
    const removeTodo = (id:number) =>{
        setTodo(items.filter(item => item.id !== id))
    }
    const statusExchange = (id:number) =>{
        setStatus(!status)
        setTodo(items.map(item => item.id == id ? {...item, complete:status} : {...item}))
    }

    return (
        <div>
            <div className='flex'>
                <h1 className='text-3xl my-2'>Задачи на сегодня</h1>
                <MyButton type='add'>+</MyButton>
            </div>

            {
                items.map((item, index) => <TodoItem todo={item} key={item.id} removeTodo={removeTodo} statusExchange={statusExchange} index={index + 1}/>)
            }
        </div>
    );
};

export default TodoList;