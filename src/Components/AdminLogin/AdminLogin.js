import './AdminLogin.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../image/logos/Group 1329.png';
const AdminLogin = () => {
    const history = useNavigate();
    const [adminInfo,setAdminInfo] = useState({
        adminEmail:"",
        adminPass:""
    });

    const handleAdminInput = e =>{
        const newUserInfo = {...adminInfo}
        newUserInfo[e.target.name] = e.target.value;

        setAdminInfo(newUserInfo)
      }

    const handleAdminSubmit = () =>{
        const adminEmail = 'nazrulislamsuton06@gmail.com';
        const adminPass = '123456';
        if(adminEmail === adminInfo.adminEmail && adminPass === adminInfo.adminPass){
          history('/adminPanel')
        }else{
          console.log("doesn't match email")
        }
      }

    return (
        <div style={{backgroundColor:"#F8FAFC",height:"100vh"}}>
        <img src={logo} style={{transform:"translate(500px,70px)"}} width="200px" alt="" />
        <div className="login-form">
        <h1>Admin Login</h1>
           <input type="email" onBlur={handleAdminInput} name="adminEmail" placeholder='Enter Your Email' /><br />
           <input type="password" onBlur={handleAdminInput} name="adminPass" placeholder='Enter Your Password' /><br />
           <button onClick={handleAdminSubmit} className='submit-btn'>Submit</button>
        </div>
        </div>
    );
};

export default AdminLogin;