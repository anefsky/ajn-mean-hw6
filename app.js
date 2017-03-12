var express = require('express');
const bodyParser = require('body-parser')
var app = express();
const port = 9000;

app.set('port', (process.env.PORT || port));

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})



