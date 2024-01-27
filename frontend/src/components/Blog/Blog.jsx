import React, { useEffect, useState } from 'react';
import './Blog.css'; 
import Post from './Post';
import { isLoggedIn } from '../../API/useAPI';
import { getPosts } from '../../API/useAPI';

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPost, setSelectedPost] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    }
    fetchData();
  }, []);


  const HandleHover = () => {
    setIsHovered(!isHovered);
  }

  const HandleChoosePost = (post) => {
    setSelectedPost(post)
  }
  const HandlePostButton = () => {
    if (!isLoggedIn()) {
      window.location.href = "/login";
      return;
    }
    window.location.href = "/blog/addpost";
  }

  const RenderAvailablePosts = () => {
    return (
      <ul className='post-list'>
        {posts.slice().reverse().map(post => (
          <li key={post.title} onClick={() => HandleChoosePost(post)}>
            <div>
              <h2>{post.title}</h2>
              <p>{post.subtitle}</p>
              <div className='date-user-container'>
                <p>{post.date.split(" ")[0]}</p>
                <p>{post.author}</p>
              </div>
              <p className='time-p'>{post.date.split(" ")[1]}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="blog-container">
      <div className="available-posts">
        <button className="" onMouseEnter={HandleHover} onMouseLeave={HandleHover} onClick={HandlePostButton}>
          {!isHovered ? "Posts" : "Add Post"}
        </button>
        {RenderAvailablePosts()}
      </div>
      <div className="selected-post">
        {selectedPost === '' ?
          <h2>Select a post</h2> :
          <Post post={selectedPost} />}

      </div>
    </div>
  );
};

export default Blog;
