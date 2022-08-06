import React from 'react';
import Home from './Home';
import history from "./history";

function Contact(url) {
    history.push(url);
    return(
    <>    
        <Home /> 
        <div className="content contact-container">
            <h2>CONTACT</h2>
            <br></br>
            <br></br>
            <p>Mail: <span style={{color: "#40c3ff"}}><a href="mailto:mateofocus.btz@gmail.com" style={{color: "inherit", textDecoration: "inherit"}}>mateofocus.btz@gmail.com</a></span></p>
            <p>Téléphone: <span style={{color: "#40c3ff"}}>06.71.46.36.34</span></p>
        </div>   
    </>
    );
}

export default Contact;