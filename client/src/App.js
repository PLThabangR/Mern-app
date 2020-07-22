import React, { Fragment } from "react";

import "./index.css";
import Navbar from './components/Layout/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/about';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Alert from './components/Layout/Alerts';

//context imports
import ContactState from '../src/Context/Contact/ContactState';
import AuthState from './Context/Auth/AuthState';
import AlertState from './Context/Alert/AlertState';
import setAuthToken from './Utils/SetAuthToken';


if(localStorage.token){
  setAuthToken(localStorage.token); 
}

const App =()=> {
 
    return (
      
     <AuthState>
      <ContactState>
      <AlertState>
      <Router>
      <Fragment>
      <Navbar/>
      <div className="container">
      <Alert/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      </Switch>
      </div>
      
       
         
      </Fragment>
      </Router>
      </AlertState>
      </ContactState>
      </AuthState>
      
     
      
     
    );

}

export default App;
