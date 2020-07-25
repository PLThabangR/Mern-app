import React,{useContext, Component} from 'react';
import {Route ,Redirect } from 'react-router-dom';
import AuthContext from '../../Context/Auth/AuthContext';


//Standard way of creating a private route in react
const PrivateRoute = ({component:Component,...rest}) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated,loading} =authContext;
   
    return (
        <Route {...rest} render={props => !isAuthenticated && !loading ?(
            <Redirect to='/login'/> ):(<Component {...props}/>)
            } />
    )
        }
export default PrivateRoute
