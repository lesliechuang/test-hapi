const mysql = require('mysql');
const config = require('../config.json');
const util = require('util');

class MysqlPool {
    constructor() {
        this._pool = mysql.createPool(config.dbconnect);
        this._getConnection = util.promisify(this._pool.getConnection).bind(this._pool);
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new MysqlPool();
        }

        return this._instance;
    }

    /*
   *执行sql语句
   *@param sql:sql语句
   *@param parameters:sql语句参数
   */
    async excute(sql, parameters) {
        await this.connect();
        var result = await this._query(sql, parameters);
        this._connection.release();
        return result;
    }

    async connect(){
        this._connection = await this._getConnection();
        this._query = util.promisify(this._connection.query).bind(this._connection);
    }
}

module.exports = MysqlPool;