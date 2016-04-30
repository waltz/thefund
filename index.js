var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.post('/subscribe', function(req, res) {
  console.log('Creating subscription.');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
