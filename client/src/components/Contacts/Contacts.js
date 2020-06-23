import React,{useContext, Fragment} from 'react'
import ContactContext from '../../Context/Contact/ContactContext';
import ContactItem from './ContactItem';
const Contacts = () => {
    //Initialize our context
    const contactContext = useContext(ContactContext);
    //pull the contact from contact context
    const {contacts} =contactContext;
    return (

        <Fragment>
            {contacts.map( contact =>
                 <ContactItem key={contact.id}  contact={contact}/>

            )}
        </Fragment>
    )
}

export default Contacts
