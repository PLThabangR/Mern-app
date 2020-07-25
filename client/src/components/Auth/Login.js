import React,{useState,useContext,useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import AlertContext from "../../Context/Alert/AlertContext";
import AuthContext from '../../Context/Auth/AuthContext';

const FormPage = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);


  const {login,error,clearErrors,isAuthenticated} =authContext;
  const {setAlert} = alertContext;


  useEffect(()=>{
    //if the token is authenticated redirect to the home page
    if(isAuthenticated){
      //to redirect we use props
  
      props.history.push('/');
    }
  
    if(error==='Invalid credentials'){
      setAlert(error,'danger');
      clearErrors()
    }

    if(error==='Server error'){
      setAlert(error,'danger');
      clearErrors()
    }

    
    //eslint-disable-line
  },[error,isAuthenticated,props.history])
  
  
const [user,setUser] = useState({

    email:'',
    password:'',
})

const {email,password} = user;

const onChange=e => setUser({  ...user,[e.target.name]: e.target.value});

const onSubmit = e =>{
    e.preventDefault();
   if(email === '' || password ===''){
    setAlert('Please enter all fields','danger');
   }else{
     login({
       email,
       password,
     })
   }
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