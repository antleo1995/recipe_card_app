'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const pageEvents = require('./recipe/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  pageEvents.addHandlersRecipe()
  $(document).on('click', '.delete', pageEvents.onDeleteRecipe)
  $(document).on('submit', '.recipe-update-form', pageEvents.onEditRecipe)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
