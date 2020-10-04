import React from 'react';
import styles from './styles.css';
import Menu from '../../Components/Menu';

const Initial = () => {
    return (

        <div id='area'>
            <div id='body'>
                <Menu />
                <div className='form-initial'>
                    <div className='initial'></div>
                </div>

            </div>
        </div>
    );
}

export default Initial;