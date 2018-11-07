const axios = require('axios')
const baseURL = 'https://wiki-how-matheus-h23.firebaseio.com/'
const auth = 'L1DQMx3rrHpPtGtrOwlF0P3lvdLBU91c4YzdLYyg'

const list = async(key) => {
  const content = await axios.get(baseURL+key+'.json?auth='+auth)
  if (content.data) {
      const objetos = Object
                              .keys(content.data)
                              .map(key => {
                                  return {
                                    id: key,
                                    ...content.data[key]
                                  }
                              })
      return objetos
  }
  return []
}

const remove = async(key, id) => {
  await axios.delete(baseURL + key + '/' + id + '.json?auth='+auth)
  return true
}

const get = async(key, id) => {
  const content = await axios.get(baseURL + key + '/' + id + '.json?auth='+auth)
  return {
          id: id,
          ... content.data
        }
}

const update = async(key, id, data) => {
    await axios.put(baseURL + key + '/' + id + '.json?auth='+auth,data)
    return true
}

const create = async(key, data) => {
  await axios.post(baseURL + key + '.json?auth='+auth, data)
  return true
}


module.exports = {
  list, remove, get, update, create
}
