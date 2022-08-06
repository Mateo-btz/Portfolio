import React from 'react';
import Home from './Home';
import TicTacToe from './images/TicTacToeScreen.jpg';
import Quizz from './images/QuizzScreen.png';
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
                <a href="http://tlou-lequiz.matibalt.com" style={{textDecoration: 'inherit'}}>
                <div className="project-container">
                  <img src={Quizz} alt="quizz" className="projectImg" style={{maxHeight: "200px"}}/>  
                  <p>Quizz en ReactJS</p>
                </div>
                </a>
              </Col>
              <Col>
                <a href="http://tictactoe.matibalt.com" style={{textDecoration: 'inherit'}}>
                <div className="project-container">
                  <img src={TicTacToe} className="projectImg" style={{maxHeight: "200px"}} alt="tic-tac-toe"/>  
                  <p>Jeu du morpion en Javascript</p>
                </div>
                </a>
              </Col>
            </Row>
          </Container>
        </SimpleBar>
        <br></br>
        <br></br>
        <p>Codes disponible sur mon <span style={{color: "#40c3ff"}}><a href="https://github.com/Mateo-BTZ">Github</a></span></p>
      </div>
    </>

    );
}

export default Portfolio;