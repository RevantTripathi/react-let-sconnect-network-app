import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import UserDetails from './components/LeftMenu/UserDetails/UserDetails';
import Recents from './components/LeftMenu/Recents/Recents';
import AboutUs from './pages/About Us/AboutUs';


function App() {
  return (
    <div className="App">
       <Navbar/>
      
       <Homepage/>
        {/* <AboutUs/>  */}
       
    </div>
  );
}

export default App;
