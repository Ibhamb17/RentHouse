import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Kontrakan from "./Kontrakan.js";

const HargaKontrakan = db.define(
  "harga_kontrakan",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

HargaKontrakan.belongsTo(Kontrakan, { foreignKey: "kontrakanId" });

export default HargaKontrakan;
