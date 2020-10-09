import React from 'react';

import './styles.css';

import lupa from '../../assets/images/lupa.png';
   
const BarraPesquisa = props => {
    return(
        <React.Fragment>
            <div className='pesquisa'>
                        <input id='pesquisaSite' placeholder='Digite sua pesquisa...' type='text' />
                        <button title='Ok' onClick='' type='submit'><img src={lupa}/></button>
            </div>
            
    
      </React.Fragment>
   );
}

export default BarraPesquisa;