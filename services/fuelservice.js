const logger = require('../helper/logger');
const FuelDAL = require('../dal/fueldal');
const fueldal = new FuelDAL();

class FuelService {
    static async getByPage(request) {
        let condition = { EnterpriseId: request.query.enterpriseId, Dr: 0  };
        let orderby = [['AddTime', 'DESC']];
        return await fueldal.getByPage(condition, orderby, (parseInt(request.query.page) - 1) * 2, 2);
    }

    static async getByEnterpriseId(request) {
        try{
            let condition = { EnterpriseId: parseInt(request.query.enterpriseId), Dr: 0};
            let orderby = [['AddTime', 'DESC']];
            return await fueldal.getByCondition(condition, orderby);
        }catch(err){
            logger.error(err);
        }   
    }

    static async getById(request) {
        return await fueldal.getById(request.query.id);
    }

    static async add(request) {
        try {
            logger.info(request);
            var model = {
                Id:request.Id,
                EnterpriseId: request.EnterpriseId,
                UserId: request.UserId,
                VehicleId: request.VehicleId,
                Date: request.Date,
                Cost: request.Cost,
                FuelType: request.FuelType,
                FuelPrice: request.FuelPrice,
                FuelTotal: request.FuelTotal,
                CurrentMileage: request.CurrentMileage,
                SurplusMileage: request.SurplusMileage,
                Remarks: request.Remarks,
                Accessory: request.Accessory,
                StationName: request.StationName,
                StationLon: request.StationLon,
                StationLat: request.StationLat,
                StationDesc: request.StationDesc
            }
            return await fueldal.add(request);
        } catch (err) {
            logger.error(err);
        }
    }

    static async update(request) {
        try{
            var model = await fueldal.getById(request.Id);
            model.EnterpriseId = request.EnterpriseId;
            model.UserId = request.UserId;
            model.VehicleId = request.VehicleId;
            model.Date = request.Date;
            model.Cost = request.Cost;
            model.FuelType = request.FuelType;
            model.FuelPrice = request.FuelPrice;
            model.FuelTotal = request.FuelTotal;
            model.CurrentMileage = request.CurrentMileage;
            model.SurplusMileage = request.SurplusMileage;
            model.Remarks = request.Remarks;
            model.Accessory = request.Accessory;
            model.StationName = request.StationName;
            model.StationLon = request.StationLon;
            model.StationLat = request.StationLat;
            model.StationDesc = request.StationDesc;
    
            return await fueldal.update(model);
        }catch (err) {
            logger.error(err);
        }
    }

    static async logicDel(request) {
        var model = await fueldal.getById(request.query.id);
        return await fueldal.logicDel(model);
    }

    static async del(request) {
        try{
            var model = await fueldal.getById(request.query.id);
            return await fueldal.del(model);
        }catch(err){
            logger.error(err);
        }
        
    }
}

module.exports = FuelService;