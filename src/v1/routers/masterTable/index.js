const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
  // link for test: http://localhost:3000/api/v1/masterTable
  res.send(`<h1> estas en ${req.baseUrl}</h1>`)
})

module.exports = router

/*

  Notes:

  - Aqui debe empezar la app, creado cuenta y empezando el proyecto

*/
