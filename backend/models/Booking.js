// import { Sequelize, DataTypes } from "sequelize";
// import db from "../config/Database.js";
// import HargaKontrakan from "./HargaKontrakan.js";
// import Customer from "./Customer.js";

// const Booking = db.define(
//   "booking",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false,
//     },
//     hargaKontrakanId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "harga_kontrakan",
//         key: "id",
//       },
//     },
//     durasiKontrak: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     customerId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "customer",
//         key: "id",
//       },
//     },
//   },
//   {
//     freezeTableName: true,
//   }
// );

// Booking.belongsTo(HargaKontrakan, { foreignKey: "hargaKontrakanId" });
// Booking.belongsTo(Customer, { foreignKey: "customerId" });

// export default Booking;

import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Customer from "./Customer.js";
import Kontrakan from "./Kontrakan.js";

const Booking = db.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tanggal_booking: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tanggal_checkin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tanggal_checkout: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status_booking: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending",
      validate: {
        isIn: [["pending", "confirmed", "canceled"]],
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Booking.belongsTo(Kontrakan, { foreignKey: "kontrakanId" });
Booking.belongsTo(Customer, { foreignKey: "customerId" });

export default Booking;

