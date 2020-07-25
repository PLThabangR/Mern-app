import React,{useContext, Fragment,useEffect, useRef} from 'react'
import ContactContext from '../../Context/Contact/ContactContext';
import ContactItem from './ContactItem';
import Spinner from '../Layout/spinner';
const Contacts = () => {
    //Initialize our context
    const contactContext = useContext(ContactContext);
    //pull the contact from contact context
    const {contacts,filtered,getContacts,loading} =contactContext;
    

    useEffect(() =>
    {
     getContacts();
     //eslint-disable-next-line   
    },[]);
    
    if(contacts !==null && contacts.length ===0 && !loading){
        return <h4>Please add a contact</h4>
    }

    return (
        //Show filtered contacts if filtered is not equal to null else show contact state 


        <Fragment>
        {contacts !==null && !loading ? (
            <Fragment>
            
            {filtered !== null ? filtered.map(
                contact =>(
                    <ContactItem key={contact._id}  contact={contact}/>
                )) :contacts.map(contact =>(   <ContactItem key={contact._id}  contact={contact}/>)) }
            </Fragment>

        ) :<Spinner/>}
          
          
        </Fragment>
    )
}

export default Contacts
