import React from 'react';
import './tweetcard.css';
import axios from 'axios';

function TweetCard({ tweet, onDeleteTweet }) {
  const handleDelete = async () => {
    try {
      console.log(`Deleting tweet with ID: ${tweet._id}`);
      await axios.delete(`http://localhost:3001/api/tweets/${tweet._id}`);
      onDeleteTweet(tweet._id);
    } catch (error) {
      console.error('Error deleting tweet:', error.response ? error.response.data : error.message);
    }
  };

  const currentTime = new Date().toLocaleString();

  return (
    <div className="tweet-card">
      <h5 className="tweet-header">VikasLavwanshi@vikas tweeted </h5>
      <p className="tweet-text">{tweet.text}</p>
      <p className="tweet-time">Posted: {currentTime}</p> {/* I am showing the current time of tweets, just for fun and to make it more attractive*/}
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default TweetCard;
