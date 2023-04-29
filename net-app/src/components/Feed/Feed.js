
import React, { useState, useEffect, useContext } from "react";
import "./Feed.css";
import FeedCard from "./FeedCard";


import axios from "axios";
import { UserContext } from "../../App";

function Feed() {

  const user=useContext(UserContext)

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function getPosts() {
    
    try {
      // const response = await fetch("https://dummyjson.com/posts");
      // const data = await response.json();
      // console.log(data.posts);
      // setPosts(data.posts);
      let {data}=await axios.get('https://letsconnectbackend-production.up.railway.app/posts')
      console.log(data)
      setPosts(data)
    } catch (error) {
      console.log(error);
    }

  }



  useEffect(() => {
    getPosts();
  }, []);

   async function addPosts() {
    // const copyArray = [...posts];
    // copyArray.unshift({
    //   userId: 10,
    //   id: posts.length + 1,
    //   name: "Revant",
    //   tags: ["HTML", "CSS", "React"],
    //   body: input,
    //   image: imageUrl,
    //   likeCount:0,
    // });
    try{
      await axios.post('http://localhost:4000/posts',{user:user.id,data:input,likes:0})
    }catch(err){
      console.log(err)
    }
    getPosts();
    setInput("");
    setImageUrl("");
  }

  return (
    <div className="feed_container">
      <div className="feed_add">
        <div className="feed_add_input">

          <input
            type="text"
            value={input}
            placeholder="Write something..."
            onChange={(event) => setInput(event.target.value)}
          />


          <button onClick={addPosts}>Add</button>
        </div>

        {/* <button className="feed_add_photo">Add Photo</button> */}
      </div>

      {posts?.map((value) => (
        <FeedCard
        getPosts={getPosts}
          id={value._id}
          name={value.name}
          username={value.username}
          message={value.data}
          likeCount={value.likes}
        />
      ))}
    </div>

    
  );
}

export default Feed;