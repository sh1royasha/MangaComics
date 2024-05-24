import { Sequelize } from "sequelize";
import {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } from './config.js'

export const sequelize = new Sequelize(DB_DATABASE,DB_USER,DB_PASSWORD,{
    host: DB_HOST,
    dialect: 'mssql',
    port: DB_PORT,
    dialectOptions:{
        options: {
            encrypt:false,
            trustServerCertificate: true,
        },
        define: {
            timestamps: false // Configuración para desactivar createdAt y updatedAt
        },
        query: {
            raw: true, // Evitar la conversión automática de columnas
        }
    }
})