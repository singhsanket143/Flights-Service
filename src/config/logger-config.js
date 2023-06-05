const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const modifySplatData = function(info){
    const splatInfo = info[Symbol.for('splat')];
    return (!splatInfo || splatInfo.length == 0) ? '' : JSON.stringify(splatInfo);
}

const customFormat = printf(info => {
    const metaDataStr = modifySplatData(info);
    return `${info.timestamp} : ${info.level}: ${info.message} ${metaDataStr}`;
});

const logger = createLogger({
    format: combine(
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        customFormat,
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combined.log'})
    ],
});

module.exports = logger;