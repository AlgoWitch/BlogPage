import React, { useState } from 'react';
import './CreatePostButton.css';

const CreatePostButton = ({ onPost }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false); 

  const handlePost = () => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      anonymous: isAnonymous,
      createdAt: new Date().toISOString(),
      likes: 0,
      tags: [],
    };
    onPost(newPost);
    setShowModal(false);
    setTitle('');
    setContent('');
    setIsAnonymous(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="create-post-btn">
        Create Post
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Create a Post</h2>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <div className="anonymous-checkbox">
              <input
                type="checkbox"
                id="anonymousCheck"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
              />
              <label htmlFor="anonymousCheck">Post anonymously</label>
            </div>

            <button onClick={handlePost}>Post</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePostButton;
