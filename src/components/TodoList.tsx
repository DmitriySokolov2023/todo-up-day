import React, {FC, useContext, useEffect, useState} from 'react';
import {ITodo} from "./types/types";
import TodoItem from "./TodoItem";
import MyButton from "./UI/button/MyButton";
import {ModalContext} from "../context";

interface TodoListProps {
    items: ITodo[]
    setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const TodoList: FC<TodoListProps> = ({items, setTodo}: TodoListProps) => {
    const [status, setStatus] = useState(false)
    const [todoSort, setTodoSort] = useState(false)


    const {setModalVisible} = useContext(ModalContext)
    const removeTodo = (id: number) => {
        setTodo(items.filter(item => item.id !== id))
    }

    const statusExchange = (id: number) => {
        setStatus(!status)
        setTodo(items.map(item => item.id == id ? {...item, complete: status} : {...item}))
    }

    function getSortedTodo(){
        if (!todoSort){
            return [...items].filter(item => !item.complete)
        }
        if (todoSort){
            return [...items].filter(item => item.complete)
        }
        return items
    }
   const sortedTodo = getSortedTodo()

    return (
        <div>
            <div className='flex items-center'>
                <h1 className='text-3xl my-2'>Задачи на сегодня</h1>
                <MyButton className='bg-slate-200 h-10 hover:bg-green-400'
                          onClick={() => setModalVisible(true)}
                >+</MyButton>
            </div>
            <div className='flex items-center mb-2 font-normal text-xl'>
                <MyButton className={`w-fit ml-0 px-8 py-3 text-white ${!todoSort ? 'bg-blue-600' : 'bg-blue-400'}`}
                          onClick={()=>setTodoSort(false)}
                >
                    Текущие задачи
                </MyButton>
                <MyButton className={`w-fit px-8 py-3 text-white bg-blue-600 ${todoSort ? 'bg-blue-600' : 'bg-blue-400'}`}
                          onClick={()=>setTodoSort(true)}
                >
                    Готовые задачи
                </MyButton>
            </div>
            {
                sortedTodo.length == 0 ?
                    <h1 className='text-3xl'>Список задач пуст</h1>
                    :
                    sortedTodo.map((item, index) => <TodoItem todo={item} key={item.id} removeTodo={removeTodo} statusExchange={statusExchange} index={index + 1}/>)
            }

        </div>
    );
};

export default TodoList;