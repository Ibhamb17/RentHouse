import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Kontrakan from "./Kontrakan.js";

const GambarKontrakan = db.define(
  "gambarKontrakan",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    namaFile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pathFile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

GambarKontrakan.belongsTo(Kontrakan, { foreignKey: "kontrakanId" });

export default GambarKontrakan;
