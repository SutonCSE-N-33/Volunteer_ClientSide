import React, { useContext,useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './RegisteredService.css';

const RegisteredService = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const {email} = loggedInUser;
    const [activities,setActivities] = useState([])


    useEffect(()=>{
            fetch('http://localhost:5000/getRegisteredService?email='+email)
            .then(res => res.json())
            .then(data => {
                setActivities(data);
            })      
    },[])

     const deleteService = () =>{
         
        fetch('http://localhost:5000/getRegisteredService?email='+email)
        .then(res => res.json())
        .then(data => {
            setActivities(data);
        }) 
     }

    return (
       <div>
       <Header></Header>
       <div className='services'>
       {
           activities.map(service => <Service deleted={deleteService} service={service} />)
       }
   </div>
       </div>
    );
};

export default RegisteredService;