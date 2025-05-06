import React from 'react';
import { Link } from 'react-router-dom';
import './Feed.css';

const tags = [
  'Life', 'College', 'MentalHealth', 'Productivity', 'Friendship',
  'Love', 'Stress', 'Success', 'Failure', 'DailyThoughts', 'Gratitude', 'Growth'
];

const posts = [
  {
    id: 1,
    title: "My First Day in College",
    author: "Aman",
    excerpt: "It was nerve-wracking but exciting! Met new people, explored the campus...",
    content: "It was nerve-wracking but exciting! Met new people, explored the campus, and tried not to get lost. The seniors were super helpful and I ended the day with a smile.",
    likes: 23,
    comments: 5
  },
  {
    id: 2,
    title: "Feeling Lost, But Learning",
    author: "Anonymous",
    excerpt: "Some days are tough, but I'm slowly figuring things out...",
    content: "Some days are really tough, but I'm slowly figuring things out. Journaling helps. I’ve learned to breathe and take it one moment at a time.",
    likes: 17,
    comments: 3
  },
  {
    id: 3,
    title: "Time Management Tips",
    author: "Riya",
    excerpt: "Color-coded planners, to-do lists, and taking breaks...",
    content: "Color-coded planners, to-do lists, and taking breaks—these changed my routine completely. I finally feel in control.",
    likes: 30,
    comments: 6
  },
  {
    id: 4,
    title: "Overthinking? Here's My Fix",
    author: "Naina",
    excerpt: "Shifting focus with a walk or writing things down...",
    content: "I shift my focus by walking or journaling. It clears my head and helps me get perspective when my thoughts spiral.",
    likes: 29,
    comments: 8
  },
  {
    id: 5,
    title: "That One Book Changed Me",
    author: "Dev",
    excerpt: "‘Atomic Habits’ gave me the mindset reset I needed...",
    content: "‘Atomic Habits’ gave me the mindset reset I didn’t know I needed. It taught me about systems, not just goals.",
    likes: 35,
    comments: 9
  },
  {
    id: 6,
    title: "Late Night Musings",
    author: "Anya",
    excerpt: "Why do thoughts hit hardest at night?",
    content: "Why do thoughts hit hardest at night? It’s the silence, I think. It makes you listen more deeply to your own mind.",
    likes: 15,
    comments: 2
  },
  {
    id: 7,
    title: "Small Wins Matter",
    author: "Arjun",
    excerpt: "I made my bed today. That’s enough sometimes.",
    content: "I made my bed today. That’s enough sometimes. We don’t always need to do big things to feel progress.",
    likes: 20,
    comments: 5
  },
  {
    id: 8,
    title: "Group Study Wins",
    author: "Zara",
    excerpt: "Working with friends can actually be productive!",
    content: "We held each other accountable and had fun at the same time. Group study works if you have the right people.",
    likes: 25,
    comments: 4
  },
  {
    id: 9,
    title: "Music & Moods",
    author: "Jay",
    excerpt: "The right playlist can flip a bad day around.",
    content: "Lo-fi when I’m anxious, pop when I’m low energy. Music is therapy.",
    likes: 18,
    comments: 2
  },
  {
    id: 10,
    title: "Trying Mindfulness",
    author: "Anonymous",
    excerpt: "Breathing exercises changed how I react to stress...",
    content: "Slowing down and noticing helped me feel more present in life. I wish I started earlier.",
    likes: 22,
    comments: 3
  },
  {
    id: 11,
    title: "From Self-Doubt to Confidence",
    author: "Meera",
    excerpt: "Little actions every day help me feel more sure of myself...",
    content: "I stopped waiting to feel confident. I just started doing things. That built real self-esteem.",
    likes: 27,
    comments: 5
  },
  {
    id: 12,
    title: "Study Burnout is Real",
    author: "Kabir",
    excerpt: "Burning out helped me see I needed boundaries.",
    content: "I used to study 8-10 hours daily. I didn’t realize I was slowly draining myself. Rest matters.",
    likes: 31,
    comments: 7
  }
];

const Feed = () => {
  return (
    <div className="feed-page">
      <div className="centered-container">
        <div className="search-section">
          <input type="text" placeholder="Search posts or people..." />
        </div>

        <div className="tags-section">
          {tags.map(tag => (
            <button key={tag} className="tag">{tag}</button>
          ))}
        </div>

        <div className="main-feed-wrapper">
          <h3>Explore Real Stories & Shared Journeys</h3>
          <div className="post-grid">
            {posts.map((post) => (
              <Link to={`/post/${post.id}`} className="post-card" key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <span>🪷{post.author}  💖 {post.likes} 🗨️{post.comments}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
