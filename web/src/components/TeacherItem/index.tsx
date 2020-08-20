import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGCcASxkvT_rA/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=p6xpujr5-s8P58ssJooDWUx1HH8b-zE4Otpjyz8ySQ8" alt="Thainá Weingartner"/>
        <div>
          <strong>Thainá Weingartner</strong>
          <span>Design</span>
        </div>
      </header>
      
      <p>
      Graduada em Design pela UFRN, sou apaixonada por inovação, tecnologia e tenho afinidade por projetos sociais. 
      Estou em minha segunda graduação, em Engenharia de Software, na Uniamerica.    
      <br/><br/>
      Busco por um emprego na área de TI ou Marketing para poder trabalhar com 
      todo o conhecimento e experiência que já tenho e adquirir novas habilidades. 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt=""/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;