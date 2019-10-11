const log4js = require('log4js');

log4js.configure({
    //appenders: { cheese: { type: 'file', filename: 'logs/cheese.log' } },
    appenders:{
        cheese: {
            // 设置类型为 dateFile
            type: 'dateFile',
            // 配置文件名为 cheese.log
            filename: 'logs/cheese.log',
            // 指定编码格式为 utf-8
            encoding: 'utf-8',
            //每个文件的大小,10M
            maxLogSize:10485760,
            // 配置 layout，此处使用自定义模式 pattern
            layout: {
                type: "pattern",
                // 配置模式，下面会有介绍
                pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}'
            },
            // 日志文件按日期（天）切割
            pattern: "-yyyy-MM-dd",
            // 回滚旧的日志文件时，保证以 .log 结尾 （只有在 alwaysIncludePattern 为 false 生效）
            keepFileExt: true,
            // 输出的日志文件名是都始终包含 pattern 日期结尾
            alwaysIncludePattern: true,
        },
    },
    categories: { default: { appenders: ['cheese'], level: 'trace' } }
})
const logger = log4js.getLogger('cheese');

class LoggerHelper {
    static trace(msg) {
        logger.trace(msg);
    }

    static debug(msg) {
        logger.debug(msg);
    }

    static info(msg) {
        logger.info(msg);
    }

    static warn(msg) {
        logger.warn(msg);
    }

    static error(msg) {
        logger.error(msg);
    }

    static fatal(msg) {
        logger.fatal(msg);
    }
}


module.exports = LoggerHelper;