import React, {useState} from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Accueil from './Accueil';
import AboutMe from './AboutMe';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import history from "./history";

function App() {

  const [inProp, setInProp] = useState(false);


  return ( 

<div className="App">

<Router history={history}>
<Switch>
<Route exact path="/" component={Accueil}>
<Redirect to="/Accueil"/>
</Route>
<Route path="/about" component={About}></Route>
<Route path="/Portfolio" component={Portfolio}></Route>
<Route path="/Contact" component={Contact}></Route>
<Route path="/Accueil" component={Accueil}></Route>
<Route path="/AboutMe" component={AboutMe}></Route>

</Switch>
</Router>

</div>
  
  );
}

export default App;
