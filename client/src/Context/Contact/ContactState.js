import React,{useReducer} from 'react';
import axios from 'axios'
import contactContext from './ContactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_FILTER,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CONTACT_ERROR,
    GET_CONTACTS,
    CLEAR_CONTACTS

} from '../types';

const ContactState  =props =>{
    const intialState={
        contacts:null,
        current:null,
        filtered:null,
        error:null
    };
    //Pull out the state and dispatch to reducer
    const [state,dispatch] = useReducer(contactReducer,intialState);

    //Get contacts 
  const getContacts =async ()=>{
    try{
        const res = await axios.get('/api/contact');
        dispatch({type:GET_CONTACTS, payload:res.data});

      }catch(err){
        dispatch({type:CONTACT_ERROR, payload:err.response.msg});
      }  

  }

  //clear contact after user logout
  const clearContacts = ()=>{
      dispatch({type:CLEAR_CONTACTS});
  }



    //Add contacts
    const addContact =async contact =>{
      //This request must go with headers
        const config={
          headers:{
              'Content-Type':'application/json'
          }
      };

      try{
        const res = await axios.post('/api/contact', contact,config);
        dispatch({type:ADD_CONTACT, payload:res.data});

      }catch(err){
        dispatch({type:CONTACT_ERROR, payload:err.response.msg});
      }    
    }


    //Delete contact
    const deleteContact =async( id) =>{
    
        try{
          await axios.delete(`/api/contact/${id}`);
          dispatch({type:DELETE_CONTACT, payload:id});
  
        }catch(err){
          dispatch({type:CONTACT_ERROR, payload:err.response.msg});
        }   
 
    }

    //set current Contact
    const setCurrent = contact =>{
        //ontact.id = Math.round();

        dispatch({type:SET_CURRENT, payload:contact});
    }

    //clear current contact

      //set current contact
      const clearCurrent =()=>{
        //ontact.id = Math.round();

        dispatch({type:CLEAR_CURRENT});
    }

    //update contact
    const updateContact = async contact =>{
        //ontact.id = Math.round();
        const config={
          headers:{
              'Content-Type':'application/json'
          }
      };

      try{
        const res = await axios.put(`/api/contact/${contact._id}`, contact,config);
       
        dispatch({type:UPDATE_CONTACT, payload:res.data});
      }catch(err){
        dispatch({type:CONTACT_ERROR, payload:err.response.msg});
      }    
       
    }

    ///filter contact
    const filterContacts = text =>{

        dispatch({type:FILTER_CONTACTS, payload:text});
    }



    //clear filter
    const clearFilter =()=>{
        //ontact.id = Math.round();
        dispatch({type:CLEAR_FILTER});
    }


    return(
        <contactContext.Provider
        value={{
                //We are passing the state so it can be accessed in components
                contacts: state.contacts,
                current:  state.current,
                filtered: state.filtered,
                errror:state.error,
                //add this methods here so we cant acces them in components
                addContact,
                deleteContact,
                clearCurrent,
                setCurrent,
                updateContact,
                filterContacts,
                clearFilter,
                getContacts,
                clearContacts

          }}
        >
        
        {props.children}
        
        </contactContext.Provider>
    )


};

export default ContactState;