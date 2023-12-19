import React, { useEffect, useState } from 'react';
import './Service.css';
const Service = props => {
    const {serviceName,date,_id} = props.service;
    const deleted = props.deleted;
 
    const [serviceItem,setServiceItem] = useState([]);
    
    
    useEffect(()=>{
        fetch('http://localhost:5000/getService')
        .then(res => res.json())
        .then(data => {
                  setServiceItem(data);  
        })
    },[])
   
      const  selectItem = serviceItem.find(item => item.name === serviceName)

      const handleCancel = id =>{
        fetch('http://localhost:5000/deleteService/' + id, {
            method: 'DELETE',
          })
          .then(res => res.json()) // or res.json()
          .then(data =>{
                    data && deleted();
          })
      }
       
    return (
        <div className='event'>
           {
               selectItem && <img src={selectItem.img} width="200px" alt="" />
           }
            <div className="serviceDetails">
                  <h4>{serviceName}</h4>
                  <h5>{date}</h5>
                  <button onClick={() => handleCancel(_id)} className='cancel-btn'>Cancel</button>
            </div>
        </div>
    );
};

export default Service;