var express = require('express');
var runRemoteService = require('run-remote-service')({ pool: ["10000", "10001", "10002", "10003", "10004"] });
var server = {};

server.listen = function (opts) {
  var app = express();
  app.get('/', runRemoteService);
  app.get('/about', runRemoteService);
  app.get('/signup', runRemoteService);
  app.listen(9999);
};

module['exports'] = server;
server.listen();