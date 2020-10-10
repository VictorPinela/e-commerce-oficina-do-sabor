import React from 'react';
import './styles.css';
import imagem from '../../assets/images/products/bolinha-de-queijo.jpg';

const DescProduto = () => {
    return (
        <div className="container">
            <h1 className="nome-produto">Bolinha de Queijo</h1>
            <div className="div-img">
                <img id='img-produto' src={imagem} alt="imagem aleatoria" />
            </div>
            <div className="descricao">
                <p className="descricao-texto">Salgado artesanal, empanado, embalado e refrigerado,
                 com recheio de queijo. O salgado deverá ser retirado da embalagem e frito antes do consumo.</p>
            </div>
        </div>
    )
}

export default DescProduto;