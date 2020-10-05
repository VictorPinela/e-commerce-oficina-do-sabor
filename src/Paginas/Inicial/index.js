import React from 'react';
import styles from './styles.css'
import Menu from '../../Components/Menu';

const Initial = () => {
    return (
        <div id='area'>
            <div id='bodyInitial'>
                <Menu />
                <div className='form-initial'>                
                   <div className='initial'>
                       <div className='borda-interna'>
                        <h1 id='tituloPag'>Testeee</h1>
                       </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Initial;