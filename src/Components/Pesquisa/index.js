import React from 'react';

import styles from './styles.css';
   
const BarraPesquisa = props => {
    return(
        <React.Fragment>
            <div className='pesquisa'>
                        <input placeholder='Digite sua pesquisa...' type='text' />
                        <button title='Ok' onClick='' type='submit'>Ok</button>
            </div>
            
    
      </React.Fragment>
   );
}

export default BarraPesquisa;