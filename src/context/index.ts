import {createContext, Dispatch, FC, SetStateAction} from "react";

interface ModalContextProps{
    modalVisible:boolean
    setModalVisible:Dispatch<SetStateAction<boolean>>
}
// export const ModalContext = createContext<ModalContextProps>()