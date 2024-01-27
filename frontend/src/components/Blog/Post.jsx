import React from 'react';
import "./Post.css";

const Post = ({ post }) => {

  return (
    <div className='post'>
      <h1>{post.title}</h1>
      <div className='content'>
        <p>{post.content}</p>
      </div>

    </div>
  );
};

export default Post;
