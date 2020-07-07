import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const FormPage = () => {

const [user,setUser] = useState({

    email:'',
    password:'',
})

const {email,password} = user;

const onChange=e => setUser({  ...user,[e.target.name]: e.target.value});

const onSubmit = e =>{
    e.preventDefault();
    console.log('login submit');
}
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="8">
      <form onSubmit={onSubmit}>
        <p className="h5 text-center mb-4">Login</p>
        <div className="grey-text">
        
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" name="email" value={email} onChange={onChange} />
          <MDBInput label="Type your password" icon="lock" group type="password" validate 
          name="password" value={password} onChange={onChange}/>
        
        </div>
        <div className="text-center" >
          <MDBBtn  type="submit" value="Login">Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;