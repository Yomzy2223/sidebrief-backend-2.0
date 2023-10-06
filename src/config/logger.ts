const winston = require("winston");
const WinstonCloudwatch = require("winston-cloudwatch");

const stagingLogConfiguration = {
  transports: [
    new winston.transports.File({
      filename: "./logger.log",
    }),
  ],
  format: winston.format.combine(
    winston.format.label({
      label: `Label`,
    }),
    winston.format.timestamp({
      format: "DD-MMM-YYYY HH:mm:ss",
    }),
    winston.format.printf(
      (info) =>
        `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
    )
  ),
};

const productionLogConfiguration = {
  transports: [
    new WinstonCloudwatch({
      logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
      logStreamName: process.env.CLOUDWATCH_STREAM_NAME,
      awsRegion: process.env.CLOUDWATCH_AWS_REGION,
      awsOptions: {
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY,
          secretAccessKey: process.env.AWS_KEY_SECRET,
        },
        region: process.env.CLOUDWATCH_AWS_REGION,
      },
    }),
  ],
  format: winston.format.combine(
    winston.format.label({
      label: `Label`,
    }),
    winston.format.timestamp({
      format: "DD-MMM-YYYY HH:mm:ss",
    }),
    winston.format.printf(
      (info) =>
        `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
    )
  ),
};

const logger =
  process.env.NODE_ENV === "staging"
    ? winston.createLogger(stagingLogConfiguration)
    : winston.createLogger(productionLogConfiguration);

export default logger;

//the server should be able to know different evironments
