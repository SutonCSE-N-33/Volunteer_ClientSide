import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../image/logos/Group 1329.png';
import './Registration.css';
const Registration = props => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const {name,email,serviceName} = loggedInUser;
    const navigate = useNavigate();
    const [userRegister,setUserRegister] = useState({
        name:"",
        email:"",
        date:"",
        description:"",
        serviceName:""
    })
    const handleFormValue = e =>{
              const newRegister = {...userRegister};
              newRegister[e.target.name] = e.target.value;
              setUserRegister(newRegister);

    }
  
    const handleSubmitForm = (e) => {
              e.preventDefault();
              fetch('http://localhost:5000/addVolunteer',{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify(userRegister)
              })
              .then(res => res.json())
              .then(data => {
                  if(data.acknowledged){
                      console.log("registered Successfully")
                  }
              })
              setUserRegister({});
              navigate('/registered');
    }
    return (
        <div style={{backgroundColor:"#F8FAFC",height:"100vh"}}>
        <img src={logo} style={{transform:"translate(530px,40px)"}} width="150px" alt="" />
            <div className="registration-form">
              <form onSubmit={handleSubmitForm}>
              <h4>Register as a Volunteer</h4>
                 <input type="text" onBlur={handleFormValue} value={name} name="name" placeholder='Full Name'/><br />
                 <input type="email" onBlur={handleFormValue} value={email} name="email" placeholder='Email'/><br />
                 <input type="date" onBlur={handleFormValue} name="date" /><br />
                 <input type="text" onBlur={handleFormValue} name="description" placeholder='Description'/><br />
                 <input type="text" onBlur={handleFormValue} name="serviceName" value={serviceName} placeholder='Organize books at the Library'/><br />
                 <input style={{backgroundColor:"#3F90FC",color:"white"}} type="submit" value="Registration" />
              </form>
            </div>
        </div>
    );
};

export default Registration;