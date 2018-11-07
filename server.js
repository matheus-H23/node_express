//import default modules
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// import person modules
const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')


//port definition
const port =  process.env.port || 3000

//set app properties

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

//main route
app.get('/', (req, res) => {
  res.render('pages/index')
})

// categories route
app.use('/categorias',categorias)
app.use('/publicacoes',publicacoes)

// start listening
app.listen(port, (err) => {
  if (err) {
    console.log('error')
  } else {
    console.log('Wiki-How is running on port: ', port)
  }

})
