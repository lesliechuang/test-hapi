const ServerHelper = require('../helper/sever');
const server = ServerHelper.getInstance();
const logger = require('../helper/logger');
const fuelservice = require('../services/fuelservice');

server.route({
    method:'POST',
    path:'/fuel/add',
    handler:(request,h)=>{
        return fuelservice.add(request.payload);
    }
});

server.route({
    method:'POST',
    path:'/fuel/update',
    handler:(request,h)=>{
        return fuelservice.update(request.payload);
    }
});

server.route({
    method:'DELETE',
    path:'/fuel/logicdel',
    handler:(request,h)=>{
        return fuelservice.logicDel(request);
    }
});

server.route({
    method:'DELETE',
    path:'/fuel/del',
    handler:(request,h)=>{
        return fuelservice.del(request);
    }
});

server.route({
    method:'GET',
    path:'/fuel/getbyid',
    handler:(request,h)=>{
        return fuelservice.getById(request);
    }
});

server.route({
    method:'GET',
    path:'/fuel/getbyenterprise',
    handler:(request,h)=>{
        return fuelservice.getByEnterpriseId(request);
    }
});

server.route({
    method:'GET',
    path:'/fuel/getbypage',
    handler:(request,h)=>{
        return fuelservice.getByPage(request);
    }
});