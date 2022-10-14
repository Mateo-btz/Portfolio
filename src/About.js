import React, {useState} from 'react';
import Home from './Home';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap,faGithubSquare,faWordpress,faHtml5,faCss3,faPhp,faJs,faReact,faSymfony,faGitAlt,faNpm,faGulp } from "@fortawesome/free-brands-svg-icons";
import history from "./history";
import {Container, Row, Col} from 'react-bootstrap';



function About(url) {

    history.push(url);
    const [inProp, setInProp] = useState(false);
    return(
        <>
        <Home />
        <div className="content">
            <h2 className="skill-title">MES COMPETENCES</h2>
            <Container id="skills-container">
                <Row>
                    <Col>
                        <div className="skill-container">
                            <FontAwesomeIcon icon={faHtml5} size="5x" color="orange"/>
                            <p className="skill-text">HTML5</p>
                        </div>
                        <div className="skill-container">
                            <FontAwesomeIcon icon={faWordpress} size="5x" color="orange"/>
                            <p className="skill-text">Wordpress</p>     
                        </div>
                        <div className="skill-container">
                            <FontAwesomeIcon icon={faBootstrap} size="5x" color="orange"/>
                            <p className="skill-text">Bootstrap</p>
                        </div>
                        <div className="skill-container">
                            <FontAwesomeIcon icon={faJs} size="5x" color="orange"/> 
                            <p className="skill-text">Javascript</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="skill-container">
                            <FontAwesomeIcon icon={faCss3} size="5x" color="orange"/> 
                            <p className="skill-text">CSS3</p>
                        </div>
                        <div className="skill-container">
                            <FontAwesomeIcon icon={faReact} size="5x" color="orange"/>
                            <p className="skill-text">ReactJS</p>
                        </div>
                        <div className="skill-container">
                            <FontAwesomeIcon icon={faGitAlt} size="5x" color="orange"/>
                            <p className="skill-text">Git</p>     
                        </div>
                        <div className="skill-container">
                            <FontAwesomeIcon icon={faGulp} size="5x" color="orange"/>
                            <p className="skill-text">Gulp</p>     
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="skill-container">
                            <FontAwesomeIcon icon={faPhp} size="5x" color="orange"/> 
                            <p className="skill-text">Php</p>
                        </div>
                        <div className="skill-container">
                            <FontAwesomeIcon icon={faSymfony} size="5x" color="orange"/>
                            <p className="skill-text">Symfony</p>
                        </div>
                        <div className="skill-container">
                            <FontAwesomeIcon icon={faNpm} size="5x" color="orange"/>
                            <p className="skill-text">Npm</p>     
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );}
    
export default About;