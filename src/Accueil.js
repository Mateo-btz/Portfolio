import React, {useState} from 'react';
import Home from './Home';
import { CSSTransition } from 'react-transition-group';
import './css/fade.css';
import history from "./history";
import './css/title.css';


function Accueil(url) {
history.push(url);
    return(  
        <>
        <Home />
        <br></br>
        {/* <div className="content">
        <h2>Bien le bonjour, Je m'appelle <span>Matéo Balthazard</span></h2>
        <p>Bienvenue sur mon portfolio</p>
        <a className="homeBtn" href="mailto:mateo.btz@gmail.com" style={{textDecoration: "none", color: "inherit"}}>Envoyez-moi un Email</a>
        </div> */}

  <div class="content">
  <div class="title__container">
    <p class="title__container__text">
      Hello
    </p>
    
    <ul class="title__container__list">
      <li class="title__container__list__item">World</li>
      <li class="title__container__list__item">Les amis</li>
      <li class="title__container__list__item">Dolly</li>
      <li class="title__container__list__item">You</li>
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
