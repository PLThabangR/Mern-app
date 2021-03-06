import React,{useState,useContext,useEffect} from "react";
import ContactContext from '../../Context/Contact/ContactContext';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


const FormPage = () => {
    const contactContext =useContext(ContactContext);


    const [contact,setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'

    });

    //Destructure from the hook
    const {name,email,phone,type}= contact;
    //Destructure from the context
    const {addContact,current,clearCurrent,updateContact}= contactContext;
    //useEffect act as a lifecycle method
    useEffect(()=>{
      if(current !== null){
        //I set the current to de value  which is clicked
        setContact(current);
      }else{
         //Set state back to defualt
         updateContact(contact)
         setContact({
          name:'',
          email:'',
          phone:'',
          type:'personal'
  
      });
      }

    },[current]);//The use effect will run only if these are changed
    
    //Set typed values to the current state
   const  onChange= e =>{
       console.log(e.target.value)
    setContact({...contact , [e.target.name]: e.target.value});
    }

    const clearAll=()=>{
      clearCurrent();
    }

    const onSubmit =e=>{
        e.preventDefault();
        if(current===null){
          addContact(contact);
        }else{
          //Update existing contact
          updateContact(contact);
        }
      

        //Set state back to defualt
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal'
    
        })

    }
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="12">
      <form onSubmit={onSubmit}>
        <p className="h5 text-center mb-4">{current !==null ?'Edit contact':'Add contact'}</p>
        <div className="grey-text">
          <MDBInput label="Your name" name="name" icon="user" group type="text" validate error="wrong"
            success="right" value={name} onChange={onChange}  />
          <MDBInput label="Your email" name="email" icon="envelope" group type="email" validate error="wrong"
            success="right" value ={email} onChange={onChange}  />
          <MDBInput label="Phone" name='phone' icon="phone" group type="number" validate error="wrong" success="right"
          value={phone} onChange={onChange} />
          
          <p className="h5 text-center mb-4">Contact type</p>
          <div className="row">
          <div className="col-md-6">
          <input type="radio" name="type" value="personal" checked={type==='personal'} onChange={onChange}/>
          {" "}Personal
             </div>   
             <div className="col-md-6">
          <input type="radio" name="type" value="professional" checked={type==='professional'} onChange={onChange}/>
         {" "} Professional
        </div>
        </div>
        </div>
        <div className="text-center">
          <MDBBtn outline color="secondary" value="Add contact" type="submit">
          {current !==null ?'Update contact':'Add contact'}
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>

        {current !==null &&
          <div className="text-center">
          <MDBBtn outline color="blue-grey" value="Add contact" type="submit" onClick={clearAll}>
          Clear
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
        }
      </form>
    </MDBCol>
  </MDBRow>

</MDBContainer>
);
};


export default FormPage;