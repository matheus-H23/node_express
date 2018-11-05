'use strict'
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const port =  process.env.port || 3000

let i = 10;

const resolver = (req, res) => {
  res.send('Olá veio');
}

app.get('/', resolver);

app.listen(port, (err) => {
  if (err) {
    console.log('error')
  } else {
    console.log('Wiki-How is running on port: ', port);
  }

});
