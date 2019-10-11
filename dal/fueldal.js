//const MysqlHelper = require('../helper/mysql');
//const mysql = MysqlHelper.getInstance();

//const MysqlPool = require('../helper/mysqlPool');
//const mysql = MysqlPool.getInstance();

const FuelUpModel = require('../models/fuelupModel');

//加油
class FuelDAL {
    // /*
    // *根据id查询加油记录
    // *@param id:加油记录id
    // *@return 加油记录
    // */
    // async getById(id){
    //     let sql = 'select * from fuelup_record where id = ?';
    //     let parameters = [id];
    //     let result = await mysql.excute(sql,parameters);

    //     return result;
    // }

    /*
   *添加加油记录
   *@param model:加油记录
   *@return 
   */
    async add(model) {
        model.AddTime = Date.now();
        model.Dr = 0;
        model.Ts = Date.now();
        let result = await FuelUpModel.create(model);
        return result;
    }

    /*
   *修改加油记录
   *@param model:加油记录
   *@return 
   */
    async update(model) {
        model.UpdateTime = Date.now();
        model.Ts = Date.now();
        let result = await model.save();
        return result;
    }

    /*
   *逻辑删除加油记录
   *@param model:加油记录
   *@return 
   */
    async logicDel(model) {
        model.Dr = 1;
        model.Ts = Date.now();
        let result = await model.save();
        return result;
    }

    /*
   *删除加油记录
   *@param model:加油记录
   *@return 
   */
    async del(model) {
        let result = await model.destroy();
        return result;
    }

    /*
   *根据id查询加油记录
   *@param id:加油记录id
   *@return 加油记录
   */
    async getById(id) {
        let result = await FuelUpModel.findOne({
            where: {
                Id: id
            }
        });

        return result;
    }

    /*
   *根据搜索条件查询加油记录
   *@param condition:搜索条件
   *@return 加油记录
   */
    async getByCondition(condition, orderby) {
        let result = await FuelUpModel.findAll({
            where: condition,
            order: orderby
        });

        return result;
    }

    /*
   *根据搜索条件分页查询加油记录
   *@param condition:搜索条件
   *@return 加油记录
   */
    async getByPage(condition, orderby, offset, limit) {
        let result = await FuelUpModel.findAll({
            where: condition,
            order: orderby,
            offset: offset,
            limit: limit
        });

        return result;
    }
}

module.exports = FuelDAL;