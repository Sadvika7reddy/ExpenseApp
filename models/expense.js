const Sequelize=require('sequelize')

const sequelize=require('../util/database')

const Expenses=sequelize.define('expenses',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  amount:{
    type:Sequelize.DOUBLE,
    allowNull:false
  },
  table:{
    type:Sequelize.STRING,
    allowNull:false
  },
  dish:{
    type:Sequelize.STRING,
    allowNull:false
  }
})
 
module.exports = Expenses;