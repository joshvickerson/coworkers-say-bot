/*
    IMPORTS
*/
var Twit = require('twit')
var config = require('../config')

/*
    Create the Twit object
*/
var twitter = new Twit(config)

// listen for the tweets
var stream = twitter.stream('statuses/filter', { track: '#ThingsMyCoworkersSay', language: 'en' })

stream.on('tweet', function (tweet) {
  // add tweet to retweet queue
  // maybe do some additional filtering?
  // this gives control over the pace of how often tweets are retweeted and will prevent the bot from
  // being flagged as spam (hopefully)
})

stream.on('limit', function (limitMessage) {
  // notify me that the bot is limited
})

stream.on('reconnect', function (request, response, connectInterval) {
  // notify me the bot is trying to reconnect?
})
