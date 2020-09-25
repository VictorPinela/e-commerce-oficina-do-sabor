import React from 'react';

import Menu from '../../Components/Menu';
import styles from './styles.css';


const PageLogin = props => {

    return (
        <div id='areaLogin'>
            <div id='bodyLogin'>
                <Menu />
                <div className='form-login'>
                    <div className='login'></div>
                </div>

            </div>
        </div>
    );

}

export default PageLogin;