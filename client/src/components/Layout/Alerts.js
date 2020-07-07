import React,{useContext} from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';
import AlertContext from '../../Context/Alert/AlertContext';

const AlertPage = () => {
    //intialize the context here
  const alertContext =useContext(AlertContext);

  const {alerts} =alertContext
  return (
      alerts.length >0  &&  alerts.map(alert=>
        (
            <MDBContainer key={alert.id} >
      
            <MDBAlert color="danger" >
              {alert.msg}
            </MDBAlert>
            
          </MDBContainer>

        ))
  );
};

export default AlertPage;