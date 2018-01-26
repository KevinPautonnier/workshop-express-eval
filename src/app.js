var express = require('express')
var fs = require('fs')

const app = express();
var numbers = fs.readFileSync('src/numbers.txt').toString();

numbers = numbers.split("\r\n").reverse().slice(1).reverse().join(', ');

app.get('/bingo', function(req, res) {
    if (req.query.mynumbers != undefined){
        if(numbers.split(', ').join(',') == req.query.mynumbers){
            res.send('Bingo')
        }
        else{
            res.send('The bingo game is already started, sorry your numbers doesn\'t match with known numbers '+numbers+' so you can not say Bingo')
        }
    }
    else{
        res.send('The bingo game is already started and known numbers are '+numbers)
    }
  })

module.exports = app;