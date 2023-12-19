import React, { useContext, useState } from 'react';
import firebaseConfig from '../../../FirebaseAuthConfig';
import {Link} from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './Login.css';
import { userContext } from '../../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../image/logos/Group 1329.png';


const app = initializeApp(firebaseConfig);
const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);

    const history = useNavigate();
    
    const [userInfo,setUserInfo] = useState({
        name:"",
        email:"",
    });
    

    const handleLogin = () =>{
        
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const {displayName,email} = result.user;
    const user = {
        name:displayName,
        email:email,
    }
    const addUserInfo = {...loggedInUser};
    addUserInfo.name = displayName;
    addUserInfo.email = email;
    setUserInfo(user);
    setLoggedInUser(addUserInfo);
    history('/registration');
  
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
            return (
        <div style={{backgroundColor:"#F8FAFC",height:"100vh"}}>
          <img src={logo} style={{transform:"translate(500px,70px)"}} width="200px" alt="" />
            <div className="login-form">
            <h1>Login With</h1>
            <button className='login-btn' onClick={handleLogin}><span className='google'>G</span> <span className='continue'>Continue With Google</span></button>
            <p>Don't have an account?<Link to="/">create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;