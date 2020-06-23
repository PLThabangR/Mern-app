import React, { Fragment } from "react";

import "./index.css";
import Navbar from './components/Layout/Navbar'
import logo from "./logo.png";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/about';

import ContactState from '../src/Context/Contact/ContactState';
const App =()=> {
 
    return (
      <ContactState>
      <Router>
      <Fragment>
      <Navbar/>
      <div className="container">
      
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      </Switch>
      </div>
      
       
         
          

          
          
      
      </Fragment>
      </Router>
      </ContactState>
     
    );

}

export default App;
