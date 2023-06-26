import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Kontrakan from "./Kontrakan.js";
import Customer from "./Customer.js";

const Review = db.define(
  "review",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    komentar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggalReview: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Review.belongsTo(Kontrakan, { foreignKey: "kontrakanId" });
Review.belongsTo(Customer, { foreignKey: "customerId" });

export default Review;
