import React,{useReducer} from 'react';
import uuid from 'uuid';
import contactContext from './ContactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_FILTER,
    UPDATE_CONTACT,
    FILTER_CONTACTS

} from '../types';

const ContactState  =props =>{
    const intialState={
        contacts:[
            {
                id:1,
                name:'jill johnson',
                email:'jill@gmail.com',
                phone:'089654321',
                type:'personal'
            },
            {
                id:2,
                name:'jack jackson',
                email:'jack@gmail.com',
                phone:'0785661779',
                type:'professional'
            },
            {
                id:3,
                name:'peter johns',
                email:'peterJohns@gmail.com',
                phone:'0839793565',
                type:'personal'
            }
        ],
        current:null,
        filtered:null
    };
    //Pull out the state and dispatch to reducer
    const [state,dispatch] = useReducer(contactReducer,intialState);


    //Add contacts
    const addContact =contact =>{
        contact.id = Math.round();

        dispatch({type:ADD_CONTACT, payload:contact});
    }


    //Delete contact
    const deleteContact =id =>{
        //ontact.id = Math.round();

        dispatch({type:DELETE_CONTACT, payload:id});
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
    const updateContact = contact =>{
        //ontact.id = Math.round();

        dispatch({type:UPDATE_CONTACT, payload:contact});
    }

    ///filter contact
    const filterContacts = text =>{

        dispatch({type:FILTER_CONTACTS, payload:text});
    }



    //clear filter
    const clearCurrent =()=>{
        //ontact.id = Math.round();
        dispatch({type:CLEAR_FILTER});
    }


    return(
        <contactContext.Provider
        value={{
                //We are passing the state so it can be accessed in components
                contacts: state.contacts,
                current:state.current,
                //add this methods here so we cant acces them in components
                addContact,
                deleteContact,
                clearCurrent,
                setCurrent,
                updateContact
          }}
        >
        
        {props.children}
        
        </contactContext.Provider>
    )


};

export default ContactState;