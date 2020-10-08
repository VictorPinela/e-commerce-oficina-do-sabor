import React from 'react';
import styles from './styles.css'
import Menu from '../../Components/Menu';
import TabCesta from '../../Components/TabCesta';
import TabItem from '../../Components/TabCesta/TabItem';


const Cesta = () => {
    return (
        <div id='areaCesta'>
            <div id='bodyCesta'>
                <Menu />
                <div className='form-Cesta'>
                    <div className='Cesta'>
                        <div className='borda-interna'>
                            <h1 id='tituloPag'>Sua cesta</h1>
                            <TabCesta />
                            <div id='btn'>
                                <button id='botao1' onClick={()=> Deletar()}>Limpar cesta</button>
                                <button id='botao2' onClick={()=> Finalizar()}>Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Deletar(){
    if(document.getElementById("tab1") != null){
    document.getElementById("tab1").remove();}
    else(
        alert('Cesta vazia!')
    )
}

function Finalizar(){
    alert('Compra finalizada!')
}

export default Cesta;