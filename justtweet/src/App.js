import React, { useState, useEffect } from 'react';
import MyNavbar from "./components/navbar/navbar";
import Profilecover from "./components/profilecover/profilecover";
import ProfileInfo from "./components/profileinfo/profileinfo";
import ProfileStats from "./components/profilestats/profilestats";
import Newtweet from "./components/newtweet/newtweet";
import TweetCard from "./components/tweetcard/tweetcard";
import axios from 'axios';
import RightPanel from './components/rightpanel/rightpanel';

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchTweets();
  }, []);

  // get request 
  const fetchTweets = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/tweets');
      setTweets(response.data);
    } catch (error) {
      console.error('Error fetching tweets:', error.response ? error.response.data : error.message);
    }
  };

  // post request
  const handleAddTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);   // making the api call within newtweet component itself.
  };

  //delete request
  const handleDeleteTweet = (tweetId) => {
    const updatedTweets = tweets.filter((t) => t._id !== tweetId);
    setTweets(updatedTweets);
  };

  //rendering all components in here
  return (
    <div>
      <MyNavbar />
      <Profilecover />
      <div className="left-section">
        <ProfileInfo />
      </div>
      <ProfileStats tweetsCount={tweets.length} />
      <div className="content-container">
        <Newtweet onAddTweet={handleAddTweet} tweetsCount={tweets.length} />
        <div className="tweet-container">
          {tweets.map((tweet) => (
            <TweetCard
              key={tweet._id}
              tweet={tweet}
              onDeleteTweet={handleDeleteTweet}
            />
          ))}
        </div>
        <div className="right-section">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
