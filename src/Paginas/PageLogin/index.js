import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

import './styles.css';

import Menu from '../../Components/Menu';
import Modal from '../../Components/Modal';


const PageLogin = props => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { register, watch, handleSubmit, getValues, errors } = useForm();

    function onSubmit(data) {
        console.log("Data submitted: ", data);
    } 

   
    return (
                <div id='areaLogin'>
                    <div id='bodyLogin'>
                        <Menu />
                        <div className='form-login'>

                            <div className='borda-interna'>
                                <a className='links' id='paracadastro'></a>
                                <a className='links' id='paralogin'></a>

                                <div className='conteudo'>

                                    {/*FORMULÁRIO DE LOGIN*/}
                                    <div id='entrar'>
                                        <h1 id='tituloPag'>Login</h1>
                                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                            <p>
                                                <label for='email-login'>E-mail</label>
                                                <input 
                                                    id='email_login'
                                                    name='nome_login'
                                                    type='email' 
                                                    placeholder='Ex.: contato@email.com.br'
                                                    ref={register({
                                                        required: 'Digite seu email',
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                            message: "Entre com um e-mail válido",
                                                        }
                                                    })}
                                                 />
                                                {errors.email && <p className="error">{errors.email.message}</p>}
                                            </p>

                                            <p>
                                                <label for='senha_login'>Senha</label>
                                                <input id='senha_login' name='senha_login' required='required' type='password' placeholder='Insira sua senha' />
                                            </p>

                                            <p className='button-logar'>
                                                <input type='submit' value='Logar' />
                                            </p>

                                        </form>
                                        <p className='esqueceu_senha'>
                                            <button onClick={() => setIsModalVisible(true)}>
                                                Esqueci minha senha
                                            </button>
                                        </p>
                                        <p className='link'>
                                            Ainda não tem conta?
                                            <a href='#paracadastro'>
                                                Cadastre-se
                                            </a>
                                        </p>
                                        {isModalVisible ? (
                                            <Modal onClose={() => setIsModalVisible(false)}>
                                                <div id='esqueci-senha'>
                                                    <p className='titulo-esqueci'>Insira seu e-mail de cadastro para recuperar sua senha</p>
                                                    <form>
                                                        <p>
                                                            <label>E-mail de recuperação</label>
                                                            <input id='email_login' name='email-login' type='email' placeholder='Ex.: contato@seuemail.com.br' />
                                                            <input type='submit' value='Enviar Nova Senha' />
                                                        </p>
                                                    </form>
                                                </div>
                                            </Modal>
                                        ) : null}
                                    </div>
                                    {/*FORMULÁRIO DE CADASTRO*/}
                                    <div id='cadastro'>
                                        <h1 id='tituloPag'>Cadastro</h1>
                                        <div id='order-cadastro'>
                                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                                <div className='cadastro_acesso'>
                                                    <p>Dados de Acesso</p>
                                                    <p>
                                                        <label for='nome_cad'>Seu nome completo</label>
                                                        <input id='nome_cad' name='nome_cad' required='required' type='text' placeholder='Nome Completo' />
                                                    </p>

                                                    <p>
                                                        <label for='email_cad'>Seu e-mail</label>
                                                            <input 
                                                                id='email_login'
                                                                name='email'
                                                                type='email' 
                                                                placeholder='Ex.: contato@email.com.br'
                                                                ref={register({
                                                                    required: 'Digite seu email',
                                                                    pattern: {
                                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                                        message: "Entre com um e-mail válido",
                                                                    }
                                                                })}
                                                            />
                                                        {errors.email && <p className="error">{errors.email.message}</p>}
                                
                                                    </p>

                                                    <p>
                                                        <label >Sua senha</label>
                                                        <input 
                                                                id='senha_login'
                                                                name='password'
                                                                type='password' 
                                                                placeholder='Sua senha'
                                                                ref={register({
                                                                    required: 'Insira uma senha',
                                                                    pattern: {
                                                                        value: /^[A-Z0-9._%+-]{6,20}$/i,
                                                                        message: "Entre com uma senha maior que 6 caracteres",
                                                                    }
                                                                })}
                                                            />
                                                        {errors.password && <p className="error">{errors.password.message}</p>}
                                                    </p>

                                                    <p>
                                                        <label >Insira novamente sua senha</label>
                                                        <input 
                                                                id='senha_login2'
                                                                name='password_dois'
                                                                type='password' 
                                                                placeholder='Repita sua senha '
                                                                ref={register({
                                                                    required: 'Insira novamente sua senha',
                                                                    pattern: {
                                                                        validate: value => {
                                                                            if (value === getValues()["password"]) {
                                                                              return true;
                                                                            } else {
                                                                              return "The passwords do not match";                                                                        
                                                                            }   
                                                                    }
                                                                }})}
                                                            />
                                                        {errors.password_dois && <p className="error">{errors.password_dois.message}</p>}
                                                    </p>
                                                </div>
                                                <div className='cadastro_dados_pessoais'>
                                                    <p>Dados Pessoais</p>
                                                    <p>
                                                        <label >CPF</label>
                                                        <input 
                                                            id='cpf_login'
                                                            name='cpf'
                                                            type='text' 
                                                            placeholder='000.000.000-00'
                                                            ref={register({
                                                                required: 'Digite seu CPF',
                                                                pattern: {
                                                                    value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                                                                    message: "Entre com CPF válido",
                                                                }
                                                            })}
                                                        />
                                                            {errors.cpf && <p className="error">{errors.cpf.message}</p>}
                                                    </p>
                                                    <p>
                                                        <label >Celular</label>
                                                        <input 
                                                            id='cel_cad'
                                                            name='celular'
                                                            type='text' 
                                                            placeholder='(xx)xxxxxxxxx'
                                                            ref={register({
                                                                required: 'Digite seu celular com DDD',
                                                                pattern: {
                                                                    value: /^(\d{2})\d{4,5}\d{4}$/i,
                                                                    message: "Entre com celular válido",
                                                                }
                                                            })}
                                                        />
                                                            {errors.celular && <p className="error">{errors.celular.message}</p>}
                                                        </p>
                                                    <p>
                                                        <label >CEP </label>
                                                        <input name='cep_cad' required='required' type='number' placeholder='xxxxxxx' />
                                                    </p>
                                                    <p>
                                                        <label >Endereço </label>
                                                        <input name='endereco_cad' required='required' type='text' placeholder='Rua ou Avenida' />
                                                    </p>
                                                    <p>
                                                        <label >Número </label>
                                                        <input name='num_cad' required='required' type='number' placeholder='Número' />
                                                    </p>
                                                    <p>
                                                        <input type='submit'  value='Cadastrar' />
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
                </div>
    );
}


export default PageLogin;

