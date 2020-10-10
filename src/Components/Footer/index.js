import React from 'react';

import './styles.css';

import LogoBranco from '../../assets/images/Logo-site_BRANCO.png';

   
const Footer = props => {
    return(
        <React.Fragment>
            <div id='footer_black'>
                
                <p>Todos os Direitos Reservados</p>
                <img src={LogoBranco} alt='Imagem de footer'/>
                        
            </div>
           
            
    
      </React.Fragment>
   );
}

export default Footer;