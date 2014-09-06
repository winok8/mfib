/**
 * 实现路由和模块的分离
 */
var http = require('http');
var mq = require('mq');
var fs = require('fs');

var routing = new mq.Routing({});
routing.append('^/assert(/.*)$', http.fileHandler('assert/'));

/**
 * 从controllers文件夹读取模块，并自动注入到routing中
 */
var flist = fs.readdir('controllers');
var regex = /([^\.]+)\.js/;
for (var i = 0; i < flist.length; i++) {

	var matchs = regex.exec(flist[i].name);
	if (flist[i].isFile && matchs) {
		var contr = require('controllers/' + matchs[1] + '.js');
		for (var name in contr.actions) {
			routing.append('^/'+matchs[1]+'/'+name, contr.actions[name]);
		}
	}
}

module.exports = new http.Handler(routing);
