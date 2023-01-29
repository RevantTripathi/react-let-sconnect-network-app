import React from 'react'
import "./Feed.css"
import Feedcard from"./FeedCard";

const Feed= () => {
    return(
        <>
        <div className='feed-container'>
            <div className='feed-add'>
                <input/>
                <p>Add Photo</p>
            </div>
            <Feedcard />
        </div>
        </>
    );
}

export default Feed;