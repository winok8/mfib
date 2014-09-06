/**
 * todo: 增加不断线平滑升级机制
 */
var net = require('net');

var hdlr = require('web.js');
hdlr.crossDomain = true;
new net.TcpServer(8080, hdlr).run();
