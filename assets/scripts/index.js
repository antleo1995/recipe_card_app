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
  $(document).on('click', '.edit', pageEvents.onDeleteRecipe)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
