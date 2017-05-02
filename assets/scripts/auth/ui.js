'use strict'
const store = require('../store.js')
const api = require('../recipe/api.js')
const ui = require('../recipe/ui.js')
// const gamelogic = require('../gamelogic/game-logic.js')

const signUpSuccess = (data) => {
  console.log('it worked')
  $('#signUpModal').modal('toggle')
  $('#sign-up')[0].reset()
}

const signUpFailure = (error) => {
  $('#signUpFailModal').modal('toggle')
  $('#sign-up')[0].reset()
  return error
}
const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in')[0].reset()
  $('.sign-out-button').show()
  $('#sign-in-div').hide()
  $('.createRecipe').removeClass('hidden')
  $('.editRecipe').removeClass('hidden')
  $('.changePassword').removeClass('hidden')
  api.getRecipes(data)
    .then(ui.recipeGetSuccess)
    .catch(ui.recipeGetFailure)
}
const signInFailure = (error) => {
  $('#signInFailModal').modal('toggle')
  $('#sign-in')[0].reset()
  return error
}
const signOutSuccess = () => {
  console.log('Signed out')
  $('.sign-out-button').hide()
  $('#sign-in-div').show()
  $('.createRecipe').addClass('hidden')
  $('.editRecipe').addClass('hidden')
  $('.changePassword').addClass('hidden')
  $('.content').html('')
}
const signOutFailure = (error) => {
  return error
}
const changePasswordSuccess = () => {
  $('#changePasswordSucceedModal').modal('toggle')
  $('#changePasswordModal').modal('toggle')
  $('#change-password')[0].reset()
}
const changePasswordFailure = (error) => {
  $('#changePasswordFailedModal').modal('toggle')
  return error
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
