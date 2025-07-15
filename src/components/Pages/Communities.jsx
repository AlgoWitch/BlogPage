// src/components/Pages/Communities.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../SmallerComponents/AuthContext';
import { Link } from 'react-router-dom';
import userData from '../../data/userData.json';
import CreateCommunityButton from '../SmallerComponents/CreateCommunityButton';
import { FaEllipsisV } from 'react-icons/fa';
import './Communities.css';

function Communities() {
  const { isLoggedIn } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(isLoggedIn ? 'subscribed' : 'recommended');
  const [createdCommunities, setCreatedCommunities] = useState(userData.createdCommunities || []);
  const [subscribedCommunities] = useState(userData.likedCommunities || []);
  const [editingCommunity, setEditingCommunity] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const recommendedCommunities = [
    { id: 101, name: 'Bookworms United', description: 'Share reviews, swap reads.' },
    { id: 102, name: 'Fitness & Wellness', description: 'Chasing health goals!' },
    { id: 103, name: 'Plant Parents', description: 'Nature lovers unite.' },
    { id: 104, name: 'Art & Doodles', description: 'Share your art.' }
  ];

  const handleCreateCommunity = (newCommunity) => {
    setCreatedCommunities(prev => {
      const exists = prev.find(c => c.id === newCommunity.id);
      if (exists) {
        return prev.map(c => c.id === newCommunity.id ? newCommunity : c);
      }
      return [newCommunity, ...prev];
    });
    setEditingCommunity(null);
    setShowModal(false);
  };

  const handleDeleteCommunity = (id) => {
    setCreatedCommunities(prev => prev.filter(c => c.id !== id));
  };

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleSearch = () => {
    // Optional search logic
  };

  const filterCommunities = (communities) =>
    communities?.filter(comm =>
      comm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comm.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const allCommunities = {
    created: isLoggedIn ? createdCommunities : null,
    subscribed: isLoggedIn ? subscribedCommunities : null,
    recommended: recommendedCommunities
  };

  const renderCommunities = (communities) => {
    if (!isLoggedIn && (activeTab === 'created' || activeTab === 'subscribed')) {
      const msg =
        activeTab === 'created'
          ? 'Sign up or log in to see your created communities.'
          : 'Sign up or log in to see your subscribed communities.';
      return (
        <div className="login-message-container">
          <div className="login-message-box">
            <h3>🔒 Hold up!</h3>
            <p>{msg}</p>
            <Link to="/login">
              <button className="soft-auth-btn">Login / Signup</button>
            </Link>
          </div>
        </div>
      );
    }

    const filtered = filterCommunities(communities);

    return (
      <div className="community-list">
        {filtered.map((community) => (
          <div key={community.id} className="community-card">
            <div className="community-card-header">
              <h3>{community.name}</h3>
              {activeTab === 'created' && isLoggedIn && (
                <div className="three-dots-container">
                  <FaEllipsisV className="three-dots-icon" onClick={() => toggleDropdown(community.id)} />
                  {openDropdownId === community.id && (
                    <div className="dropdown-menu">
                      <button onClick={() => {
                        setEditingCommunity(community);
                        setShowModal(true);
                        setOpenDropdownId(null);
                      }}>Edit</button>
                      <button onClick={() => handleDeleteCommunity(community.id)}>Delete</button>
                    </div>
                  )}
                </div>
              )}
            </div>
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
          {isLoggedIn && (
            <button className="create-btn" onClick={() => {
              setEditingCommunity(null);
              setShowModal(true);
            }}>
              + Create Community
            </button>
          )}
        </div>
      </div>

      <div className="tab-buttons">
        {isLoggedIn && (
          <>
            <button onClick={() => setActiveTab('subscribed')} className={activeTab === 'subscribed' ? 'active' : ''}>Subscribed</button>
            <button onClick={() => setActiveTab('created')} className={activeTab === 'created' ? 'active' : ''}>Created</button>
          </>
        )}
        <button onClick={() => setActiveTab('recommended')} className={activeTab === 'recommended' ? 'active' : ''}>Recommended</button>
      </div>

      <div className="tab-content">
        {renderCommunities(allCommunities[activeTab])}
      </div>

      {/* Modal */}
      {showModal && (
        <CreateCommunityButton
          onCreate={handleCreateCommunity}
          initialData={editingCommunity}
          onClose={() => {
            setEditingCommunity(null);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default Communities;
