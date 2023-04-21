import React  from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';


function Navbar(){

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
                <p>HI,REVANT</p>
                <p onClick={() => navigate("/")}>HOME</p>
                <p onClick={() => navigate("/about")}>ABOUT US</p>
                {/* <p>ABOUT US</p> */}
                <p>PROFILE</p>
                <p>DARK MODE</p>
                <button className='logbt'>LogOut</button>
            </div>
        </div>
        </div>
        </>

    );
}

export default Navbar;