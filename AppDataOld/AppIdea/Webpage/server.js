const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 5556;
const path = require('path');
app.use(express.static('public'));
app.set('view engine', 'ejs');

var username = "Temporal Parser"
app.get('/', function(req, res) {
    
    res.render('pages/index', {
        // EJS variable and server-side variable
        username: username
    });
});

app.get('/app', function(req, res) {
    res.render('pages/app', {
        // EJS variable and server-side variable
        username: username
    });
});

app.listen(port, function() {
  console.log(`Worker server running on port ${port}.`);
});
