
// pulling in the twit package
var Twit = require('twit');

var config = require('./config.js');

var T = new Twit ( config );

// post is creating a new object
T.post('statuses/update', { status: "hello! im tweeting from code :)" }, tweeted );

function tweeted ( error, data, response ) {
  if ( error ) console.log ( error );
  else console.log ( data.text );
}