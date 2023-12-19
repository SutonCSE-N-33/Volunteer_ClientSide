import React, { useContext,useEffect, useState } from 'react';
import './ServiceItem.css';
import {useNavigate} from 'react-router-dom';
import {userContext} from '../../../App';
const ServiceItem = props => {
    const {img,name} = props.service;
    const [index,setIndex] = useState(0);
    console.log(index);
    const history = useNavigate()
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const userService ={serviceName:name}
    const goToRegister = () =>{
        history('/registration'); 
        setLoggedInUser(userService)
    }

    const selectColor = ["FFBD3E","FF7044","3F90FC","684DD8"];
            
    useEffect(()=>{
        const randomColor = Math.floor(Math.random()*4);
        setIndex(randomColor)
    },[])
 
    return (
 
            <div onClick={()=>goToRegister(name)} className="service">
                  <img src={img} alt="volunteer pic" />
                  <div className="img-title" style={{backgroundColor:"#"+selectColor[index]}}>
                           <h6>{name}</h6>
                  </div>
            </div>

    );
};

export default ServiceItem;