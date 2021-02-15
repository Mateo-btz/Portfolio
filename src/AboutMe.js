import React, {useState} from 'react';
import Home from './Home';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfilePic from './moi.jpg';
import { faBootstrap, faGithubSquare, faWordpress } from "@fortawesome/free-brands-svg-icons";
import history from "./history";
import './fade.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';



function AboutMe(url) {


    history.push(url);
    return(

    <>
    <Home />
    <div className="content">
    <h2>A PROPOS</h2>
    <img src={ProfilePic} alt="pic" className="ProfilePic"></img>
    <br></br>
    <br></br>
    <SimpleBar style={{height: '200px'}}>
    <div style={{width: "90%", marginLeft: 'auto', marginRight: 'auto'}}>
    <p>Développeur <span style={{color: '#40c3ff'}}>front-end</span> junior de 22 ans, Je recherche une alternance jusqu'à Décembre 2021</p>
    <p style={{width: "90%", display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>Je fais principalement des <span style={{color: '#40c3ff'}}>sites Web et Applis</span> (e-commerce, sites vitrines, jeux en Javascript)</p>
    <p>Après un <span style={{color: '#40c3ff'}}>BAC Littéraire</span> en 2016, je m'inscris en <span style={{color: '#40c3ff'}}>Licence LLCER Anglais</span>. N'aimant pas les études supérieures, je décide de quitter la fac après cette année ratée et je m'essaie
       à <span style={{color: '#40c3ff'}}>l'interim</span> : j'y reste pendant 3 ans.</p>
    <p>J'ai pu travailler dans un bon paquet d'entreprises (plasturgie, scierie, salaison, livraison et j'en passe). C'était des jobs compliqués et souvent peu intéressants.</p> 
    <p>C'est au début de l'année 2020 que j'ai été sélectionné dans une formation qui a tout changé : <span style={{color: '#40c3ff'}}>Simplon</span>.</p>
    <p>J'ai appris mes premiers <span style={{color: '#40c3ff'}}>langages informatiques</span>, mes <span style={{color: '#40c3ff'}}>premiers frameworks</span>, et j'ai tout de suite adoré.
    J'ai pu expérimenter les joies du code, mais aussi les moments de frustration.</p>
    <p>Ma première expérience en entreprise : un stage de 2 mois chez <span style={{color: '#40c3ff'}}>Unipile</span> (anciennement Focus). J'ai pu participer au développement du site Vitrine. <a href="https://www.unipile.com/">(cliquez ici pour voir)</a></p>
    <p>Aujourd'hui, je recherche une entreprise qui serait prêt à miser sur un profil comme le mien.<span style={{color: '#40c3ff'}}> Pourquoi pas vous ?</span></p>
    </div>
    </SimpleBar> 
    <a href="./CV.png" style={{color: "inherit", textDecoration: "inherit"}}>Télécharger mon CV</a>  
    </div>
    </>


    )
}

export default AboutMe;