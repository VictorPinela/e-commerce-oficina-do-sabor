import React from 'react';
import styles from './styles.css'
import Menu from '../../Components/Menu';
import bolinhaDeQueijo from '../../assets/images/products/bolinha-de-queijo.jpg';
import esfiha from '../../assets/images/products/esfiha.jpg';
import CardProduto from '../../Components/Card-Produto/Card-Produto';
import { Grid } from '@material-ui/core';

const Initial = () => {
    return (
        <>
            <div id='area'>
                <div id='bodyInitial'>
                    <Menu />
                    <div className='form-initial'>
                        <div className='initial'>
                            <div className='borda-interna'>
                                <h1 id='tituloPag'>Produtos</h1>
                                <Grid container>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <CardProduto
                                            imagem={esfiha}
                                            titulo="Esfiha de Carne"
                                            tipoProduto="Assados"
                                            quantidade="10 Unidades"
                                            descricao="Salgado artesanal, assado, embalado e 
                                            refrigerado, com..."
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <CardProduto
                                            imagem={bolinhaDeQueijo}
                                            titulo="Bolinha de Queijo"
                                            tipoProduto="Congelados"
                                            quantidade="10 Unidades"
                                            descricao="Salgado artesanal, empanado, embalado e 
                                            refrigerado, com..."
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} >
                                        <CardProduto
                                            imagem={esfiha}
                                            titulo="Esfiha de Carne"
                                            tipoProduto="Assados"
                                            quantidade="10 Unidades"
                                            descricao="Salgado artesanal, assado, embalado e 
                                            refrigerado, com..."
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <CardProduto
                                            imagem={bolinhaDeQueijo}
                                            titulo="Bolinha de Queijo"
                                            tipoProduto="Congelados"
                                            quantidade="10 Unidades"
                                            descricao="Salgado artesanal, empanado, embalado e 
                                            refrigerado, com..."
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <CardProduto
                                            imagem={esfiha}
                                            titulo="Esfiha de Carne"
                                            tipoProduto="Assados"
                                            quantidade="10 Unidades"
                                            descricao="Salgado artesanal, assado, embalado e 
                                            refrigerado, com..."
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <CardProduto
                                            imagem={bolinhaDeQueijo}
                                            titulo="Bolinha de Queijo"
                                            tipoProduto="Congelados"
                                            quantidade="10 Unidades"
                                            descricao="Salgado artesanal, empanado, embalado e 
                                            refrigerado, com..."
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Initial;