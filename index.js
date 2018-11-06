const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

const port =  process.env.port || 3000

const resolver = async (req, res) => {
  const content = await axios.get('https://wiki-how-matheus-h23.firebaseio.com/teste.json')
  console.log(content.data)
  res.render('pages/index', {i: content.data})
}

app.get('/', resolver)

app.use('/categorias',categorias)

app.listen(port, (err) => {
  if (err) {
    console.log('error')
  } else {
    console.log('Wiki-How is running on port: ', port)
  }

})
