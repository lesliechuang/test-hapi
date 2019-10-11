const hapi = require('hapi');

class ServerHelper{
    constructor(){}

    static getInstance(){
        if(this._server === undefined || this._server === null){
            this._server =  hapi.server({
                host:'127.0.0.1',
                port:9000
            });
        }

        return this._server;
    }
}

module.exports = ServerHelper;