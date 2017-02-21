//node ALWAYS runs on the server

var express = require('express');
var app = epxress();

//app.use runs everytime a request comes in
//if it's looking for a static file, (index.html, client.js, style.css, etc..),
//look in folder 'public'
app.use(express.static('public'));

//app.listen runs ONCE at startup
app.listen(3000);


//
