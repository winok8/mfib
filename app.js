/**
 *
 */
var net = require('net');
var http = require('http');
var mq = require('mq');
var rpc = require('rpc');

var hdlr = require('web.js');
hdlr.crossDomain = true;
new net.TcpServer(8080, hdlr).run();
