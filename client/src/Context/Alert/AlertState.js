import React,{useReducer} from 'react';
import AlertContext from './AlertContext';
import alertReducer from './AlertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT

} from '../types';

const AlertState  =props =>{
    const intialState=[];
    //Pull out the state and dispatch to reducer
    const [state,dispatch] = useReducer(alertReducer,intialState);

    //Set Alert
    const setAlert=(msg,type,timeout=5000)=>{
      const  id = Math.random();       
      dispatch({
          type:SET_ALERT,payload:{msg,type,id}
      });

      setTimeout(() =>  dispatch({type:REMOVE_ALERT,payload:id}),5000)
    }
   

    return(
        <AlertContext.Provider
        value={{
                //We are passing the state so it can be accessed in components
                
            alerts:state,setAlert
                //add this methods here so we cant acces them in components
                
          }}
        >
        
        {props.children}
        
        </AlertContext.Provider>
    )


};

export default AlertState;