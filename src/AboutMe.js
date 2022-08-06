import React from 'react';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from './images/moi.jpg';
import history from "./history";
import './css/fade.css';
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
            <div className="aboutme">
                <p>Développeur <span className="bold-text">front-end</span> junior de 24 ans, Je suis en quête d'un nouveau challenge.</p>
                <p>Après un titre professionnel avec <span className="bold-text">Simplon Roanne</span> et une Licence Professionnelle à l'<span className="bold-text">IUT Le-Puy-en-Velay</span> en alternance, je suis prêt à passer à l'étape supérieure.</p>
                <p>Pendant mon parcours, j'ai pu participer à la création du site vitrine d'<span className="bold-text">Unipile</span>.<a href="https://www.unipile.com/" target="_blank" rel="noreferrer"> (cliquez ici pour voir)</a></p>
                <p>J'ai également eu la chance de pratiquer mon alternance avec l'agence web <span className="bold-text"><a href="https://www.uplight.fr/" target="_blank" rel="noreferrer">Uplight</a></span>. C'est là que j'ai pu travailler pour de nombreux clients et acquérir le plus de compétences</p>
                <p>Aujourd'hui, je recherche une entreprise qui serait prêt à miser sur un profil comme le mien.<span className="bold-text"> Pourquoi pas vous ?</span></p>
            </div>
            </SimpleBar> 
            <a href="./CV.pdf" target="_blank" rel="noreferrer" class="cv-link">Télécharger mon CV</a>  
        </div>
    </>
    )
}

export default AboutMe;