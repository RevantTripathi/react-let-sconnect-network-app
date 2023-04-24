import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import {Homepage} from './pages/Homepage';
import UserDetails from './components/LeftMenu/UserDetails/UserDetails';
import Recents from './components/LeftMenu/Recents/Recents';
import AboutUs from './pages/About Us/AboutUs';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/LoginPage/LoginPage.js';
import Regi from './pages/Registration Page/RegiPage.js';
import Profile from './pages/Profile/Profile';
import { createContext, useState } from 'react';

const UserContext=createContext()
function App() {
  const [login,setLogin]=useState(localStorage.getItem('login')||false)
  const [user,setUser]=useState(localStorage.getItem('user')||{id:'',name:'',email:'',contact:'',gender:''})
  return (
    
    <div className="App">
       
      
      <UserContext.Provider value={user}>
      
        <BrowserRouter>
        
        <Routes>
              <Route exact path="/" element={(login===true)?<Homepage setLogin={setLogin} user={user}/>:<Login setLogin={setLogin} setUser={setUser}/>} />
              <Route exact path="/about" element={<AboutUs setLogin={setLogin} />} />
              <Route exact path="/profile" element={<Profile setLogin={setLogin}/>} />
              {/* <Route exact path="/login" element={<Login/>}/>  */}
              <Route exact path="/regi" element={<Regi/>}/> 
              
        </Routes>
        </BrowserRouter>
        
        {/* <Route exact path="/login" element={<Element/>}/> */}
        {/* <Login/>  */}
        {/* <Regi/>  */}
        {/* <Profile/> */}
        
        </UserContext.Provider>
    </div>
  );
}

export{App,UserContext};
