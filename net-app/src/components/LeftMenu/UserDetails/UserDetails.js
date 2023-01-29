import React from "react";
import Recents from "../Recents/Recents";
import "./UserDetails.css";


function UserDetails() {
  return (
    <div className="user_details_container">
      <div className="user_details_background_image">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
      </div>
      <div className="user_details_div">
        <p className="user_details_div_title">Username</p>
        <p>username@gmail.com</p>
      </div>
      <hr />
      <div>
        <div className="user_details_stats">
          <p>Who viewed you?</p>
          <p className="user_details_stats_highlight">2,300</p>
        </div>
        <div className="user_details_stats">
          <p>Views on post</p>
          <p className="user_details_stats_highlight">2,570</p>
        </div>
      </div>
      {/* <Recents/> */}
    </div>
  );
}

export default UserDetails;