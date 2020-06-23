import React,{useContext} from 'react';
import {MDBIcon, MDBBtn,MDBBadge, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import ContactContext from '../../Context/Contact/ContactContext';
import { DELETE_CONTACT } from '../../Context/types';

const CardExample = ({contact}) => {
 const  contactContext = useContext(ContactContext);
 const {deleteContact} =contactContext;

 
  const {id,name,email,phone,type} = contact;

  const onDelete=()=>{
    deleteContact(id)
  }
    return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>

        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardText>
            {type==='professional'? <MDBBadge color="default">{type.charAt(0).toUpperCase() + type.slice(1)}</MDBBadge>:
            <MDBBadge color="primary">{type.charAt(0).toUpperCase() + type.slice(1)}</MDBBadge>
        }
        
        {email &&(
            <li>
            <MDBIcon icon="envelope-open-text" />{" "}{email}
            </li>
            )}
            {phone &&(
                <li>
                <MDBIcon icon="phone" />{" "}{phone}
                </li>
                )}

                
          </MDBCardText>
          <p>
          <MDBBtn color="elegant">edit</MDBBtn>
          <MDBBtn color="danger" onClick={onDelete}>delete</MDBBtn>
          </p>
        </MDBCardBody>
      </MDBCard>
      <br></br>
    </MDBCol>
  )
}

export default CardExample;