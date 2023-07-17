const Sequelize=require('sequelize');
console.log(process.env.TABLE);
const userdb=new Sequelize("expnece","root","Av1122",{
    dialect: 'mysql', host: 'localhost'});

    module.exports=userdb;