import React,{useReducer} from 'react';
import authContext from './AuthContext';
import authReducer from './AuthReducer'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS

} from '../types';

const AuthState  =props =>{
    const intialState={
     token:localStorage.getItem('token'),
     isAuthenticated:null,
     loading:true,
     user:null,
     error:null

    };
    //Pull out the state and dispatch to reducer
    const [state,dispatch] = useReducer(authReducer,intialState);


    //Load user


    //Register user

    //Login user 

    //logout

    //clear errors
   

    return(
        <authContext.Provider
        value={{
                //We are passing the state so it can be accessed in components
                token:state.token,
                isAuthenticated:state.isAuthenticated,
                loading:state.loading,
                user:state.user,
                error:state.error,
                token:state.token


                //add this methods here so we cant acces them in components
                
          }}
        >
        
        {props.children}
        
        </authContext.Provider>
    )


};

export default AuthState;