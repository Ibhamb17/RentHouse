import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Kontrakan from "./Kontrakan.js";

const Fasilitas = db.define(
  "fasilitas",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nama: {
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
  },
  {
    freezeTableName: true,
  }
);

Fasilitas.belongsTo(Kontrakan, { foreignKey: "kontrakanId" });

export default Fasilitas;
