// src/components/Pages/Communities.jsx
import React, { useState } from 'react';
import userData from '../../data/userData.json';
import './Communities.css';

function Communities() {
  const isLoggedIn = false; // ← switch to true for testing logged-in view
  const [activeTab, setActiveTab] = useState(isLoggedIn ? 'subscribed' : 'recommended');
  const [searchTerm, setSearchTerm] = useState('');

  const createdCommunities = userData.createdCommunities || [];
  const subscribedCommunities = userData.likedCommunities || [];

  const recommendedCommunities = [
    { id: 101, name: 'Bookworms United', description: 'Share reviews, swap reads.' },
    { id: 102, name: 'Fitness & Wellness', description: 'Chasing health goals!' },
    { id: 103, name: 'Plant Parents', description: 'Nature lovers unite.' },
    { id: 104, name: 'Art & Doodles', description: 'Share your art.' }
  ];

  const allCommunities = {
    created: isLoggedIn ? createdCommunities : null,
    subscribed: isLoggedIn ? subscribedCommunities : null,
    recommended: recommendedCommunities
  };

  const handleSearch = () => {
    // Optional: add actual search functionality if needed
  };

  const filterCommunities = (communities) =>
    communities?.filter(comm =>
      comm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comm.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const renderCommunities = (communities) => {
    if (!isLoggedIn && (activeTab === 'created' || activeTab === 'subscribed')) {
      return (
        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1rem', color: '#777' }}>
          {activeTab === 'created'
            ? 'Signup/login to see your created communities'
            : 'Signup/login to see your subscribed communities'}
        </div>
      );
    }

    const filtered = filterCommunities(communities);

    return (
      <div className="community-list">
        {filtered.map((community) => (
          <div key={community.id} className="community-card">
            <h3>{community.name}</h3>
            <p>{community.description}</p>
            <button className="visit-btn">Visit</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="communities-page">
      <div className="community-header">
        <h1>Find Your Circle</h1>
        <p>Browse, join, or create communities that vibe with you.</p>
        <div className="community-controls">
          <input
            type="text"
            placeholder="Search communities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
          <button className="create-btn">+ Create Community</button>
        </div>
      </div>

      <div className="tab-buttons">
        <button onClick={() => setActiveTab('subscribed')} className={activeTab === 'subscribed' ? 'active' : ''}>Subscribed</button>
        <button onClick={() => setActiveTab('created')} className={activeTab === 'created' ? 'active' : ''}>Created</button>
        <button onClick={() => setActiveTab('recommended')} className={activeTab === 'recommended' ? 'active' : ''}>Recommended</button>
      </div>

      <div className="tab-content">
        {renderCommunities(allCommunities[activeTab])}
      </div>
    </div>
  );
}

export default Communities;
