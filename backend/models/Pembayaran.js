import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Booking from "./Booking.js";

const Pembayaran = db.define(
  "Pembayaran",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    rekeningcustomer: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    rekeningowner: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
    total_pembayaran: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status_pembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "belum bayar",
      validate: {
        isIn: [["belum bayar", "confirmed"]],
      },
    },
    tanggal_pembayaran: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    bukti_pembayaran: {
      type: DataTypes.STRING,
      allowNull: true, // Dapat dikosongkan
    },
  },
  {
    freezeTableName: true,
  }
);

Pembayaran.belongsTo(Booking, { foreignKey: "bookingId" });

export default Pembayaran;
