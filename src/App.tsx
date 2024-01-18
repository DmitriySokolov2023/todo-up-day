import React, {useState} from 'react';
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
import TodoAdd from "./components/TodoAdd";
import TodoItem from "./components/TodoItem";
import {ITodo} from "./components/types/types";
import TodoList from "./components/TodoList";
import Modal from "./components/UI/modal/Modal";
import {ModalContext} from "./context";

function App() {
    const [todos, setTodo] = useState<ITodo[]>([
        {id:1, title:'Сделать принтер в С319', complete:false},
        {id:2, title:'Включить смарт доску и провести интернет в В106', complete:false},
        {id:3, title:'Отправить на почту преподавателям задания', complete:false},
    ])
    const [modalVisible, setModalVisible] = useState(false)


    return (
        <ModalContext.Provider value={{
            modalVisible,
            setModalVisible
        }}>
            <div className='w-full flex justify-center'>
                <div className='w-2/3 font-light  mt-2 text-2xl'>
                    <TodoList items={todos} setTodo={setTodo}/>
                    <Modal title='Новая задача' visible={modalVisible}>
                        <TodoAdd todos={todos} setTodo={setTodo}/>
                    </Modal>
                </div>
            </div>
        </ModalContext.Provider>
    );
}

export default App;
