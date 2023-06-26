import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Owner from "./Owner.js";

const Kontrakan = db.define(
  "kontrakan",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    namaKontrakan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    alamatKontrakan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    availability: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    price: {
      type: DataTypes.INTEGER   ,
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

Kontrakan.belongsTo(Owner, { foreignKey: "ownerId" });

export default Kontrakan;
