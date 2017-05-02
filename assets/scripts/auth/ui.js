'use strict'
const store = require('../store.js')
const api = require('../recipe/api.js')
const ui = require('../recipe/ui.js')

const signUpSuccess = (data) => {
  // closes sign up modal
  $('#signUpModal').modal('toggle')
  // resets sign up form
  $('#sign-up')[0].reset()
}

const signUpFailure = (error) => {
  // closes sign up modal
  $('#signUpFailModal').modal('toggle')
  // resets sign up form
  $('#sign-up')[0].reset()
  return error
}
const signInSuccess = (data) => {
  // stores user data on sign on
  store.user = data.user
  // resets sign up form
  $('#sign-in')[0].reset()
  // the next lines handle showing and hiding
  $('.sign-out-button').show()
  $('#sign-in-div').hide()
  $('#greeting-content').hide()
  // rather than show/hide I opted for a pointer events - none
  // as a user could still click on hidden divs
  // removes the hidden class on sign in
  $('.createRecipe').removeClass('hidden')
  $('.editRecipe').removeClass('hidden')
  $('.changePassword').removeClass('hidden')
  // retrieves user's recipes on sign on
  api.getRecipes(data)
    .then(ui.recipeGetSuccess)
    .catch(ui.recipeGetFailure)
}
const signInFailure = (error) => {
  // closes sign in modal on failure
  $('#signInFailModal').modal('toggle')
  // clears sign in form fields
  $('#sign-in')[0].reset()
  return error
}
const signOutSuccess = () => {
  // shows and hides necessary elements
  $('.sign-out-button').hide()
  $('#sign-in-div').show()
  $('#greeting-content').show()
  $('.createRecipe').addClass('hidden')
  $('.editRecipe').addClass('hidden')
  $('.changePassword').addClass('hidden')
  // clears the content so no recipes are visible
  $('.content').html('')
}
const signOutFailure = (error) => {
  return error
}
const changePasswordSuccess = () => {
  // closes password change modal
  $('#changePasswordSucceedModal').modal('toggle')
  // shows a success modal
  $('#changePasswordModal').modal('toggle')
  // clears change passwor form
  $('#change-password')[0].reset()
}
const changePasswordFailure = (error) => {
  // change password failure modal show
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
