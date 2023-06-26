import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Kontrakan from "./Kontrakan.js";
import Customer from "./Customer.js";

const Like = db.define(
  "like",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Like.belongsTo(Kontrakan, { foreignKey: "kontrakanId" });
Like.belongsTo(Customer, { foreignKey: "customerId" });

export default Like;
