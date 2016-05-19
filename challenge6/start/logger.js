var util = require('util'),
    _ = require('lodash');

module.exports = function(name) {
    var n = util.format('Greetings, %s!', name);
    console.log(n);
    console.log(_.now());
};

