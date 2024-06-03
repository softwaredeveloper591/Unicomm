const mysql = require("mysql2");
const dotenv = require('dotenv');
const path = require('path');
const Sequlize = require("sequelize");

dotenv.config({ path: './.env'});

const sequelize= new Sequlize("mysql://avedntg92slvoyfe:lribohwtt7ua44hh@uf63wl4z2daq9dbb.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/etznmgcgw16ta6zw",
{
    dialect: "mysql",
    logging: false
});

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log("mysql server bağlantısı yapıldı.");
    } catch (error) {
        console.log("bağlantı hatası", error);
    }
}
    
connectDB();
module.exports= sequelize;