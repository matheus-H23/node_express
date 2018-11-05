'use strict'
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const port =  process.env.port || 3000


app.get('/', function (req, res) {
        res.render('index');
});

app.listen(port, function(){
    console.log('Wiki-How is running on port: ', port);
});
