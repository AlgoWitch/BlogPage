// src/components/HomePage.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../SmallerComponents/Navbar';
import Footer from '../SmallerComponents/Footer';
import './HomePage.css';

function HomePage() {
  const [posts, setPosts] = useState([]);

  // Simulated login state — replace with real auth logic later
  const isLoggedIn = false;

  const randomGuestPosts = [
    {
      id: 1,
      title: "Welcome to Scriblyn!",
      content: "Discover voices from all corners of campus.",
      likes: 12,
      createdAt: "2025-04-28T10:00:00Z",
      tags: ["introduction", "community"]
    },
    {
      id: 2,
      title: "Why Journaling Helps Mental Clarity",
      content: "A few minutes of reflection can change your day.",
      likes: 20,
      createdAt: "2025-04-29T14:45:00Z",
      tags: ["mental health", "writing"]
    },
    {
      id: 3,
      title: "Campus Life 101",
      content: "Quick tips to survive and thrive in your first year.",
      likes: 33,
      createdAt: "2025-05-01T09:20:00Z",
      tags: ["college", "advice"]
    },
    {
      id: 4,
      title: "How to Stay Motivated During Exams",
      content: "Exam season can be tough, but staying positive can help.",
      likes: 15,
      createdAt: "2025-05-02T11:00:00Z",
      tags: ["motivation", "studies"]
    },
    {
      id: 5,
      title: "The Art of Time Management",
      content: "Mastering your schedule will boost your productivity.",
      likes: 25,
      createdAt: "2025-05-03T16:30:00Z",
      tags: ["productivity", "time management"]
    }
  ];

  useEffect(() => {
    if (isLoggedIn) {
      fetch('/data/userData.json')
        .then(res => res.json())
        .then(data => {
          setPosts(data.posts || []);
        })
        .catch(error => {
          console.error("Error loading user data:", error);
          setPosts([]);
        });
    } else {
      setPosts(randomGuestPosts);
    }
  }, [isLoggedIn]);

  return (
    <div>


      <div className="hero-section">
        <h1>Your Space to Share, Listen, and Connect.</h1>
        <p>Post your thoughts, share your journey, connect with others...</p>
        <button>Write a Post</button>
        <button>Explore Communities</button>
      </div>

      <div className="main-feed">
        <h2 className="feed-heading">{isLoggedIn ? 'Posts From People You Follow' : 'Recommended Posts'}</h2>
        <div className="post-list">
          {posts.map(post => (
            <div key={post.id} className="home-post-card">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className="home-post-meta">
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                <span>❤️ {post.likes}</span>
              </div>
              <div className="home-tags">
                {post.tags?.map((tag, idx) => (
                  <span key={idx} className="tag">#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default HomePage;
