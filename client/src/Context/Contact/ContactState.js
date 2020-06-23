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
                phone:'111-111-1111',
                type:'personal'
            },
            {
                id:2,
                name:'jack jackson',
                email:'jack@gmail.com',
                phone:'333-11551-444',
                type:'professional'
            },
            {
                id:3,
                name:'peter johns',
                email:'peterJohns@gmail.com',
                phone:'444-555-333',
                type:'personal'
            }
        ]
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

    //set current contact

    //clear current contact

    //update contact

    ///filter contact

    //clear filter

    return(
        <contactContext.Provider
        value={{
                //We are passing the state so it can be accessed in components
                contacts: state.contacts,
                //add this methods here so we cant acces them in components
                addContact,
                deleteContact
          }}
        >
        
        {props.children}
        
        </contactContext.Provider>
    )


};

export default ContactState;