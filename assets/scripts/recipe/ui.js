'use strict'
const store = require('../store.js')
const api = require('./api.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')
const showRecipeTemplate = require('../templates/single-recipe.handlebars')

// function used to update the content div with recipes
const updateUiWithRecipes = function () {
  api.getRecipes()
    .then(recipeGetSuccess)
    .catch(recipeGetFailure)
}
const recipeSubmitSuccess = (data) => {
  // closes recipe creation form/modal
  $('#createRecipeModal').modal('toggle')
  // resets form
  $('#recipe-input-form')[0].reset()
  // updates content div
  updateUiWithRecipes()
}
const recipeSubmitFailure = (error) => {
  // needs a modal
  return error
}
const recipeGetSuccess = (data) => {
  // runs handlebars and sets content to variable
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  // loads conent div with return from handlebars
  if (data.recipes.length === 0) {
    $('.content').html('<p>Please create a recipe</p>')
    $('.editRecipe').addClass('hidden')
  } else {
    $('.editRecipe').removeClass('hidden')
    $('.content').html(showRecipesHtml)
  }
}

const recipeGetFailure = (error) => {
  // needs modal
  return error
}
const singleRecipeGetSuccess = (data) => {
  // runs handlebars and sets content to variab
  // uses RECIPE singular as this is what is returned from API
  // for a single recipe
  const showRecipeHtml = showRecipeTemplate({ recipe: data.recipe })
  // loads content div with return from handlbars
  $('.single-recipe-content').html(showRecipeHtml)
  // clears the text input
  $('#single-recipe').val('')
  // stores the recipe ID for later use
  store.recipeID = data.recipe.id
}

const singleRecipeGetFailure = (error) => {
  return error
}
const deleteRecipeSuccess = (data) => {
  // closes edit recipe modal
  $('#editRecipeModal').modal('toggle')
  // updates the content div
  updateUiWithRecipes()
}

const deleteReicpeFailure = (error) => {
  // needs modal
  return error
}
const updateRecipeSuccess = (data) => {
  // not sure this line does anything
  // had a hard time clearing this form for some reason
  $('#recipe-update-form')[0].reset()
  // clears the content in the modal
  // employed as a reasonable work around since the
  // reset form was not working
  $('.single-recipe-content').html('')
  // closes edit recipe modal
  $('#editRecipeModal').modal('toggle')
  // updates the content div
  updateUiWithRecipes()
}

const updateReicpeFailure = (error) => {
  // needs modal
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
