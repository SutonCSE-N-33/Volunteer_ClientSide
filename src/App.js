import './App.css';
import Main from './Components/Header/Main/Main';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './Components/Header/Login/Login';
import Registration from './Components/Header/Registration/Registration';
import { createContext, useState } from 'react';
import PrivateOutlet from './Components/PrivateOutlet/PrivateOutlet';
import RegisteredService from './Components/RegisteredService/RegisteredService';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import AdminLogin from './Components/AdminLogin/AdminLogin';

export const userContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]} className="App">
   <BrowserRouter>
  
     <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Main />} ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registered" element={<RegisteredService/>} />
        <Route path="/*" element={<PrivateOutlet/>} >
          <Route path="registration" element={<Registration />} />
        </Route>
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminPanel" element={<AdminPanel/>} />
      </Routes>
   </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
