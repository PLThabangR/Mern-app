import React, { Component,useContext,useState, Fragment } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, 
MDBIcon
} from "mdbreact";
import AuthContext from '../../Context/Auth/AuthContext';
import ContactContext from '../../Context/Contact/ContactContext';

const NavbarPage = ()=> {

 const  authContext = useContext(AuthContext);
 const  contactContext = useContext(ContactContext);
 const {isAuthenticated ,logout,user} =authContext;
 const {clearContacts} =contactContext;
 const [state, setstate] = useState({ isOpen: false}) 
 

const toggleCollapse = () => {
  setstate({ isOpen: !state.isOpen });
}

const onLogout= ()=>{
logout();
clearContacts();

}

const authLinks =(
  <Fragment>
  
    <MDBNavItem>
    {user && user.name}
    <MDBNavLink to="/logout" onClick={onLogout}>Logout</MDBNavLink>
  </MDBNavItem>
  </Fragment>
);

const guestLinks =(
  <Fragment>
  <MDBNavItem>
  <MDBNavLink to="/register">Register</MDBNavLink>
</MDBNavItem>
<MDBNavItem>
<MDBNavLink to="/login">Login</MDBNavLink>
</MDBNavItem>
  </Fragment>
)


  return (
 
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text"><MDBIcon icon="address-card" /> Contact keeper</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
          <MDBNavbarNav right>
          
           

          <Fragment>
           { isAuthenticated ?
             authLinks
             :
            guestLinks
            
           }
            </Fragment>
          
        

       
            
          
          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBNavbar>
   
    );
  }


export default NavbarPage;