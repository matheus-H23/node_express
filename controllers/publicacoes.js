const md_main = require('../model/md_main');

const list = async (req, res) => {
    const categoria = req.params.categoria
    const publicacoes = await md_main.list('publicacoes/'+ categoria)
    res.render('pages/publicacoes/list', { publicacoes, categoria })
}

const novaForm = async (req, res) => {
    const categorias = await md_main.list('categorias')
    res.render('pages/publicacoes/nova', {categorias})
  }

const create = async (req, res) => {
    await md_main.create('publicacoes/' + req.body.categoria, {
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
    })
    console.log('New post created')
  res.redirect('/publicacoes/categoria/'+req.body.categoria)
}

const remove = async (req, res) => {
    await md_main.remove('publicacoes/'+req.params.categoria, req.params.id)
    console.log('Post deleted')
    res.redirect('/publicacoes/categoria/'+ req.params.categoria)
}

const editarForm = async (req, res) => {
    const publicacao = await md_main.get('publicacoes/'+req.params.categoria, req.params.id)
    res.render('pages/publicacoes/editar', {
        publicacao,
        categoria: req.params.categoria
      })
}

const update =  async (req, res) => {
    await md_main.update('publicacoes/'+req.params.categoria, req.params.id, {
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
  })
  console.log('Post updated')
  res.redirect('/publicacoes/categoria/'+req.params.categoria)
}

  module.exports = {
      novaForm, create, remove, list, editarForm, update
  }