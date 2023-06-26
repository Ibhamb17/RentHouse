import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Pembayaran from "./Pembayaran.js";

const Bank = db.define(
  "bank",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    namaBank: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nomorRekening: {
      type: DataTypes.STRING,
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

Bank.hasMany(Pembayaran, { foreignKey: "bankId" });

export default Bank;
