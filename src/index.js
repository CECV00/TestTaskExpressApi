const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('./config/dbConfig')

const v1Router = require('./v1/routers/index.js')

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

async function testAuthenticate () {
  try {
    await sequelize.authenticate()
    console.log('Conexión exitosa a la base de datos!')
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err)
  }
}
testAuthenticate()

app.use('/api/v1/', v1Router)

// link for test: http://localhost:3000/
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la página de inicio!')
})

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})

/*
  Apuntes:

  - Notas:

  const viewsBmtAccounts = require('./views/viwesBmtAccount')

*/
