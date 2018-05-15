var coverage = require('istanbul-middleware');
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'js/app.js')));

app.use('/coverage', coverage.createHandler());

app.listen(8082);