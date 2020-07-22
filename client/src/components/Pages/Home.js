import React,{useContext,useEffect} from 'react'
import Contacts from '../Contacts/Contacts';
import ContactForm from '../Contacts/ContactForm';
import ContactFilter from '../Contacts/ContactFilter';
import AuthContext from '../../Context/Auth/AuthContext';
const Home = () => {

    const authContext = useContext(AuthContext);
    useEffect(()=>{
        authContext.loadUser();

        //eslint-disable-next-line
    },[]);
    return (
        <div className="container mt-2" >
        <div className="row">
        <div className="col-md-8">
        <ContactForm/>
        </div>
      
        <div className="col-md-4" style={{}}>
        <ContactFilter/>
        <Contacts/>
        </div>
        </div>
        </div>
    )
}

export default Home
