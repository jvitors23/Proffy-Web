import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

function TeacherItem(){ 
    return (
    <article className="teacher-item">
        <header>
            <img src="https://scontent.flec1-1.fna.fbcdn.net/v/t1.0-9/22528133_491835104525086_1442695640697923730_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=Rf0IJEVke7UAX_vSuU9&_nc_ht=scontent.flec1-1.fna&oh=35ecd704c21d99d55a2e39119dff07db&oe=5F4E923B" alt="José Vitor"/>
            <div>
                <strong>José Vitor</strong>
                <span>Matemática</span>
            </div>
        </header>
    
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br/> <br/>
            Aliquam maximus id lectus nec eleifend. Nulla nisl nisl, dapibus uus id leus id lectus nec eleifend. Nulla nisl nisl, dapibus uctus nec eleifend. Nulla nisl nisl, dapibus ut c
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
            <img src={whatsappIcon} alt="WhatsApp"/> Entrar em contato
            </button>
        </footer>
    </article>


    );

}

export default TeacherItem; 