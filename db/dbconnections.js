'use strict';

import { Sequelize } from 'sequelize';
import * as dotenv from "dotenv";
dotenv.config();
// const dbConnectionObj = new function() {

//     var applyTx = function(txFunction, arg) {
//         return this.db.transaction({
//             autocommit: false
//         }, function(t) {
//             if (arg)
//                 return txFunction(arg);
//             else
//                 return txFunction();
//         });
//     }
// }


const dbConnectionObj = new function() {
    var db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        // engine: config.db.mysqlEngine,
        // dialectOptions: {
        //     charset: 'utf8mb4',
        // },
        // pool: {
        //     max: config.db.maxConnectionLimit,
        //     min: config.db.minConnectionLimit,
        //     idle: config.db.idleTimeout
        // }
    });
    return db;
}
export default dbConnectionObj;

