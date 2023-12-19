import React, { useEffect, useState } from 'react';
import './Main.css';
import ServiceItem from '../ServiceItem/ServiceItem';
import FakeData from '../../../FakeData/FakeData';
import Header from '../Header';

const Main = () => {
    const [serviceItem,setServiceItem] = useState([]);
    
  useEffect(()=>{
      fetch('http://localhost:5000/getService')
      .then(res => res.json())
      .then(data => {
                setServiceItem(data);  
      })
  },[])

 


//   const handleUser = () =>{
//     fetch("http://localhost:5000/addUser",
//     {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify(FakeData)
//     })
//   }



    return (
        <div>
        <Header></Header>
            <container>
                     <div className="row">
                       <div className="col-md-12">
                       <div className="volunteer-growth">
                               <h1>I Grow by helping people in need</h1>
                               <input type="text" placeholder='Search'/>
                               <button className='search-button'>Search</button>
                       </div>

                       <div className="serviceItem">
                          {
                              serviceItem.map(service => <ServiceItem service={service}></ServiceItem>)
                          }
                       </div>
                       </div>

                     </div>
            </container>
        </div>
    );
};

export default Main;