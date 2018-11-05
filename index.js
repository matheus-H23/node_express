'use strict'
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const port =  process.env.port || 3000

let i = 10;

app.get('/', function (req, res) {
        i++;
        res.render('pages/index', {i: i});
});

app.listen(port, function(){
    console.log('Wiki-How is running on port: ', port);
});
