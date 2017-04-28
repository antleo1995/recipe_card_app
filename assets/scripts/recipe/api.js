'use strict'
const config = require('../config')
const store = require('../store.js')

const addRecipe = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const getRecipes = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getRecipe = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// const signOut = () => {
//   return $.ajax({
//     url: config.apiOrigin + '/sign-out/' + store.user.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
// const changePassword = (data) => {
//   return $.ajax({
//     url: config.apiOrigin + '/change-password/' + store.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

module.exports = {
  addRecipe,
  getRecipes,
  getRecipe
}
