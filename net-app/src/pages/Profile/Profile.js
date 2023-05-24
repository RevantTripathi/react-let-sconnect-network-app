import React, { useState, useEffect, Component, useContext } from 'react'
import "./Profile.css"
import Navbar from '../../components/Navbar/Navbar';
import { UserContext } from '../../App';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';


const Profile = ({ setLogin }) => {
    const user = useContext(UserContext)
    const [posts, setPosts] = useState([]);

    async function getPosts() {

        try {
            // const response = await fetch("https://dummyjson.com/posts");
            // const data = await response.json();
            // console.log(data.posts);
            // setPosts(data.posts);

            //https://letsconnectbackend-production.up.railway.app/posts
            let { data } = await axios.get('http://localhost:4000/posts')
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
                    <div className="icons_p"><PersonIcon /></div>
                    <div className="details">
                        <p>User Name</p>
                        <p> {user.name}</p>
                    </div>
                    <div className='details'>
                        <p>User Email</p>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className='post_box'>
                    <h5>My Posts</h5>
                    {
                        posts.map((post) => {
                            if (post.username === user.name) {
                                return (
                                    <div className="post_line">
                                        <p>{post.data}</p>
                                        Likes:{post.likes}
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
