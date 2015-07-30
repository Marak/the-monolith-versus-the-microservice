var argv = require('minimist')(process.argv.slice(2));

var port = argv.p || 10000;

var runService = require('run-service');
var express = require('express');

var worker = {};
module['exports'] = worker;

worker.start = function (opts, cb) {
  var app = express();
  app.post('/', runService);
  app.post('/about', runService);
  app.post('/signup', runService);
  app.listen(port);
};

worker.start({}, function(){});