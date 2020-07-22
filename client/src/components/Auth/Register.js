import React,{useState,useContext,useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import AlertContext from "../../Context/Alert/AlertContext";
import AuthContext from '../../Context/Auth/AuthContext';

const FormPage = (props) => {

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const {register,error,clearErrors,isAuthenticated} =authContext;
  const {setAlert} = alertContext;

useEffect(()=>{
  if(isAuthenticated){
    //to redirect we use props

    props.history.push('/');
  }

  if(error==='User already exist'){
    setAlert('Please enter all fields','danger');
    clearErrors()
  }
  //eslint-disable-line
},[error,isAuthenticated,props.history])


  const [user,setUser] = useState({

    name:'',
    email:'',
    password:'',
    password2:''

})

const {name,email,password,password2} = user;

const onChange=e => {
  console.log(e.target.value);
  setUser({  ...user,[e.target.name]: e.target.value});}

const onSubmit = e =>{
  e.preventDefault();
  if(name ==='' || email ==='' || password ===''){
    setAlert('Please enter all fields','danger');
  }else if (password !== password2){
    setAlert('Passwords does not  match','danger');
  }else if(password.length <= 6){
    setAlert('Password should be atleast 6 characters','danger');
  }else{
    console.log('register submit');
    register({
      name,email,password
    })
  }

    
}
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="8">
      <form onSubmit={onSubmit}>
        <p className="h5 text-center mb-4">Register account</p>
        <div className="grey-text">
        <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right"  name="name" value={name} onChange={onChange}/>
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" name="email" value={email} onChange={onChange} />
          <MDBInput label="Type your password" icon="lock" group type="password" validate 
          name="password" value={password} onChange={onChange}  />
          <MDBInput label="confirm your password" icon="lock" group type="password" validate 
          name="password2" value={password2} onChange={onChange} />
        </div>
        <div className="text-center">
          <MDBBtn  type="submit" value="Register">Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;