var util = require('util'),
    _ = require('lodash');

module.exports = function(name) {
    var n = util.format('Whats up, %s!', name);
    console.log(n);
    console.log(_.now());
};

