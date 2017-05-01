'use strict'
const store = require('../store.js')

// const gamelogic = require('../gamelogic/game-logic.js')

const signUpSuccess = (data) => {
  console.log('it worked')
  $('#signUpModal').modal('toggle')
  $('#sign-up')[0].reset()
}

const signUpFailure = (error) => {
  $('#signUpFailModal').modal('toggle')
  return error
}
const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in')[0].reset()
  $('.sign-out-button').show()
  $('#sign-in-div').hide()
  $('.create-reicpe').show()
  $('.edit-reicpe').show()
  $('.passwordChangeLink').show()
}
const signInFailure = (error) => {
  $('#signInFailModal').modal('toggle')
  return error
}
const signOutSuccess = () => {
  console.log('Signed out')
  $('.sign-out-button').hide()
  $('#sign-in-div').show()
  $('.create-reicpe').hide()
  $('.edit-reicpe').hide()
  $('.passwordChangeLink').hide()
}
const signOutFailure = (error) => {
  return error
}
const changePasswordSuccess = () => {
  $('#changePasswordSucceedModal').modal('toggle')
  $('#changePasswordModal').modal('toggle')
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
