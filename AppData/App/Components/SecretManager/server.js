const express = require('express');
const app = express();
const port = 5555;

app.use(express.static('public'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + 'talk.js');
});
app.listen(port, function() {
  console.log('Server running on port ${port}.');
});
