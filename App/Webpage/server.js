const express = require('express');
const app = express();
const port = 5555;
app.use(express.static('public'));

//
app.get('/', function(req, res) {
  res.sendFile(__dirname + 'app.js');
});

app.get('/app', function(req, res) {
    res.sendFile(__dirname + 'app.html');
});

app.listen(port, function() {
  console.log('Worker server running on port ${port}.');
});
