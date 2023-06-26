import {Sequelize} from "sequelize";

const db = new Sequelize('rent_house', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;