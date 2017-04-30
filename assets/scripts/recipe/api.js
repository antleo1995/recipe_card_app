'use strict'
const config = require('../config')
const store = require('../store.js')
// create action requires auth
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
// index action requires auth
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
// show action gets single recipe requires auth
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
// destroy action requires auth
const deleteRecipe = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const updateRecipe = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + store.recipeID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  addRecipe,
  getRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe
}
