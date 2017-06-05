/*
    IMPORTS
*/
var Twit = require('twit')
var tokens = require('./config')

/*
    Create the Twit object
*/
var twitter = new Twit(tokens)

// array to hold tweet ids to retweet
var tweets = [];

// listen for the tweets
var stream = twitter.stream('statuses/filter', { track: '#ThingsMyCoworkersSay', language: 'en' })

stream.on('tweet', function (tweet) {
  // add tweet to retweet queue
  tweets.push(tweet.id_str);
})

// some placeholders for possible future fancy features
// stream.on('limit', function (limitMessage) {
//   // notify me that the bot is limited?
// })
//
// stream.on('reconnect', function (request, response, connectInterval) {
//   // notify me the bot is trying to reconnect?
// })

// every 10 minutes, check if there's a tweet to retweet
setInterval(function() {
  if(tweets.length > 0) {
    var tweet_id = tweets.shift(); // grab the first tweet id
    twitter.post('statuses/retweet/:id', { id: tweet_id }, function (err, data, response) {
      // do nothing, I guess
    })
  }
}, 600000);
