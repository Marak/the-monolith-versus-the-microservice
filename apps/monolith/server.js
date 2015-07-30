var express = require('express');
var app = express();

app.get('/', require('../routes/index'));
app.get('/about', require('../routes/about'));
app.get('/signup', require('../routes/signup'));

app.listen(9999);