import React, {useState} from 'react';
import Home from './Home';
import { CSSTransition } from 'react-transition-group';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faGithubSquare, faWordpress } from "@fortawesome/free-brands-svg-icons";
import history from "./history";


function About(url) {

    history.push(url);
    const [inProp, setInProp] = useState(false);
    return(
        <CSSTransition in={inProp} timeout={300} classNames="animation">
        <>
        <Home />
        <div className="content">
        <h2>MES COMPETENCES</h2>
        <ul>
              <li>HTML5</li><div><ProgressBar animated={true} variant="success" now={90}/></div>
              <li>CSS3</li><div><ProgressBar animated={true} variant="success" now={85} /></div>
              <li>Javascript</li><div><ProgressBar animated={true} variant="success" now={75} /></div>
              <li>ReactJS</li><div><ProgressBar animated={true} variant="success" now={75} /></div>
              <li>PHP</li><div><ProgressBar animated={true} variant="warning" now={50} /></div>
              <li>mySQL</li><div><ProgressBar animated={true} variant="warning" now={50} /></div>

        </ul>
            <div className="brand-container">
            <div>
            <FontAwesomeIcon icon={faBootstrap} size="5x" color="orange"/>
            <p>Bootstrap</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faWordpress} size="5x" color="orange"/>
            <p>Wordpress</p>     
            </div>
            <div>
            <FontAwesomeIcon icon={faGithubSquare} size="5x" color="orange"/> 
            <p>Github</p>
            </div>
            </div>
        </div>
        </>
        </CSSTransition>
        
    );}

export default About;