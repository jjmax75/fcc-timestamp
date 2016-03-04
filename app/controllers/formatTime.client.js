'use strict';

function FormatTime() {

  this.main = function(req, res) {
    // function to manage request and response to FormatTime
    var naturalTime = null;
    var unixTime = null;
    var timestamp = req.params.timestamp;

    var isUnix = !isNaN(timestamp);  //unix timestamp should be a number
    var isNatural = new Date(timestamp).getTime() > 0;  // is it a natural time (i.e. December 15, 2015)

    if (isUnix) {
      unixTime = Number(timestamp);
      naturalTime = makeNaturalTime(unixTime * 1000);
    } else if (isNatural) {
      naturalTime = timestamp;
      unixTime = new Date(naturalTime + ' UTC').getTime() / 1000;
    }

    var timeObject = {"unix": unixTime, "natural": naturalTime};
    res.send(timeObject);
  };

  function makeNaturalTime(timestamp) {
    // function to make a natural date from a unix timestamp
    var months = ['January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October', 'November',
      'December'];

    var date = new Date(timestamp);

    var month = date.getUTCMonth();
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();

    return (months[month] + ' ' + day + ', ' + year);
  }
}

module.exports = FormatTime;
