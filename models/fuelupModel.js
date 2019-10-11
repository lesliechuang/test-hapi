const Sequelize = require('sequelize');
const sequelizeHelper = require('../helper/squelizeHelper');

var FuelUpModel = sequelizeHelper.define('fuelup',{
    Id:{
        type:Sequelize.BIGINT,
        primaryKey:true
    },
    EnterpriseId:Sequelize.STRING(36),
    UserId:Sequelize.STRING(36),
    VehicleId:Sequelize.STRING(36),
    Date:Sequelize.DATE,
    Cost:Sequelize.DECIMAL(8,2),
    FuelType:Sequelize.INTEGER,
    FuelPrice:Sequelize.DECIMAL(8,2),
    FuelTotal:Sequelize.DECIMAL(8,2),
    CurrentMileage:Sequelize.INTEGER,
    SurplusMileage:Sequelize.INTEGER,
    Remarks:Sequelize.STRING(200),
    Accessory:Sequelize.STRING(900),
    StationName:Sequelize.STRING(50),
    StationLon:Sequelize.STRING(50),
    StationLat:Sequelize.STRING(50),
    StationDesc:Sequelize.STRING(200),
    AddTime:Sequelize.DATE,
    UpdateTime:Sequelize.DATE,
    Dr:Sequelize.INTEGER,
    Ts:Sequelize.DATE
},{
    timestamps: false,
    tableName:'fuelup_record'
});

module.exports = FuelUpModel;