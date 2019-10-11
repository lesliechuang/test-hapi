const mysql = require('mysql');
const config = require('../config.json');
const util = require('util');

//const connection = mysql.createConnection(config.dbconnect);
// var connection = mysql.createConnection({     
//     host     : '10.1.11.126',       
//     user     : 'manager',              
//     password : 'Asdf1234',       
//     port: '3306',                   
//     database: 'vehicle_affair' 
//   }); 

//var query = util.promisify(connection.query).bind(connection);

class MysqlHelper{
    constructor(){
        this._connection = mysql.createConnection(config.dbconnect);
        this._query = util.promisify(this._connection.query).bind(this._connection);
    }

    static getInstance(){
        if(!this._db){
            this._db = new MysqlHelper();
        }

        return this._db;
    }

    /*
    *执行sql语句
    *@param sql:sql语句
    *@param parameters:sql语句参数
    */
    async excute(sql,parameters){
        this.connect();
        var result = await this._query(sql,parameters);
        this.disconnect();
        return result;
    }

    /*
    *连接数据库
    */
    connect(){
        this._connection = mysql.createConnection(config.dbconnect);
        this._connection.connect();
    }

    /*
    *断开数据库连接
    */
    disconnect(){
        this._connection.end();
    }
}

module.exports = MysqlHelper;
