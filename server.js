'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
	res.send('It works!');
});

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
