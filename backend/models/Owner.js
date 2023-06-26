// import { Sequelize } from "sequelize";
// import db from "../config/Database.js";
// import User from "./UserModel.js";

// const { DataTypes } = Sequelize;

// const Owner = db.define(
//   "owner",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false,
//     },
//     businessName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     businessAddress: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     businessRegistrationNumber: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     norekening: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//   },
//   {
//     freezeTableName: true,
//     hooks: {
//       beforeCreate: async (owner) => {
//         // Mengambil jumlah total owner yang sudah ada dalam database
//         const totalCount = await Owner.count();

//         // Generate nomor registrasi dengan format "REG" + angka increment
//         const registrationNumber = `REG${totalCount + 1}`;

//         // Assign nomor registrasi ke atribut businessRegistrationNumber
//         owner.businessRegistrationNumber = registrationNumber;
//       },
//     },
//   }
// );

// Owner.belongsTo(User, { foreignKey: "userId" });

// export default Owner;
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";

const { DataTypes } = Sequelize;

const Owner = db.define(
  "owner",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    businessAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    businessRegistrationNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    norekening: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    hooks: {
      beforeCreate: async (owner) => {
        // Mengambil jumlah total owner yang sudah ada dalam database
        const totalCount = await Owner.count();

        // Generate nomor registrasi dengan format "REG" + angka increment
        const registrationNumber = `REG${totalCount + 1}`;

        // Assign nomor registrasi ke atribut businessRegistrationNumber
        owner.businessRegistrationNumber = registrationNumber;
      },
    },
  }
);

Owner.belongsTo(User, { foreignKey: "userId", as: 'user' });

export default Owner;
