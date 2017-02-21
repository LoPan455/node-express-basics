//node ALWAYS runs on the server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//app.use runs everytime a request comes in
//if it's looking for a static file, (index.html, client.js, style.css, etc..),
//look in folder 'public'
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

var songList = [
  {
    title: 'We did not start the Phire',
    artist: 'William Joel'
  },
  {
    title: 'Ring of Fire',
    artist: 'Johnny Cash'
  }
];


//app.get runs WHENEVER the server gets an HTTP GET request
app.get('/songs',function(req,res){
  res.send(songList)
})

app.post('/newSong', function(req,res){
  var newSong = req.body; //'data' from the client side
  if(newSong.artist !== 'Justin Bieber'){
  songList.push(newSong);
  console.log(songList);
  res.sendStatus(200); //everytime you send a request, you need to send a response
} else {
  res.sendStatus(500);
}
});



//app.listen runs ONCE at startup
app.listen(3000);


//
