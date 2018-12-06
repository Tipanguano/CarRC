var express = require('express'),
    app = express(),
    port = process.env.PORT || 3500,
    Task = require('./apiService/model/motorModel'),
    bodyParse = require('body-parser');

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var routes = require('./apiService/routes/motorRoute');
var routes2 = require('./apiService/routes/carroRoute');
routes(app);
routes2(app);
app.listen(port);
console.log('Ok corriendo puerto:' + port);