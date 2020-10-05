import React from 'react';
import DescProduto from '../../Components/DescProduto/index'
import styles from './styles.css';
import Menu from '../../Components/Menu';

const Initial = () => {
    return (
        <div id='areaLogin'>
            <div id='bodyLogin'>
                <Menu />
                <div className='form-login'>                
                   <div className='login'>                        
                        <DescProduto/>                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Initial;