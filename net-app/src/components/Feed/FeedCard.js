import React, { useState } from "react";
import "./FeedCard.css";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

function FeedCard({ getPosts, id, username, name, message, likeCount }) {


  const [isLiked, setIsLiked] = useState(false);

  async function handleLikeClick() {
    if (isLiked === true) {
      likeCount-=1
      setIsLiked(false);
      try {
        await axios.patch('https://letsconnectbackend-production.up.railway.app/posts', { id: id, likes: likeCount })
      } catch (err) {
        console.log(err)
      }
      getPosts()
    } else {
      likeCount+=1
      setIsLiked(true);
      try {
        await axios.patch('https://letsconnectbackend-production.up.railway.app/posts', { id: id, likes: likeCount  })
      } catch (err) {
        console.log(err)
      }
      getPosts()
    }
  }
  // 

  return (
    <div className="feed_card_container">
      <div className="feed_card_title">
        <div className="name_dis">
          {/* <Avatar alt={name} src={image} /> */}
          <PersonIcon/>
          <h4>{username}</h4>
        </div>
        <div className="feed_card_title_text">
          <p className="feed_card_title_text_name">{name}</p>
          {/* <div className="tags">
            {tags.map((value) => (
              <p className="feed_card_title_text_username">{value}</p>
            ))}
          </div> */}
        </div>
      </div>

      <p>{message}</p>

      <div className="icons" onClick={handleLikeClick}>

        {isLiked ? <ThumbUpIcon /> : <ThumbUpOffAltOutlinedIcon />}
        <p> {likeCount}</p>

      </div>
    </div>
  );
}

export default FeedCard;