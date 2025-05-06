// src/components/HomePage.jsx
import React, { useEffect, useState } from 'react';
import userData from '../../data/userData.json'; // adjust path if needed
import './HomePage.css';

function HomePage() {
  const [posts, setPosts] = useState([]);
  
  // Simulated login state — replace with real auth logic later
  const isLoggedIn = true;

  // Dummy posts for first-time visitors
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
      title: "Top 5 Study Playlists",
      content: "Lofi, classical, or ambient? Here's what helps most.",
      likes: 18,
      createdAt: "2025-04-25T11:00:00Z",
      tags: ["study", "music"]
    },
    {
      id: 5,
      title: "Making Friends in College",
      content: "It’s hard but worth it. Start with a smile!",
      likes: 27,
      createdAt: "2025-04-26T13:30:00Z",
      tags: ["college", "social"]
    },
    {
      id: 6,
      title: "Best Coffee Spots on Campus",
      content: "My top 3 hangout and caffeine refuel spots!",
      likes: 16,
      createdAt: "2025-04-27T08:15:00Z",
      tags: ["campus", "food"]
    },
    {
      id: 7,
      title: "Dealing with Homesickness",
      content: "Tips that helped me adjust during my first semester.",
      likes: 14,
      createdAt: "2025-04-23T10:00:00Z",
      tags: ["mental health", "college"]
    },
    {
      id: 8,
      title: "Budgeting for Students",
      content: "Here's how I save money and track my expenses.",
      likes: 22,
      createdAt: "2025-04-20T16:30:00Z",
      tags: ["finance", "student life"]
    },
    {
      id: 9,
      title: "My Morning Routine for Focus",
      content: "Small habits that set the tone for my day.",
      likes: 19,
      createdAt: "2025-04-19T07:00:00Z",
      tags: ["habits", "productivity"]
    },
    {
      id: 10,
      title: "Coping With Exam Stress",
      content: "Breathing exercises and study plans that help.",
      likes: 25,
      createdAt: "2025-04-18T13:15:00Z",
      tags: ["exams", "wellbeing"]
    },
    {
      id: 11,
      title: "Late Night Canteen Reviews",
      content: "Tried all 5 — here’s what I think!",
      likes: 11,
      createdAt: "2025-04-17T22:00:00Z",
      tags: ["food", "campus"]
    },
    {
      id: 12,
      title: "Study Techniques That Actually Work",
      content: "Pomodoro, active recall, spaced repetition — explained.",
      likes: 30,
      createdAt: "2025-04-15T12:00:00Z",
      tags: ["study", "tips"]
    },
    {
      id: 13,
      title: "My Room Decor on a Budget",
      content: "Thrift finds and DIY projects to make your dorm cozy.",
      likes: 17,
      createdAt: "2025-04-14T09:30:00Z",
      tags: ["dorm", "lifestyle"]
    },
    {
      id: 14,
      title: "Volunteering Experiences That Changed Me",
      content: "Giving back gave me new perspective and friendships.",
      likes: 21,
      createdAt: "2025-04-13T11:45:00Z",
      tags: ["volunteering", "growth"]
    },
    {
      id: 15,
      title: "Favorite Book Recommendations",
      content: "From fiction to productivity must-reads — check these out.",
      likes: 28,
      createdAt: "2025-04-12T10:20:00Z",
      tags: ["books", "recommendations"]
    },
    {
      id: 16,
      title: "How I Stay Organized With a Bullet Journal",
      content: "Visual planning and why it helps my ADHD brain.",
      likes: 24,
      createdAt: "2025-04-10T08:00:00Z",
      tags: ["organization", "journaling"]
    }
  ];
  

  useEffect(() => {
    if (isLoggedIn) {
      // Collect posts from followed users
      const followingIds = userData.following.map(user => user.id);
      
      // Simulated API that might return all posts (you would normally filter server-side)
      const followedPosts = []; // Assuming we had access to all users' posts (not in this dummy)

      // Since dummy API only has posts for John Doe, we'll show their own posts for now
      setPosts(userData.posts || []);
    } else {
      // Show guest posts
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
        <h2 className="feed-heading">{isLoggedIn ? 'Posts From People You Follow' : 'Explore Real Stories & Shared Journeys'}</h2>
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
