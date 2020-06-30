import React, { Fragment } from "react";

import "./index.css";
import Navbar from './components/Layout/Navbar'
import logo from "./logo.png";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/about';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

import ContactState from '../src/Context/Contact/ContactState';
import AuthState from './Context/Auth/AuthState';

const App =()=> {
 
    return (
     <AuthState>
      <ContactState>
      <Router>
      <Fragment>
      <Navbar/>
      <div className="container">
      
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      </Switch>
      </div>
      
       
         
      </Fragment>
      </Router>
      </ContactState>
      </AuthState>
     
      
     
    );

}

export default App;
