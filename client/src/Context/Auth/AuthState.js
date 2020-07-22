import React,{useReducer} from 'react';
import authContext from './AuthContext';
import authReducer from './AuthReducer';
import axios from 'axios';
import setAuthToken from '../../Utils/SetAuthToken';
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
    /*We are hitting the end point to a private route
    /Therefore we need to provide a token with headers
    */
    const loadUser =async ()=>{
            //@todo load token into global haders

            if(localStorage.token){
                setAuthToken(localStorage.token);

            }

            try{
                //This is a private route for single user
                const res = await axios.get('api/auth');


                dispatch({type:USER_LOADED,
                    payload:res.data});

            }catch(err){
                    dispatch({type:AUTH_ERROR})
            }
    }

    //Register user get the token
    const register = async formData =>{
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{
            //Make the request to the backend
            const res = await axios.post('http://localhost:5000/api/users',formData,config);

            dispatch({
                type:REGISTER_SUCCESS,
                payload: res.data
            });

            loadUser();
        }catch(err){
            dispatch({
                type:REGISTER_FAIL,
                payload: err.response.data.msg
            })

        }
    }


    //Login user  get the token
    const login =()=>{

    }
    //logout  destroy token
    const logout =()=>{

    }

    //clear errors clear any errors
    const clearErrors =()=>{
        dispatch({ type:CLEAR_ERRORS})
    }

    return(
        <authContext.Provider
        value={{
                //We are passing the state so it can be accessed in components
                token:state.token,
                isAuthenticated:state.isAuthenticated,
                loading:state.loading,
                user:state.user,
                error:state.error,
                token:state.token,


                //add this methods here so we cant acces them in components
                register,
                clearErrors,
                loadUser

                //load user
                
          }}
        >
        
        {props.children}
        
        </authContext.Provider>
    )


};

export default AuthState;