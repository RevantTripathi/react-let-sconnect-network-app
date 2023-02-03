import React from "react";
import "./FeedCard.css";
import Avatar from "@mui/material/Avatar";
// import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
// import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
// import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";

function FeedCard({ image, name, tags, message }) {
  return (
    <div className="feed_card_container">
      <div className="feed_card_title">
        <div>
          <Avatar alt={name} src={image} />
        </div>
        <div className="feed_card_title_text">
          <p className="feed_card_title_text_name">{name}</p>
          <div className="tags">
            {tags.map((value) => (
              <p className="feed_card_title_text_username">{value}</p>
            ))}
          </div>
        </div>
      </div>

      <p>{message}</p>
    </div>
  );
}

export default FeedCard;