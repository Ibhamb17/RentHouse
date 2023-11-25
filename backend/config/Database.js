import { Sequelize } from "sequelize";

const db = new Sequelize('rent_house', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
    timezone: "Asia/Jakarta",
  },
});

export default db;
