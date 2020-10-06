import React from 'react';
import styles from './styles.css'
import Menu from '../../Components/Menu';
import TabCesta from '../../Components/TabCesta';


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
                                <table id='tabela'>
                                    <tr>
                                        <td>Item</td>
                                        <td>Quantidade</td>
                                        <td>Valor</td>
                                    </tr>
                                    <tr>
                                        <td>Pizza</td>
                                        <td>1</td>
                                        <td>R$30,00</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>1</td>
                                        <td>R$30,00</td>
                                    </tr>
                                </table>
                                <div id='btn'>
                                    <button id='botao'>Limpar cesta</button>
                                    <button id='botao'>Finalizar Compra</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    );
}

export default Cesta;