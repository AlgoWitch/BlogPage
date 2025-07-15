// src/components/Pages/Resources.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../SmallerComponents/AuthContext';
import userData from '../../data/userData.json';
import ShareResourceButton from '../SmallerComponents/ShareResourceButton';
import { Link } from 'react-router-dom';
import './Resources.css';

function Resources() {
  const { isLoggedIn } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sharedResources, setSharedResources] = useState([
    {
      id: 1,
      title: 'Machine Learning Roadmap',
      description: 'Best path to learn ML in 6 months',
      type: 'Roadmap',
      link: 'https://mlroadmap.com',
    },
    {
      id: 2,
      title: 'DBMS Notes',
      description: 'Handwritten concise notes for quick revision',
      type: 'Notes',
      link: 'https://dbms-notes.com',
    },
    {
      id: 3,
      title: 'System Design Book',
      description: 'Free eBook on system design interviews',
      type: 'Book',
      link: 'https://sysdesign.io',
    },
  ]);

  const savedResources = userData.savedResources || [];
  const uploadedResources = userData.uploadedResources || [];

  const handleNewResource = (newResource) => {
    setSharedResources((prev) => [newResource, ...prev]);
  };

  const getDisplayedResources = () => {
    let base =
      activeTab === 'all'
        ? sharedResources
        : activeTab === 'saved'
        ? savedResources
        : uploadedResources;

    return base.filter(
      (res) =>
        res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  if (!isLoggedIn && activeTab !== 'all') {
    return (
      <div className="resources-page">
        <div className="login-message-container">
          <div className="login-message-box">
            <h3>🔒 Restricted Access</h3>
            <p>Login or Signup to view your saved and uploaded resources.</p>
            <Link to="/login">
              <button className="soft-auth-btn">Login / Signup</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>Explore Shared Resources</h1>
        <p>Notes, books, roadmaps and more — curated by our community.</p>
        {isLoggedIn && (
          <div className="share-btn-container">
            <ShareResourceButton onShare={handleNewResource} />
          </div>
        )}
      </div>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="🔍 Search resources by title, type, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="tab-buttons">
        <button
          onClick={() => setActiveTab('all')}
          className={activeTab === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab('saved')}
          className={activeTab === 'saved' ? 'active' : ''}
        >
          Saved
        </button>
        <button
          onClick={() => setActiveTab('uploads')}
          className={activeTab === 'uploads' ? 'active' : ''}
        >
          My Uploads
        </button>
      </div>

      <div className="resource-list">
        {getDisplayedResources().map((res) => (
          <div key={res.id} className="resource-card">
            <h3>{res.title}</h3>
            <p>{res.description}</p>
            <p>
              <strong>Type:</strong> {res.type}
            </p>
            <a href={res.link} target="_blank" rel="noopener noreferrer">
              🔗 Visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
