import React from 'react';
import Home from './Home';
import TicTacToe from './images/TicTacToeScreen.jpg';
import Quizz from './images/QuizzScreen.jpg';
import Rene from './images/rene.png';
import Lolart from './images/lolart.jpg';
import Vulkan from './images/vulkan.jpg';
import Ruche from './images/laruche.jpg';
import history from "./history";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {Container, Row, Col} from 'react-bootstrap';





function Portfolio(url) {
  history.push(url);
    return(   
    <>    
      <Home />  
      <div className="content">
        <h2>MON PORTFOLIO</h2>
        <br></br>
        <SimpleBar style={{height: "350px"}}>
          <Container>
            <Row>
              <Col>
                <a href="http://the-last-of-us-quizz.fr/" style={{textDecoration: 'inherit'}} target="_blank" rel="noreferrer">
                  <h3>Quiz The last of us</h3> 
                  <br></br>
                  <div className="project-container">
                    <img src={Quizz} alt="quizz" className="projectImg" style={{maxHeight: "200px"}}/> 
                    <p>Un quiz pour tous les amoureux du jeu. Fait avec ReactJS</p>
                  </div>
                </a>
                <hr></hr>
              </Col>
              <Col>
                <a href="https://laruche-friperie.matibalt.fr/" style={{textDecoration: 'inherit'}} target="_blank" rel="noreferrer">
                  <h3>La ruche friperie</h3> 
                  <br></br>
                  <div className="project-container">
                    <img src={Ruche} className="projectImg" style={{maxHeight: "200px"}} alt="La-ruche-friperie"/>  
                    <p>Le site web de la friperie La Ruche. Fait avec Symfony</p>
                  </div>
                </a>
                <br></br>
                <hr></hr>
              </Col>
              <Col>
                <a href="https://jeu-du-morpion.matibalt.fr/" style={{textDecoration: 'inherit'}} target="_blank" rel="noreferrer">
                  <h3>Tic Tac Toe</h3> 
                  <br></br>
                  <div className="project-container">
                    <img src={TicTacToe} className="projectImg" style={{maxHeight: "200px"}} alt="tic-tac-toe"/>  
                    <p>Un morpion pour 2 joueurs en Javascript. C'est mon tout premier projet.</p>
                  </div>
                </a>
                <br></br>
                <hr></hr>
              </Col>
              <Col>
                <a href="https://addons.mozilla.org/addon/vulkan_theme/" style={{textDecoration: 'inherit'}} target="_blank" rel="noreferrer">
                  <h3>Vulkan</h3> 
                  <br></br>
                  <div className="project-container">
                    <img src={Vulkan} className="projectImg" style={{maxHeight: "200px"}} alt="vulkan-firefox-theme"/> 
                    <p>Un thème coloré et jovial pour Mozilla Firefox</p>
                  </div>
                </a>
                <br></br>
                <hr></hr>
              </Col>
              <Col>
                <a href="https://play.google.com/store/apps/details?id=app.mallevillebox.app" style={{textDecoration: 'inherit'}} target="_blank" rel="noreferrer">
                <h3>La boîte à René</h3> 
                <br></br>
                  <div className="project-container">
                    <img src={Rene} className="projectImg" style={{maxHeight: "200px"}} alt="rene-malleville"/>
                    <p>Une soundbox des meilleures punchlines du regretté René. Fait avec React Native (bientôt sur le PlayStore).</p>
                  </div>
                </a>
                {/* <hr></hr> */}
              </Col>
            </Row>
          </Container>
        </SimpleBar>
        <br></br>
        <br></br>
        <p>Codes disponible sur mon <span style={{color: "#40c3ff"}}><a href="https://github.com/Mateo-BTZ" target="_blank" rel="noreferrer">Github</a></span></p>
      </div>
    </>

    );
}

export default Portfolio;