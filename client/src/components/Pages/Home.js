import React from 'react'
import Contacts from '../Contacts/Contacts';
import ContactForm from '../Contacts/ContactForm'
const Home = () => {
    return (
        <div className="container mt-2" >
        <div className="row">
        <div className="col-md-8">
        <ContactForm/>
        </div>
        <div className="col-md-4" style={{}}><Contacts/></div>
        </div>
        </div>
    )
}

export default Home
