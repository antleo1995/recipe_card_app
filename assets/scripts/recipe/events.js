'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onRecipeSubmit = function (event) {
  // gets form fields and passes to create API call
  const data = getFormFields(this)
  event.preventDefault()
  api.addRecipe(data)
    .then(ui.recipeSubmitSuccess)
    .catch(ui.recipeSubmitFailure)
}

const onGetSingleRecipe = function (event) {
  event.preventDefault()
  // gets the id of the recipe to pass to GET api call
  const data = $('#single-recipe').val()
  api.getRecipe(data)
    .then(ui.singleRecipeGetSuccess)
    .catch(ui.singleRecipeGetFailure)
}
const onDeleteRecipe = function (event) {
  event.preventDefault()
  // prompts for confirmation before delete is ran
  if (confirm('Are you sure?') === true) {
    api.deleteRecipe()
      .then(ui.deleteRecipeSuccess)
      .catch(ui.deleteReicpeFailure)
  // clears the content div after deletion
    $('.single-recipe-content').html('')
  } else {
    // else do nothing
  }
}
const onEditRecipe = function (event) {
  // gets form data to pass to PATCH API call
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

// function not used but leaving in case I need to add back at a later date
// const onGetRecipe = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.getRecipes(data)
//     .then(ui.recipeGetSuccess)
//     .catch(ui.recipeGetFailure)
// }
module.exports = {
  addHandlersRecipe,
  onRecipeSubmit,
  onGetSingleRecipe,
  onDeleteRecipe,
  onEditRecipe
}
