/**
 *
 */
var http = require('http');
var mq = require('mq');
var rpc = require('rpc');

var routing = new mq.Routing({});
routing.append('^/assert(/.*)$', http.fileHandler('assert/'));

var contr = require('controllers/user.js');
var name;
for (name in contr.actions) {
	routing.append('^/user'+name, contr.actions[name]);
}

//read controller
module.exports = new http.Handler(routing);
/*new mq.Routing({

	'^/assert(/.*)$': http.fileHandler('assert/'),
	'^/([^/]*)/(.*)$': require('controllers/')
}));
*/
