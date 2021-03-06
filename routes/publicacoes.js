const express =  require('express')
const router = express.Router()
const controller = require('../controllers/publicacoes')

router.get ('/categoria/:categoria', controller.list)

router.get('/nova', controller.novaForm)

router.post('/nova', controller.create)

router.get ('/excluir/:categoria/:id', controller.remove)

router.get('/editar/:categoria/:id', controller.editarForm)

router.post('/editar/:categoria/:id', controller.update)

module.exports = router
