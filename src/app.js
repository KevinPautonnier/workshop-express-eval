var express = require('express')
var fs = require('fs')

const app = express();
var numbers = fs.readFileSync('src/numbers.txt').toString();

numbers = numbers.split("\r\n").reverse().slice(1).reverse().join(', ');

app.get('/bingo', function(req, res) {
    res.end(numbers)
  })

module.exports = app;