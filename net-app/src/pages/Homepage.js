import React from "react";
import "./Homepage.css";
import LeftMenu from "./../components/LeftMenu/LeftMenu";
 import RightMenu from "./../components/RightMenu/RightMenu";
import Feed from "./../components/Feed/Feed";


function Homepage() {
  return (
    <div className="homepage_container">
      <LeftMenu />
       <Feed /> 
      <RightMenu /> 
    </div>
  );
}

export default Homepage;