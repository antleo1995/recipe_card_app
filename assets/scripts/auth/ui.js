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
}
const signInFailure = (error) => {
  $('#signInFailModal').modal('toggle')
  return error
}
const signOutSuccess = () => {
  console.log('Signed out')
}
const signOutFailure = (error) => {
  return error
}
const changePasswordSuccess = () => {
  $('#changePasswordSucceedModal').modal('toggle')
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
