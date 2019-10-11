const ServerHelper = require('./helper/sever');
const server = ServerHelper.getInstance();
const logger = require('./helper/logger');
const index = require('./routers/index');

(async()=>{
    await server.start();
    console.log('启动服务器 127.0.0.1:9000');
    logger.info('启动服务器 127.0.0.1:9000');
})();

process.on('unhandledRejection', (err) => {
    console.error(err);
    logger.error(err);
});

