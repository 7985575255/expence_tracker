const Sequelize=require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const userdb=new Sequelize(process.env.SCHEMA,process.env.USERNAM,process.env.PASSWORD,{
    dialect: 'mysql', host: process.env.HOST});
    module.exports=userdb;