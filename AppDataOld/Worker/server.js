const express = require('express');
const app = express();
const port = 8080;
app.use(express.static('serv'));

//
app.get('/', function(req, res) {
  res.sendFile(__dirname + 'talk.js');
});
app.listen(port, function() {
  console.log('Worker server running on port ${port}.');
});
