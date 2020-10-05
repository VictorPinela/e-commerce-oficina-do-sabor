import React from 'react';
import styles from './styles.css';
import Menu from '../../Components/Menu';

const Cesta = () => {
    return (
        <div id='areaCesta'>
            <div id='bodyCesta'>
                <Menu />
                <div className='formCesta'>
                   <div className='Cesta'>
                        <div className='conteudoCesta'>
                            <h1>Sua cesta</h1>
                        </div>
                        <table class='tabela'>
                                <tr className='colunaTitulo'>
                                    <td>Item</td>
                                    <td>Quantidade</td>
                                    <td>Valor</td>
                                </tr>
                                <tr className='coluna'>
                                    <td>pizza</td>
                                    <td>1</td>
                                    <td>R$30,00</td>
                                </tr>
                                <tr className='coluna'>
                                    <td>Hamburger</td>
                                    <td>2</td>
                                    <td>R$10,00</td>
                                </tr>
                                <tr className='colunaTotal'>
                                    <td>Total</td>
                                    <td>3</td>
                                    <td>R$50,00</td>
                                </tr>
                        </table>
                    </div>
                </div>
                <div>
                    <button class='botoes'>Limpar</button>
                    <button class='botoes'>Finalizar</button>
                </div>
            </div>
        </div>
    );
}

export default Cesta;