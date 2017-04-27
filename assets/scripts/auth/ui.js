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

}
const signInFailure = (error) => {

}
const signOutSuccess = () => {


}
const signOutFailure = (error) => {

}
const changePasswordSuccess = () => {

}
const changePasswordFailure = (error) => {

  return error
}
module.exports = {

}
