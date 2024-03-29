import React, {FC, useContext} from 'react';
import {ModalContext} from "../../../context";

interface ModalProps{
    title:string
    children:React.ReactNode
    visible:boolean
}
const Modal:FC<ModalProps> = ({title, children, visible}) => {
    const {setModalVisible} = useContext(ModalContext)

    return (
        <div className={`${visible ? 'flex':'hidden'} justify-center fixed top-0 left-0 right-0 bottom-0 bg-stone-800/50`}
             onClick={()=>setModalVisible(false)}
        >
            <div
                className='w-2/3 mt-20 bg-white h-fit px-4 py-2 rounded'
                onClick={(event) => event.stopPropagation()}
            >
                <h1 className='text-3xl'>{title}</h1>
                {children}
            </div>
        </div>
    );
};

export default Modal;