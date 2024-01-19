import React, {useContext, useState} from 'react';
import TodoList from "../components/TodoList";
import Modal from "../components/UI/modal/Modal";
import TodoAdd from "../components/TodoAdd";

import {ITodo} from "../components/types/types";
import {ModalContext} from "../context";

const TodoPages = () => {
    const [todos, setTodo] = useState<ITodo[]>([
        {id:1, title:'Сделать принтер в С319', complete:false},
        {id:2, title:'Включить смарт доску и провести интернет в В106', complete:false},
        {id:3, title:'Отправить на почту преподавателям задания', complete:false},
    ])
    const {modalVisible} = useContext(ModalContext)

    return (
        <div>

                <div className='w-full flex justify-center'>
                    <div className='w-2/3 font-light  mt-2 text-2xl'>
                        <TodoList items={todos} setTodo={setTodo}/>
                        {modalVisible
                            ?
                            <Modal title='Новая задача' visible={modalVisible}>
                                <TodoAdd todos={todos} setTodo={setTodo}/>
                            </Modal>
                            :
                            <></>
                        }
                    </div>
                </div>

        </div>
    );
};

export default TodoPages;