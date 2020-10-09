import React from 'react';


import './styles.css';

const Modal = ({ onClose= () => {}, children }) => {
    return (
        <div className='modal'>
            <div className='container-modal'>
                <input type='button' value='Fechar' className='close' onClick={onClose} />
                <div className='conteudo'>{children}</div>
            </div>
        </div>
    );
}

export default Modal;