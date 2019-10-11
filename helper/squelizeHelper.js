const Sequelize = require('sequelize');
const config = require('../config.json');

var sequelize = new Sequelize(config.db,config.username,config.password,{
    host:config.host,
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        idle:30000
    }
});

module.exports = sequelize;