var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile('./src/pages/home/index.html', { 'root' : __dirname });
});

app.use('/node_modules', express.static('node_modules'));

app.listen(8080);
