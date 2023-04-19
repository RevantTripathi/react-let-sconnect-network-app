import React, { useState } from "react";
import "./FeedCard.css";
import Avatar from "@mui/material/Avatar";

import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useNavigate } from "react-router-dom";

function FeedCard({ image, name, tags, message, likeCount }) {


  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    if (isLiked === true) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  }

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

      <div className="icons" onClick={handleLikeClick}>

        {isLiked ? <ThumbUpIcon /> : <ThumbUpOffAltOutlinedIcon />}
        <p> {isLiked ? likeCount + 1 : likeCount}</p>

      </div>
    </div>
  );
}

export default FeedCard;