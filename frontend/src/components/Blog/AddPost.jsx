import React, { useState } from 'react';
import './AddPost.css';
import { postPost } from '../../API/useAPI';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubtitleChange = (e) => {
    setSubtitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postPost(title, subtitle, content);

    setTitle('');
    setSubtitle('');
    setContent('');
  };

  return (
    <div className="post-form-container">
      <h2>Create a Post</h2>
      <div className="form-group">
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter post title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="subtitle">Sub-Title:</label>
        <input
          type="text"
          id="subtitle"
          value={subtitle}
          onChange={handleSubtitleChange}
          placeholder="Enter sub-title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Post Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          placeholder="Write your post content here"
        ></textarea>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddPost;
