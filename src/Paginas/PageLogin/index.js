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
                        <div className='conteudo'>     
                                {/*FORMULÁRIO DE LOGIN*/}
                                <div id='entrar'>
                                    <h1 id='tituloPag'>Login</h1>
                                    <form method='post' action=''> 
                                         <p> 
                                            <label for='nome-login'>E-mail</label>
                                            <input id='nome-login' name='nome_login' required='required' type='email' placeholder='Ex.: seuemail@email.com.br'/>
                                        </p>
                                        
                                        <p> 
                                            <label for='email-login'>Senha</label>
                                            <input id='email-login' name='email_login' required='required' type='password' placeholder='Insira sua senha' /> 
                                        </p>
                                                                        
                                        <p> 
                                            <input type='submit' value='Logar' /> 
                                        </p>
                                        
                                        <p className='link'>
                                            Ainda não tem conta?
                                            <Link to='#paracadastro'>
                                                 Cadastre-se 
                                            </Link>
                                        </p>

                                    </form>
                                </div>
                                {/*FORMULÁRIO DE CADASTRO*/}
                                <div id='cadastro'>
                                <h1 id='tituloPag'>Cadastro</h1>
                                    <form method='post' action=''>                                     
                                        <p> 
                                            <label for='nome_cad'>Seu nome completo</label>
                                            <input id='nome_cad' name='nome_cad' required='required' type='text' placeholder='Nome Completo' />
                                        </p>
                                        
                                        <p> 
                                            <label for='email_cad'>Seu e-mail</label>
                                            <input id='email_cad' name='email_cad' required='required' type='email' placeholder='seuemail@email.com.br'/> 
                                        </p>
                                        
                                        <p> 
                                            <label for='senha_cad'>Sua senha</label>
                                            <input id='senha_cad' name='senha_cad' required='required' type='password' placeholder='Sua senha'/>
                                        </p>
                                        <p> 
                                            <label for='senha_cad'>Insira novamente sua senha</label>
                                            <input id='senha_cad' name='senha_cad' required='required' type='password' placeholder='Repita sua senha anterior'/>
                                        </p>
                                        <p> 
                                            <label for='senha_cad'>CPF</label>
                                            <input id='senha_cad' name='senha_cad' required='required' type='number' placeholder='Insira seu CPF'/>
                                        </p>
                                        <p> 
                                            <label for='senha_cad'>Celular</label>
                                            <input id='senha_cad' name='senha_cad' required='required' type='number' placeholder='(xx) xxxxxxxxx'/>
                                        </p>
                                        <p> 
                                            <label for='senha_cad'>Endereço </label>
                                            <input id='senha_cad' name='senha_cad' required='required' type='text' placeholder='Rua ou Avenida'/>
                                        </p>
                                        <p> 
                                            <label for='senha_cad'>CEP </label>
                                            <input id='senha_cad' name='senha_cad' required='required' type='number' placeholder='xxxxxxx'/>
                                        </p>
                                        <p> 
                                            <label for='senha_cad'>Número </label>
                                            <input id='senha_cad' name='senha_cad' required='required' type='number' placeholder='Número'/>
                                        </p>
                                        
                                        <p> 
                                            <input type='submit' value='Cadastrar'/> 
                                        </p>
                                        
                                        <p className='link'>  
                                            Já tem conta?
                                            <Link to='#paralogin'> 
                                                Ir para Login
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                        
                            </div>
                    </div>

                </div>
            </div>
  
        </div>
    );
}


export default PageLogin;