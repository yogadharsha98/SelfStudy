import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from '../features/posts/postSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onSavePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle('');
      setContent('');
    }
  };

  return (
    <section>
      <h2>Add a new post</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postTitle">Post Content</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={onSavePost}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
