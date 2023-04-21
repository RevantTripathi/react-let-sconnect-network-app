import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import UserDetails from './components/LeftMenu/UserDetails/UserDetails';
import Recents from './components/LeftMenu/Recents/Recents';
import AboutUs from './pages/About Us/AboutUs';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/LoginPage/LoginPage.js';
import Regi from './pages/Registration Page/RegiPage.js';
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <div className="App">
       
      
      
        {/* <BrowserRouter>
        <Navbar/>
        <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/about" element={<AboutUs />} />
        </Routes>
        </BrowserRouter> */}
        {/* <Login/>  */}
        {/* <Regi/>  */}
        <Profile/>
        
       
    </div>
  );
}

export default App;
