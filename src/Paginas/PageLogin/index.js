import React from 'react';
import styles from './styles.css'
import Menu from '../../Components/Menu';

const PageLogin = () => {
    return (
        <div id='areaLogin'>
            <div id='bodyLogin'>
                <Menu />
                <div className='form-Login'>
                    <div className='Login'>
                        <div className='borda-interna'>
                            <h1 id='tituloPag'>Login</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PageLogin;