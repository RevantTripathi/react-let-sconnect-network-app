
import React, { useState, useEffect } from "react";
import "./Feed.css";
import FeedCard from "./FeedCard";


import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function getPosts() {
    // async and await api call ;
    // error handling
    try {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      console.log(data.posts);
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }

    // promise with error handling
    // fetch("https://dummyjson.com/posts")
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((data) => {
    //     console.log("response", data);
    //     setPosts(data.posts);
    //   })
    //   .catch((e) => console.log(e));

    // axios
    //   .get("https://dummyjson.com/posts")
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((data) => {
    //     console.log("response", data);
    //     setPosts(data.posts);
    //   })
    //   .catch((e) => console.log(e));
  }



  useEffect(() => {
    getPosts();
  }, []);

  function addPosts() {
    const copyArray = [...posts];
    copyArray.unshift({
      userId: 10,
      id: posts.length + 1,
      name: "Revant",
      tags: ["HTML", "CSS", "React"],
      body: input,
      image: imageUrl,
      likeCount:0,
    });
    setPosts(copyArray);
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

        <button className="feed_add_photo">Add Photo</button>
      </div>

      {posts?.map((value) => (
        <FeedCard
          id={value.id}
          image={value.image}
          name={value.name}
          tags={value.tags}
          message={value.body}
          likeCount={value.reactions}
        />
      ))}
    </div>

    
  );
}

export default Feed;