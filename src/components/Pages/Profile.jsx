import React, { useState, useContext } from 'react';
import { AuthContext } from '../SmallerComponents/AuthContext';
import userData from '../../data/userData.json';
import CreatePostButton from '../SmallerComponents/CreatePostButton';
import { FaEllipsisV } from 'react-icons/fa';
import './Profile.css';

function ProfilePage() {
  const { isLoggedIn } = useContext(AuthContext);
  const [posts, setPosts] = useState(userData.posts || []);
  const [activeTab, setActiveTab] = useState('named');

  // menu and editing state
  const [menuOpen, setMenuOpen] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [editContent, setEditContent] = useState('');

  const handleNewPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  const toggleMenu = (postId) => {
    setMenuOpen(menuOpen === postId ? null : postId);
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter((p) => p.id !== postId));
    setMenuOpen(null);
  };

  const startEditing = (post) => {
    setEditingPost(post);
    setEditContent(post.content);
    setMenuOpen(null);
  };

  const saveEdit = (postId) => {
    setPosts(
      posts.map((p) =>
        p.id === postId ? { ...p, content: editContent } : p
      )
    );
    setEditingPost(null);
  };

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

  const namedPosts = posts.filter((post) => !post.anonymous);
  const anonymousPosts = posts.filter((post) => post.anonymous);
  const postsToShow = activeTab === 'named' ? namedPosts : anonymousPosts;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={userData.profilePic} alt="profile" />
        <h2>{userData.name}</h2>
        <p>{userData.bio}</p>
        <div className="profile-stats">
          <span><strong>{posts.length}</strong> posts</span>
          <span><strong>{userData.followersCount}</strong> followers</span>
          <span><strong>{userData.followingCount}</strong> following</span>
        </div>
      </div>

      {/* Create Post Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <CreatePostButton onPost={handleNewPost} />
      </div>

      {/* Tabs */}
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

      {/* Posts */}
      <div className="profile-posts">
        {postsToShow.map((post) => (
          <div key={post.id} className="profile-post-card">
            <div className="post-header">
              <h4>{post.title}</h4>
              <div className="post-options">
                <FaEllipsisV onClick={() => toggleMenu(post.id)} />
                {menuOpen === post.id && (
                  <div className="post-dropdown">
                    <button onClick={() => startEditing(post)}>Edit</button>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                  </div>
                )}
              </div>
            </div>

            {editingPost?.id === post.id ? (
              <>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows="4"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                />
                <button
                  className="primary-btn"
                  style={{ marginTop: '0.5rem' }}
                  onClick={() => saveEdit(post.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <p>{post.content}</p>
            )}

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
