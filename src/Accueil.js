import React from 'react';
import Home from './Home';
import './css/fade.css';
import history from "./history";
import './css/title.css';


function Accueil(url) {
history.push(url);
    return(  
    <>
      <Home />
      <br></br>
      <div className="content">
        <div className="title__container">
          <p className="title__container__text">Hello</p>
          <ul className="title__container__list">
            <li className="title__container__list__item">World</li>
            <li className="title__container__list__item">Les amis</li>
            <li className="title__container__list__item">Dolly</li>
            <li className="title__container__list__item">You</li>
          </ul>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="titre">
          <h2>Je m'appelle <span>Matéo Balthazard</span></h2>
          <p>Bienvenue sur mon portfolio</p>
        </div>
      </div>
    </>
  )
}

export default Accueil;
