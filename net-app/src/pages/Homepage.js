import React, { createContext } from "react";
import "./Homepage.css";
import LeftMenu from "./../components/LeftMenu/LeftMenu";
 import RightMenu from "./../components/RightMenu/RightMenu";
import Feed from "./../components/Feed/Feed";
import Navbar from "../components/Navbar/Navbar";


function Homepage({setLogin,user}) {
  
  return (
    <>
    <Navbar setLogin={setLogin}/>
    <div className="homepage_container">
      <LeftMenu />
       <Feed /> 
      <RightMenu /> 
    </div>
    </>
  );
}

export { Homepage};