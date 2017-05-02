'use strict'
const store = require('../store.js')
const api = require('./api.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')
const showRecipeTemplate = require('../templates/single-recipe.handlebars')
// const pageEvents = require('./events.js')
// const events = require('./events.js')

// function used to update the content div with recipes
const updateUiWithRecipes = function () {
  api.getRecipes()
    .then(recipeGetSuccess)
    .catch(recipeGetFailure)
}
const recipeSubmitSuccess = (data) => {
  $('#createRecipeModal').modal('toggle')
  $('#recipe-input-form')[0].reset()
  updateUiWithRecipes()
}
const recipeSubmitFailure = (error) => {
  return error
}
const recipeGetSuccess = (data) => {
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
}

const recipeGetFailure = (error) => {
  return error
}
const singleRecipeGetSuccess = (data) => {
  const showRecipeHtml = showRecipeTemplate({ recipe: data.recipe })
  $('.single-recipe-content').html(showRecipeHtml)
  $('#single-recipe').val('')
  store.recipeID = data.recipe.id
}

const singleRecipeGetFailure = (error) => {
  return error
}
const deleteRecipeSuccess = (data) => {
  $('#editRecipeModal').modal('toggle')
  updateUiWithRecipes()
}

const deleteReicpeFailure = (error) => {
  return error
}
const updateRecipeSuccess = (data) => {
  $('#recipe-update-form')[0].reset()
  $('.single-recipe-content').html('')
  $('#editRecipeModal').modal('toggle')
  updateUiWithRecipes()
}

const updateReicpeFailure = (error) => {
  return error
}

module.exports = {
  recipeSubmitSuccess,
  recipeSubmitFailure,
  recipeGetSuccess,
  recipeGetFailure,
  singleRecipeGetSuccess,
  singleRecipeGetFailure,
  deleteRecipeSuccess,
  deleteReicpeFailure,
  updateRecipeSuccess,
  updateReicpeFailure
}
