import React, { useState } from 'react'

function CreatePost() {
  const [title,setTitle]=useState("");
  const [post,setpost]=useState("");
  const createpost=async()=>{
    
  }
  return (
    <div className='CreatePostPage'>
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
        <label>Title:</label>
        <input placeholder='Title...'  onChange={(event)=>setTitle(event.target.value)}></input>
        </div>
        <div className='inputGp'>
          <label>Post:</label>
          <textarea placeholder='Post...' onChange={(event)=>setpost(event.target.value)}></textarea>
        </div>
        <button>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost
