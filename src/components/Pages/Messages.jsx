// src/components/Pages/Messages.jsx
import React, { useState,useContext } from 'react';
import userData from '../../data/userData.json';
import { AuthContext } from '../SmallerComponents/AuthContext';
import './Messages.css';

function Messages() {
  const { isLoggedIn } = useContext(AuthContext); // Change this to false to test the logged-out view

  const chats = userData.chats || [];

  return (
    <div className="messages-page">
      <div className="messages-header">
        <h1>Your Conversations</h1>
        <p>Stay connected. Chat, catch up, collaborate.</p>
      </div>

      {!isLoggedIn ? (
        <div className="soft-auth-msg">
          <h2>Please Login or Sign up</h2>
          <p>Messages are private. Sign in to see your conversations!</p>
          <button className="soft-auth-btn">Login / Sign Up</button>
        </div>
      ) : (
        <div className="chat-list">
          {chats.map((chat, index) => {
            const user = chat.withUser;
            const lastMessage = chat.messages[chat.messages.length - 1];
            return (
              <div className="chat-card" key={index}>
                <img src={user.profilePic} alt={user.name} />
                <div className="chat-info">
                  <h3>{user.name}</h3>
                  <p>{lastMessage.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Messages;

