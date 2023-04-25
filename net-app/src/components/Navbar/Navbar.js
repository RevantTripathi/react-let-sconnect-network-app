import React, { useContext }  from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';


function Navbar({setLogin}){
    const user=useContext(UserContext)

    const navigate =useNavigate();   
    return(
        <>
        <div className='navbar_container'>
        <div className='navbar'>
        <div className='navbar_left'>
             <img className="logo_img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU'/> 
            <input className='navbar_left_input' placeholder='Search User'/>
            </div>

            <div className='navbar_right'>
                <p>Hi,{user.name}</p>
                <p onClick={() => navigate("/")}>HOME</p>
                <p onClick={() => navigate("/about")}>ABOUT US</p>
                {/* <p>ABOUT US</p> */}
                <p onClick={() => navigate("/profile")}>PROFILE</p>
                {/* <p>DARK MODE</p> */}
                <button className='logbt' onClick={() => {setLogin(false);navigate("/")}}>LogOut</button>
            </div>
        </div>
        </div>
        </>

    );
}

export default Navbar;