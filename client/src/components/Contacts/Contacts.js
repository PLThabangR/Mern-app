import React,{useContext, Fragment} from 'react'
import ContactContext from '../../Context/Contact/ContactContext';
import ContactItem from './ContactItem';
const Contacts = () => {
    //Initialize our context
    const contactContext = useContext(ContactContext);
    //pull the contact from contact context
    const {contacts,filtered} =contactContext;
    
    if(contacts.length ===0){
        return <h4>Please add a contact</h4>
    }

    return (
        //Show filtered contacts if filtered is not equal to null else show contact state 
        <Fragment>
            {filtered !== null ? filtered.map(
                contact =>(
                    <ContactItem key={contact.id}  contact={contact}/>
                )) :contacts.map(contact =>(   <ContactItem key={contact.id}  contact={contact}/>)) }
          
        </Fragment>
    )
}

export default Contacts
