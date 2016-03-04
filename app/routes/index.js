'use strict';
// User stories:
// 1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
// 2) If it does, it returns both the Unix timestamp and the natural language form of that date.
// 3) If it does not contain a date or Unix timestamp, it returns null for those properties.
var FormatTime = require(process.cwd() + '/app/controllers/formatTime.client.js');

module.exports = function(app) {

	var formatTime = new FormatTime();

	app.route('/')
		.get(function(req, res) {
			res.sendFile(process.cwd() + '/public/index.html');
		});

	app.route('/:timestamp')
			.get(formatTime.main);
};
