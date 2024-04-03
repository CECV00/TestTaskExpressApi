const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/dbConfig')

class BmtAccount extends Model {}

BmtAccount.init({
  nickName: DataTypes.STRING,
  email: DataTypes.STRING,
  birthdate: DataTypes.DATE,
  password: DataTypes.STRING
}, {
  sequelize,
  modelName: 'BmtAccount'
})

module.exports = BmtAccount
