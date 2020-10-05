import React from 'react';
import './styles.css';
import imagem from '../../assets/images/pizza.jpg'

const DescProduto = () => {
    return(
        <div className="container">
            <h1 className="nome-produto">Pizza:</h1>
            <div className="div-img">
                <img src={imagem} alt="imagem aleatoria"/>
            </div>
            <div className="descricao">
                <p className="descricao-texto">Incrivel gosto de sapato, mais difícil de mastigar do que um chiclete 
                e potencialmente pode te levar ao hospital. Queijo cheddar crocante e reciclado e com pedaços de churros
                para manter os vermes. Mas o tomate é orgânico.</p>
            </div>
        </div>
    )
}

export default DescProduto;