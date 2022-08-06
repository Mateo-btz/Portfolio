import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, } from "@fortawesome/free-brands-svg-icons";
import { faCode, faBars } from "@fortawesome/free-solid-svg-icons";
import './css/menu-mobile.css';
import { CSSTransition } from 'react-transition-group';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
  } from "react-router-dom";


function Home() {

  const [inProp, setInProp] = useState(false);

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    // var zIndex = document.style.zIndex = "0";

    useEffect(() => {
      var content = document.getElementsByClassName("content")[0];
      const pageClickEvent = (e) => {
        if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
          setIsActive(!isActive);
          
        }
      };
    
      // If the item is active (ie open) then listen for clicks
      if (isActive) {
        window.addEventListener('click', pageClickEvent);
        content.style.zIndex = "0";
      } 
      if (!isActive) {
        content.style.zIndex = "2";
      }
      return () => {
        window.removeEventListener('click', pageClickEvent);
      }
    
    }, [isActive]);

    return(
    <>
      <section className="banner" id="sec">
        <header>
          <FontAwesomeIcon icon={faCode} size="3x" color="white" className="slow-spin"/>
          <FontAwesomeIcon icon={faBars} size="2x" color="white" id="hamburger" onClick={onClick}/>        
          <ul ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <div id="hamburger">
              <Link to="/Accueil" style={{ textDecoration: 'none' }}><li onClick={() => setInProp(true)} className="link">Accueil</li></Link>
              <Link to="/AboutMe" style={{ textDecoration: 'none' }}><li onClick={() => setInProp(true)} className="link">A propos</li></Link>
              <Link to="/About" style={{ textDecoration: 'none' }}><li onClick={() => setInProp(true)} className="link">Compétences</li></Link>
              <Link to="/Portfolio" style={{ textDecoration: 'none' }}><li onClick={() => setInProp(true)} className="link">Portfolio</li></Link>
              <Link to="/Contact" style={{ textDecoration: 'none' }}><li onClick={() => setInProp(true)}className="link">Contact</li></Link>
            </div>
          </ul>
        </header>
        <ul className="sci">
          <ul className="navigation">
            <div>
              <Link to="/Accueil" style={{ textDecoration: 'none' }}><li onClick={() => setInProp(true)} className="link">Accueil</li></Link>
              <Link to="/AboutMe" style={{ textDecoration: 'none' }}><li onClick={() => setInProp(true)} className="link">A propos</li></Link>
              <Link to="/About" style={{ textDecoration: 'none' }}><li onClick={() => setInProp(true)} className="link">Compétences</li></Link>
              <Link to="/Portfolio" style={{ textDecoration: 'none' }}><li onClick={() => setInProp(true)} className="link">Portfolio</li></Link>
              <Link to="/Contact" style={{ textDecoration: 'none' }}><li onClick={() => setInProp(true)}className="link">Contact</li></Link>
            </div>
          </ul>
          <div className="reseaux">     
            <li><a href="https://github.com/Mateo-BTZ"><FontAwesomeIcon className="homeBtn" icon={faGithubSquare} size="3x" color="white"/></a></li> 
            <li><a href="https://www.linkedin.com/in/mat%C3%A9o-balthazard-96a4021ab/"><FontAwesomeIcon className="homeBtn" icon={faLinkedin} size="3x" color="white"/></a></li> 
          </div>
        </ul>
      </section>
    </>  
  )
}


export default Home;