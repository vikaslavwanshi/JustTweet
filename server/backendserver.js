// mongdb connecivity libraries and using cors for cross conectivity between client server and backsend server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(express.json());

//connection string useing mongoose and db name is justtweetdb
mongoose
  .connect('mongodb+srv://vikasnewuser:vikasnewuser@mydatabasecluster.ylqnovv.mongodb.net/justtweetdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

//creating new schema with name tweetschema
const tweetSchema = new mongoose.Schema({
  text: String,
});

//creating a new model with name tweet, so it will convert Tweet to tweet and pluralizes it, which becomes my table name "tweets"
const Tweet = mongoose.model('Tweet', tweetSchema);

app.get('/api/tweets', async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    res.status(500).json({ error: 'Failed to fetch tweets' });
  }
});

app.post('/api/tweets', async (req, res) => {
  try {
    const { text } = req.body;
    const newTweet = await Tweet.create({ text });
    res.json(newTweet);
  } catch (error) {
    console.error('Error adding tweet:', error);
    res.status(500).json({ error: 'Failed to add tweet' });
  }
});

app.delete('/api/tweets/:tweetId', async (req, res) => {
  try {
    const { tweetId } = req.params;
    console.log(`Deleting tweet with ID: ${tweetId}`);
    const deletedTweet = await Tweet.findByIdAndDelete(tweetId);
    if (deletedTweet) {
      console.log(`Tweet with ID: ${tweetId} deleted successfully`);
      res.sendStatus(204);
    } else {
      console.log(`Tweet with ID: ${tweetId} not found`);
      res.status(404).json({ error: 'Tweet not found' });
    }
  } catch (error) {
    console.error('Error deleting tweet:', error);
    res.status(500).json({ error: 'Failed to delete tweet' });
  }
});

//opening port 3001 for backend server 
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
