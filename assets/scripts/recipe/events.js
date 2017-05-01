'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')
//
const onRecipeSubmit = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('recipe submit')
  api.addRecipe(data)
    .then(ui.recipeSubmitSuccess)
    .catch(ui.recipeSubmitFailure)
}
const onGetRecipe = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('recipes get')
  api.getRecipes(data)
    .then(ui.recipeGetSuccess)
    .catch(ui.recipeGetFailure)
}
const onGetSingleRecipe = function (event) {
  // const data = getFormFields(this)
  event.preventDefault()
  console.log('get single recipe')
  const data = $('#single-recipe').val()
  api.getRecipe(data)
    .then(ui.singleRecipeGetSuccess)
    .catch(ui.singleRecipeGetFailure)
}
const onDeleteRecipe = function (event) {
  // const data = getFormFields(this)
  event.preventDefault()
  api.deleteRecipe()
    .then(ui.deleteRecipeSuccess)
    .catch(ui.deleteReicpeFailure)
  $('.single-recipe-content').html('')
}
const onEditRecipe = function (event) {
  console.log('clicked onEditRecipe')
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.updateRecipe(data)
  .then(ui.updateRecipeSuccess)
  .catch(ui.updateRecipeFailure)
}

const addHandlersRecipe = () => {
  // click handler for recipe forms
  $('#recipe-input-form').on('submit', onRecipeSubmit)
  $('#get-recipes').on('click', onGetRecipe)
  $('#get-single-recipe').on('click', onGetSingleRecipe)
}

module.exports = {
  addHandlersRecipe,
  onRecipeSubmit,
  onGetSingleRecipe,
  onDeleteRecipe,
  onEditRecipe
}
