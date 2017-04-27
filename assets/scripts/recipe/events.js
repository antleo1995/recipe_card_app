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
//
// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   api.signIn(data)
//   .then(ui.signInSuccess)
//   .catch(ui.signInFailure)
// }
// const onSignOut = function (event) {
//   event.preventDefault()
//   api.signOut()
//   .then(ui.signOutSuccess)
//   .catch(ui.signOutFailure)
// }
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//
//   api.changePassword(data)
// }

const addHandlersRecipe = () => {
  // click handler for recipe forms
  $('#recipe-input-form').on('submit', onRecipeSubmit)
}

module.exports = {
  addHandlersRecipe,
  onRecipeSubmit
}
