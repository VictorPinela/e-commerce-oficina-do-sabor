import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';


const PageLogin = props => {

    return (
        <div id='areaLogin'>
            <div id='bodyLogin'>
                <Menu />
                <div className='form-login'>
                
                   <div className='borda-interna'>
                            <a className='links' id='paracadastro'></a>
                            <a className='links' id='paralogin'></a>  
                            <a className='links' id='paraNovaSenha'></a>  
                        <div className='conteudo'>   

                                {/*FORMULÁRIO DE LOGIN*/}
                                <div id='entrar'>
                                    <h1 id='tituloPag'>Login</h1>
                                    <form method='post' action=''> 
                                         <p> 
                                            <label for='nome-login'>E-mail</label>
                                            <input id='nome-login' name='nome_login' required='required' type='email' placeholder='Ex.: contato@email.com.br'/>
                                        </p>
                                        
                                        <p> 
                                            <label for='email-login'>Senha</label>
                                            <input id='email-login' name='email_login' required='required' type='password' placeholder='Insira sua senha' /> 
                                        </p>
                                                                        
                                        <p> 
                                            <input type='submit' value='Logar' /> 
                                        </p>
                                        <p className='esqueceu_senha'>
                                            <a href='#paraNovaSenha'>
                                                 Esqueci minha senha
                                            </a>
                                        </p>
                                        <p className='link'>
                                            Ainda não tem conta?
                                            <a href='#paracadastro'>
                                                 Cadastre-se 
                                            </a>
                                        </p>

                                    </form>
                                    <div id='esqueci-senha'>
                                        <p className='titulo-esqueci'>Insira seu e-mail de cadastro para recuperar sua senha</p>
                                        <form>
                                            <p>
                                                <label>E-mail de recuperação</label>
                                                <input name='email-login' type='email' placeholder='Ex.: contato@seuemail.com.br'/>
                                                <a href='#paralogin'><input type='submit' value='Enviar Nova Senha' /></a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                                {/*FORMULÁRIO DE CADASTRO*/}
                                <div id='cadastro'>
                                <h1 id='tituloPag'>Cadastro</h1>
                                    <div id='order-cadastro'>
                                        <form method='post' action=''>  
                                            <div className='cadastro_acesso'> 
                                                <p>Dados de Acesso</p>                                  
                                                <p> 
                                                    <label for='nome_cad'>Seu nome completo</label>
                                                    <input id='nome_cad' name='nome_cad' required='required' type='text' placeholder='Nome Completo' />
                                                </p>
                                                
                                                <p> 
                                                    <label for='email_cad'>Seu e-mail</label>
                                                    <input id='email_cad' name='email_cad' required='required' type='email' placeholder='contato@email.com.br'/> 
                                                </p>
                                                
                                                <p> 
                                                    <label >Sua senha</label>
                                                    <input   name='senha_cad' required='required' type='password' placeholder='Sua senha'/>
                                                </p>
                                                <p> 
                                                    <label >Insira novamente sua senha</label>
                                                    <input   name='senha_cad' required='required' type='password' placeholder='Repita sua senha anterior'/>
                                                </p>
                                            </div>
                                            <div className='cadastro_dados_pessoais'>
                                                <p>Dados Pessoais</p> 
                                                <p> 
                                                    <label >CPF</label>
                                                    <input   name='senha_cad' required='required' type='number' placeholder='Insira seu CPF'/>
                                                </p>
                                                <p> 
                                                    <label >Celular</label>
                                                    <input   name='senha_cad' required='required' type='number' placeholder='(xx) xxxxxxxxx'/>
                                                </p>
                                                <p> 
                                                    <label >CEP </label>
                                                    <input   name='senha_cad' required='required' type='number' placeholder='xxxxxxx'/>
                                                </p>
                                                <p> 
                                                    <label >Endereço </label>
                                                    <input   name='senha_cad' required='required' type='text' placeholder='Rua ou Avenida'/>
                                                </p>
                                                <p> 
                                                    <label >Número </label>
                                                    <input   name='senha_cad' required='required' type='number' placeholder='Número'/>
                                                </p>
                                                 <p> 
                                                    <input type='submit' value='Cadastrar'/> 
                                                </p>
                                                
                                                <p className='link'>  
                                                    Já tem conta?
                                                    <a href='#paralogin'> 
                                                        Ir para Login
                                                    </a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                        
                            </div>
                    </div>

                </div>
                
            </div>
            <Footer />
        </div>
    );
}


export default PageLogin;