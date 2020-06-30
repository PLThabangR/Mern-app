import React, { useContext, useEffect, useRef } from "react";
import ContactContext from "../../Context/Contact/ContactContext";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";

const FormPage = () => {
  const contactContext = useContext(ContactContext);

  const { filterContacts, filtered, clearFilter } = contactContext;
  //Initialize ref value
  const text = useRef("");

  //We need to clear our state to null as the app runs
  useEffect(() => {
    if ( text.current.value === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>
            <p className="h5 text-center mb-4">Search</p>
            <div className="grey-text">
              <MDBInput
                label="Filter Contacts ..."
                icon="search"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                ref={text}
                onChange={onChange}
              />
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
