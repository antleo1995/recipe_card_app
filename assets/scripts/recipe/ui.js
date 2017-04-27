'use strict'
// const store = require('../store.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

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
  $('.content').append(showRecipesHtml)
}

const recipeGetFailure = (error) => {
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
  recipeGetFailure
}
