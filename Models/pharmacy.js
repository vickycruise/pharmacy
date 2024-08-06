'use strict';

import { Sequelize as sequelize } from 'sequelize';
import  db from "../db/dbconnections.js";

const pharmacy = db.define("pharmacy", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pharmacy_name: {
        type: sequelize.STRING,
        allowNull: true
    },
    pharmacy_id: {
        type: sequelize.STRING,
        allowNull: true
    },
    org_id: {
        type: sequelize.STRING,
        allowNull: true
    },
    org_name: {
        type: sequelize.STRING,
        allowNull: true
    },
    manager_id: {
        type: sequelize.STRING,
        allowNull: true
    },
    manager_name: {
        type: sequelize.STRING,
        allowNull: true
    },
    pharmacy_address: {
        type: sequelize.STRING,
        allowNull: true
    },
    activated_on: {
        type: sequelize.DATE,
        allowNull: true
    },
    is_active: {
        type: sequelize.TINYINT,
        allowNull: true
    }
    
}, {
    timestamps: false,
    tableName: 'pharmacy',
    modelName: 'pharmacy' // Explicitly specify the model name
});
export default pharmacy;
