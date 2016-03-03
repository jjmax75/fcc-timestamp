'use strict';
// User stories:
// 1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
// 2) If it does, it returns both the Unix timestamp and the natural language form of that date.
// 3) If it does not contain a date or Unix timestamp, it returns null for those properties.

module.exports = function(app) {

	app.route('/:timestamp')
	 	.get(function(req, res) {
			var timestamp = req.params.timestamp;
			var response = 'It still kind of works!';

			res.send('Hey folks');
	});

	app.route('/')
		.get(function(req, res) {
			res.sendFile(process.cwd() + '/public/index.html');
		});
};
