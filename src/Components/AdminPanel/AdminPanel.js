import React, { useEffect, useState } from 'react';
import './AdminPanel.css';
import logo from '../../image/logos/Group 1329.png';
import userLogo from '../../image/logos/users-alt 1.png';
import plus from '../../image/logos/plus 1.png';
import {Container} from 'react-bootstrap';
const AdminPanel = () => {

  const [allVolunteer,setAllVolunteer] = useState([]);
  const [user,setUser] = useState(false)
  const [event,setEvent] = useState({
       title:"",
       date:"",
       description:"",
       myFile:null
  });
  const [image,setImage] = useState({myFile:null})
   console.log(image)
  useEffect(()=>{
    fetch('http://localhost:5000/getAllServices')
    .then(res => res.json())
    .then(data => {
                setAllVolunteer(data)
    })
  },[])

  const handleUserList = () =>{
    setUser(!user)
  }

  const handleEvent = (e) =>{
       const newEvent = {...event};
       if(newEvent[e.target.name] === "myFile"){
          newEvent[e.target.name] = e.target.files[0];
       }else{
          newEvent[e.target.name] = e.target.value;
       }
       ;
       setEvent(newEvent);
  }

  const pd = new FormData();
pd.append('myFile',image.myFile);
  const handleEventSubmit = () =>{
        
     fetch("http://localhost:5000/uploadWithFile",
     {
         method: "POST",
         body: pd
     }) 
  }

  const handleImage = e => {
                 const newImage = {...image}
                    newImage[e.target.name]=e.target.files[0];
                    setImage(newImage);
  }
    return (
        <div>
            <Container>
               <div className="row">
                    <div className="col-md-3">
                         <div className="sidebar">
                         <img src={logo} width="200px" alt="" />
                         <p onClick={handleUserList}> <img src={userLogo} alt="" width="20px" /> Volunteer Register List</p>
                         <p> <img src={plus} alt="" width="20px" /> Add Event</p>
                         </div>
                    </div>
                    <div className="col-md-9">
                    <h4>Volunteer Register List</h4>
                      <div className="user-admin-List">
                       
                           {
                                user && <div className="userList">
                                <table className="table">
                                  <thead>
                                       <tr>
                                        <th>Name</th>
                                        <th>Email Id</th>
                                        <th>Registration Date</th>
                                        <th>Volunteer List</th>
                                        <th>Action</th>
                                       </tr>
                                  </thead>
                                  <tbody>
                                        {
                                             allVolunteer.map(volunteer =>{
                                                 return  <tr>
                                                        <td>{volunteer.name}</td>
                                                        <td>{volunteer.email}</td>
                                                        <td>{volunteer.date}</td>
                                                        <td>{volunteer.serviceName}</td>
                                                        <td>Action</td>
                                                  </tr>
                                             })
                                        }
                                  </tbody>
                                </table>
                            </div>
                           }

                           <div className="addEvent">
                              <form>
                              <table>
                                  <tr>
                                     <td>
                                     <label htmlFor="">Event Title</label><br />
                                     <input type="text" name="title" onBlur={handleEvent} placeholder='Enter Event Title' />
                                     </td>

                                     <td>
                                     <label htmlFor="">Event Date</label><br />
                                     <input type="date" name="date" onBlur={handleEvent}  />
                                     </td>
                                  </tr>

                                  <tr>
                                  <td>
                                  <label htmlFor="">Description</label><br />
                                  <input type="textarea" name="description" onBlur={handleEvent} placeholder='Enter Description' />
                                  </td>

                                  <td>
                                  <label htmlFor="">Banner</label><br />
                                  <input type="file" name="myFile" onBlur={handleEvent}  />
                                  </td>
                               </tr>

                              </table>

                              </form>
                           </div>
                           <button onClick={handleEventSubmit} className='event-submit-btn'>Submit</button>
                           <input type="file" name="myFile" onChange={handleImage} />
                      </div>
                    </div>
               </div>
            </Container>
        </div>
    );
};

export default AdminPanel;