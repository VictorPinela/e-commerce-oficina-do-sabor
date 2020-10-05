import React from 'react';
import styles from './styles.css'
import Menu from '../../Components/Menu';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import bolinhaDeQueijo from '../../assets/images/products/bolinha-de-queijo.jpg';
import esfiha from '../../assets/images/products/esfiha.jpg';

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
                                    <Container>
                                        <Row >
                                            <Col>
                                                <Card style={{ width: '35rem' }} className='row'>
                                                    <Card.Img variant="top" src="https://static-images.ifood.com.br/image/upload//pratos/61f508fa-dc03-4e95-809d-86c7ada777a6/202009081831_OxgQ_e.jpg" />
                                                    <Card.Body>
                                                        <Card.Title><strong>Bolinha de Queijo</strong></Card.Title>
                                                        <Card.Text>
                                                            Salgado artesanal, empanado e refrigerado, com recheio de queijo.
                                                            O salgado deverá ser retirado da embalagem e frito antes do consumo.
                                                    </Card.Text>
                                                        <Button variant="primary" >Saiba Mais</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card style={{ width: '35rem'}} className='row'>
                                                    <Card.Img variant="top" src="https://static-images.ifood.com.br/image/upload/t_medium/pratos/61f508fa-dc03-4e95-809d-86c7ada777a6/202009241310_UeiJ_b.png" />
                                                    <Card.Body>
                                                        <Card.Title><strong>Bolinha de Queijo</strong></Card.Title>
                                                        <Card.Text>
                                                            Salgado artesanal, empanado e refrigerado, com recheio de queijo.
                                                            O salgado deverá ser retirado da embalagem e frito antes do consumo.
                                                    </Card.Text>
                                                        <Button variant="primary" >Saiba Mais</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}


export default Initial;