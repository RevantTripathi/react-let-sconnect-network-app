import React, { useState,useEffect,Component, useContext } from 'react'
import "./Profile.css"
import Navbar from '../../components/Navbar/Navbar';
import { UserContext } from '../../App';
import axios from 'axios';


const Profile = ({setLogin}) => {
    const user=useContext(UserContext)
    const [posts, setPosts] = useState([]);

    async function getPosts() {
    
        try {
          // const response = await fetch("https://dummyjson.com/posts");
          // const data = await response.json();
          // console.log(data.posts);
          // setPosts(data.posts);
          let {data}=await axios.get('http://localhost:4000/posts')
          console.log(data)
          setPosts(data)
        } catch (error) {
          console.log(error);
        }
    
      }
    
    
    
      useEffect(() => {
        getPosts();
      }, []);

    return (
        <>
            <Navbar setLogin={setLogin} />
            <div className='user_details'>
                <div className='user_box'>
                    <div className="details">
                        <p>User Name</p>
                        <p> {user.name}</p>
                    </div>
                    <div className='details'>
                        <p>User Email</p>
                        <p>{user.email}</p>
                    </div>
                    {
                        posts.map((post)=>{
                            if(post.username===user.name){
                                return(
                                    <div>
                                        <p>{post.data}</p>
                                        likes:{post.likes}
                                    </div>
                                )
                            }
                        })
                    }

                   

                </div>
            </div>
        </>



    )
}

export default Profile;
