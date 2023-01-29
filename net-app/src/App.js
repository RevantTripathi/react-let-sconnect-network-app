import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import UserDetails from './components/LeftMenu/UserDetails/UserDetails';
import Recents from './components/LeftMenu/Recents/Recents';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Routes>
        <Route exact path="/" element={<Homepage/>}/>
      </Routes>
       */}
       {/* <UserDetails/> */}
       {/* <LeftMenu/> */}
       <Homepage/>
       
       
    </div>
  );
}

export default App;
