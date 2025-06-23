// src/components/Pages/ProfilePage.jsx
import React, { useState } from 'react';
import userData from '../../data/userData.json';
import './Profile.css';

function ProfilePage() {
  const isLoggedIn = false; // Replace with real login state
  const [activeTab, setActiveTab] = useState('named');

  if (!isLoggedIn) {
    return (
      <div className="profile-page">
        <div className="login-prompt-card">
          <h2>✨ Join the Scriblyn Community</h2>
          <p>Sign up or log in to view your profile, post history, and connect with others.</p>
          <button className="primary-btn">Login / Signup</button>
        </div>
      </div>
    );
  }

  const namedPosts = userData.posts.filter(post => !post.anonymous);
  const anonymousPosts = userData.posts.filter(post => post.anonymous);

  const postsToShow = activeTab === 'named' ? namedPosts : anonymousPosts;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={userData.profilePic} alt="profile" />
        <h2>{userData.name}</h2>
        <p>{userData.bio}</p>
        <div className="profile-stats">
          <span><strong>{userData.postsCount}</strong> posts</span>
          <span><strong>{userData.followersCount}</strong> followers</span>
          <span><strong>{userData.followingCount}</strong> following</span>
        </div>
      </div>

      <div className="profile-tabs">
        <button
          className={activeTab === 'named' ? 'active' : ''}
          onClick={() => setActiveTab('named')}
        >
          Named Posts
        </button>
        <button
          className={activeTab === 'anonymous' ? 'active' : ''}
          onClick={() => setActiveTab('anonymous')}
        >
          Anonymous Posts
        </button>
      </div>

      <div className="profile-posts">
        {postsToShow.map((post) => (
          <div key={post.id} className="profile-post-card">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <div className="post-meta">
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              <span>❤️ {post.likes}</span>
            </div>
            <div className="post-tags">
              {post.tags.map((tag, i) => (
                <span key={i} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
