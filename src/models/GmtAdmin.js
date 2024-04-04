// GmtAdmin.js
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/dbConfig')

class GmtAdmin extends Model {}

GmtAdmin.init({
  nickName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'GmtAdmin', // Asegúrate de que el nombre del modelo coincida con el nombre de la tabla en tu base de datos
  tableName: 'GmtAdmins' // Asegúrate de que tableName coincida con el nombre de la tabla en tu base de datos
})

module.exports = GmtAdmin

// 'use strict'
// const { Model, DataTypes } = require('sequelize')
// const sequelize = require('../config/dbConfig')

// class GmtAdmin extends Model {}

// GmtAdmin.init({
//   nickName: DataTypes.STRING,
//   email: DataTypes.STRING,
//   password: DataTypes.TEXT
// }, {
//   sequelize,
//   modelName: 'GmtAdmin',
//   tableName: 'GmtAdmins'
// })

// module.exports = { GmtAdmin }

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// 'use strict'

// const { Model } = require('sequelize')

// module.exports = (sequelize, DataTypes) => {
//   class GmtAdmin extends Model {
//     static associate (models) {
//     }
//   }
//   GmtAdmin.init({
//     nickName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'GmtAdmin'
//   })
//   return GmtAdmin
// }

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/*

  Developer's Notes:

  - Se intenta por Segunda vez el uso de la herramienta Sequelize-CLI

  - la herramienta no crea el model bajo el standar y recomendacion de sequelize.
    - los modelos que genera son muy simplistas y ambiguos
    - las tablas son plurales y los modelos singulares

*/
