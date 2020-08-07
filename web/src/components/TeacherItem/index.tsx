import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const index = () => {
    return (
        <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/51931239?s=460&u=15baf7862f98cf366f49a667c2800dda9933bf8f&v=4" alt="Felipe Nieto"/>
            <div>
              <strong>Felipe Nieto</strong>
              <span>Matemática</span>
            </div>
          </header>

          <p>
            Gosta de estudar matemática desde que tem 16 anos de idade.
            <br/>
            <br/>
            Desde então, vem se tornando um programador apaixonado pelas melhoras tecnologias como react, express e banco de dados tanto sql quanto no-sql.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
    </article>
    )
}

export default index;

