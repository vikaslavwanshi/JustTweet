import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './newtweet.css';
import axios from 'axios';

function NewTweet({ onAddTweet, tweetsCount }) {
  const [tweetText, setTweetText] = useState('');

  const handleInputChange = (event) => {
    setTweetText(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (tweetText.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:3001/api/tweets', { text: tweetText });
        onAddTweet(response.data); //passing the entire tweet object
        setTweetText('');
      } catch (error) {
        console.error('Error adding tweet:', error);
      }
    }
  };

  return (
    <div className="new-tweet">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="tweetText">
          <Form.Control
            as="textarea"
            className="tweet-input"
            placeholder="What's happening?"
            value={tweetText}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="tweet-button">
          Tweet
        </Button>
      </Form>
    </div>
  );
}

export default NewTweet;
