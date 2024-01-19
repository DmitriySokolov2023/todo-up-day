import React, {useState} from 'react';
import TodoPages from "./pages/TodoPages";
import {ModalContext} from "./context";

function App() {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <ModalContext.Provider value={{
            modalVisible,
            setModalVisible
        }}>
            <TodoPages/>
        </ModalContext.Provider>

    );
}

export default App;
