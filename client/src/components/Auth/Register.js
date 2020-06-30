import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const FormPage = () => {

const [user,setUser] = useState({

    name:'',
    email:'',
    password:'',
    password2:''

})

const {name,email,password,password2} = user;

const onChange=e => setUser({  ...user,[e.target.name]: e.target.value});

const onSubmit = e =>{
    e.preventDefault();
    console.log('register submit');
}
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit={onSubmit}>
        <p className="h5 text-center mb-4">Register account</p>
        <div className="grey-text">
        <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right"  name="name" value={name} onChange={onChange}/>
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" name="email" value={email} onChange={onChange} />
          <MDBInput label="Type your password" icon="lock" group type="password" validate 
          name="password" value={password} onChange={onChange}/>
          <MDBInput label="confirm your password" icon="lock" group type="password" validate 
          name="password2" value={password2} onChange={onChange}/>
        </div>
        <div className="text-center" value="Register">
          <MDBBtn>Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;