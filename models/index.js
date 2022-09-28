const config = require("../config/config");
const Tool = require("././tool");
const Sequelize = require("sequelize");
const Tool_catergory = require("././tool_catergory");
const sequelize = new Sequelize(
    
    config.DB,
    config.USER,
    config.PASSWORD, {
        host: config.HOST,
        dialect: config.dialect,
        port: config.PORT
    });

sequelize
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize; 


db.tool_catergory = Tool_catergory(sequelize, Sequelize);
db.tool = Tool(sequelize, Sequelize, db.tool_catergory);


module.exports = db;



