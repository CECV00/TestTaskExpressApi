const express = require('express')
const app = express()
const sequelize = require('../src/config/dbConfig.js')
const bmtAccountRoutes = require('./views/BmtAccount')

// const dbCheking = require('../src/config/checkingDataBase.js')

function testSynchronizing () {
  sequelize.sync()
    .then(() => {
      console.log('Synchronizing model with the database')
    })
    .catch((error) => {
      console.error('Model synchronization error', error)
    })
}

async function testAuthenticate () {
  try {
    await sequelize.authenticate()
    console.log('All Good!')
  } catch (err) {
    console.error('All Bad!', err)
  }
}

// Middleware para permitir que Express procese JSON
app.use(express.json())

const PORT = process.env.PORT || 3000

// For testing purposes
app.get('/', (req, res) => {
  res.send('Page Home!')
})

// Utiliza las rutas de BmtAccount
app.use('/accounts', bmtAccountRoutes)

// dbCheking.testAuthenticate()
// testSynchronizing()
testAuthenticate()

app.listen(PORT, console.log(`Server Start in http://localhost:${PORT}`))

// app.listen(PORT, () => {
//   console.log(`API is listening on port ${PORT}`)
// })

/*
  - un middleware es un software que actúa como un intermediario entre dos aplicaciones, sistemas o componentes de software.
  - En el caso de Express.js, los middlewares son funciones que se ejecutan en el medio (middleware) del ciclo de solicitud y respuesta.
  - un middlewaves siempre tiene un next()
*/
