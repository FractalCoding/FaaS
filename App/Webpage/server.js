const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 5555;
app.use(express.static('public'));
app.set('view engine', 'ejs');
// Port website will run on
app.listen(port);
//https://www.section.io/engineering-education/static-site-dynamic-nodejs-web-app/
app.get('/', function(req, res) {
  res.sendFile(__dirname + 'app.js');
});

app.get('/app', function(req, res) {
    res.sendFile(__dirname + 'app.html');
});

app.listen(port, function() {
  console.log('Worker server running on port ${port}.');
});
