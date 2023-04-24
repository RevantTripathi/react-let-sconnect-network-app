import React from "react";
import "./AboutUs.css";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function AboutUs({setLogin}) {
  const navigate =useNavigate(); 
  return (
  <>
  <Navbar setLogin={setLogin}/>
  <div className="container">
    <p className="title">About Us</p>
    <div className="about_para">
    <p>- Pro Network is a platform where people can create professional networks, talk with with various professionals by communicating, sharing knowledge, guiding people, get guided by people and so on.</p>
    <p>- At Pro Network, we have designed a system that works well for both students and professionals, and streamlined the networking/mentoring process making it easy and efficient.</p>
    <p>
    - Join the amazing community of immense professionals and start helping/benefitting from awesome posts!
    </p>
    </div>

    <button className="go_home_bt" onClick={() => navigate("/")}>GoTo Home</button>
  </div>
  </>
  
    );
}

export default AboutUs;
