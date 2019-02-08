"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res, next) {
    res.send('Tour Booking API');
});
app.get('/tours', function (req, res, next) {
    res.send('Geta a list of tours...');
});
app.post('/tours', function (req, res, next) {
    res.send('Add a new tour....');
});
app.listen(process.env.PORT || 8091, function () { return console.log('Server started...TEST'); });
