'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onRecipeSubmit = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.addRecipe(data)
    .then(ui.recipeSubmitSuccess)
    .catch(ui.recipeSubmitFailure)
}
// const onGetRecipe = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.getRecipes(data)
//     .then(ui.recipeGetSuccess)
//     .catch(ui.recipeGetFailure)
// }
const onGetSingleRecipe = function (event) {
  // const data = getFormFields(this)
  event.preventDefault()
  const data = $('#single-recipe').val()
  api.getRecipe(data)
    .then(ui.singleRecipeGetSuccess)
    .catch(ui.singleRecipeGetFailure)
}
const onDeleteRecipe = function (event) {
  // const data = getFormFields(this)
  event.preventDefault()
  if (confirm('Are you sure?') === true) {
    api.deleteRecipe()
      .then(ui.deleteRecipeSuccess)
      .catch(ui.deleteReicpeFailure)
    $('.single-recipe-content').html('')
  } else {
  }
}
const onEditRecipe = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updateRecipe(data)
  .then(ui.updateRecipeSuccess)
  .catch(ui.updateRecipeFailure)
}

const addHandlersRecipe = () => {
  // click handler for recipe forms
  $('#recipe-input-form').on('submit', onRecipeSubmit)
  $('#get-single-recipe').on('click', onGetSingleRecipe)
}

module.exports = {
  addHandlersRecipe,
  onRecipeSubmit,
  onGetSingleRecipe,
  onDeleteRecipe,
  onEditRecipe
}
