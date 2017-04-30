'use strict'
const store = require('../store.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')
const showRecipeTemplate = require('../templates/single-recipe.handlebars')
// const pageEvents = require('./events.js')
// const events = require('./events.js')

const recipeSubmitSuccess = (data) => {
  console.log('it worked')
  $('#recipe-input-form')[0].reset()
}

const recipeSubmitFailure = (error) => {
  return error
}
const recipeGetSuccess = (data) => {
  console.log(data.recipes)
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
}

const recipeGetFailure = (error) => {
  return error
}
const singleRecipeGetSuccess = (data) => {
  const showRecipeHtml = showRecipeTemplate({ recipe: data.recipe })
  $('.single-recipe-content').html(showRecipeHtml)
  // $('.recipeUpdate')('submit', pageEvents.onEditRecipe)
  console.log(data.recipe.id)
  store.recipeID = data.recipe.id
}

const singleRecipeGetFailure = (error) => {
  return error
}
const deleteRecipeSuccess = (data) => {
  console.log('delete success ran')
}

const deleteReicpeFailure = (error) => {
  return error
}
const updateRecipeSuccess = (data) => {
  console.log('update success ran')
}

const updateReicpeFailure = (error) => {
  return error
}
// const signInSuccess = (data) => {
//   store.user = data.user
//   console.log('This is user: ', store.user)
// }
// const signInFailure = (error) => {
//   console.log('Im a failure')
//   return error
// }
// const signOutSuccess = () => {
//   console.log('Signed out')
// }
// const signOutFailure = (error) => {
//   return error
// }
// const changePasswordSuccess = () => {
//
// }
// const changePasswordFailure = (error) => {
//   return error
// }
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
