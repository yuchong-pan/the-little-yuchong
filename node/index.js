var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile('./src/pages/home/index.html');
});

app.listen(8080);
