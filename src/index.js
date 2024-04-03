// index.js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('./config/dbConfig')
const viewsBmtAccounts = require('./views/viwesBmtAccount')

const PORT = process.env.PORT || 3000

// Middlewares
app.use(bodyParser.json())

// Conexión a la base de datos
async function testAuthenticate () {
  try {
    await sequelize.authenticate()
    console.log('Conexión exitosa a la base de datos!')
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err)
  }
}
testAuthenticate()

// Rutas
app.use('/accounts', viewsBmtAccounts)

// Página de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la página de inicio!')
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})

/*
  Apuntes:

  - Notas:

*/
