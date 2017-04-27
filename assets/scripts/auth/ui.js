'use strict'
const store = require('../store.js')

// const gamelogic = require('../gamelogic/game-logic.js')

const signUpSuccess = (data) => {
  console.log('it worked')
}

const signUpFailure = (error) => {
  return error
}
const signInSuccess = (data) => {
  store.user = data.user
  console.log('This is user: ', store.user)
}
const signInFailure = (error) => {
  console.log('Im a failure')
  return error
}
const signOutSuccess = () => {

}
const signOutFailure = (error) => {
  return error
}
const changePasswordSuccess = () => {

}
const changePasswordFailure = (error) => {
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
