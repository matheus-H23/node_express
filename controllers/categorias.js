const md_categorias = require('../model/md_main');

const list = async (req, res) => {
    const categorias = await md_categorias.list('categorias')
    res.render('pages/categorias/list', { categorias})
}

const novaForm = (req, res) => {
    res.render('pages/categorias/nova')
  }

const create = async (req, res) => {
    await md_categorias.create('categorias', {
      categoria: req.body.categoria
    })
  res.redirect('/categorias')
}

const remove = async (req, res) => {
    await md_categorias.remove('categorias', req.params.id)
    await md_categorias.remove('publicacoes', req.params.id)
    res.redirect('/categorias')
}

const editarForm = async (req, res) => {
    const categoria = await md_categorias.get('categorias', req.params.id)
    res.render('pages/categorias/editar', {
        categoria
      })
}

const update =  async (req, res) => {
    await md_categorias.update('categorias', req.params.id, {
      categoria: req.body.categoria
  })
  res.redirect('/categorias')
}

  module.exports = {
      novaForm, create, remove, list, editarForm, update
  }