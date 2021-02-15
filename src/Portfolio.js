import React from 'react';
import Home from './Home';
import Carousel from 'react-bootstrap/Carousel';
import TicTacToe from './TicTacToe Screen.jpg';
import Luxury from './Luxury Service Screen.jpg';
import Quizz from './Quizz Screen.png';
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
    {/* <Carousel fade={true} controls={true} indicators={false} interval={2500} className="carousel">
  <Carousel.Item>
    <a href="http://tlou-lequiz.matibalt.com">
    <img
      className="d-block w-100"
      src={Quizz}
      alt="First slide"
    />
    </a>
    <p>Quizz en ReactJS et Firebase</p>
  </Carousel.Item>
  <Carousel.Item>
    <a href="http://tictactoe.matibalt.com">
    <img
      className="d-block w-100"
      src={TicTacToe}
      alt="Third slide"
    />
    </a>
  <p>Morpion en HTML, CSS, et Javascript</p>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Luxury}
      alt="Third slide"
    />
  <p>Plateforme d'offres d'emploi, fait avec Symfony</p>
  </Carousel.Item>
</Carousel>
<br></br>
<br></br> */}
<br></br>
<br></br>
<p>Codes disponible sur mon <span style={{color: "#40c3ff"}}><a href="https://github.com/Mateo-BTZ">Github</a></span></p>
    </div>
    </>

    );
}

export default Portfolio;