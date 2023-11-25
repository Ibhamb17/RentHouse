import { Sequelize} from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";

const {DataTypes} = Sequelize;

const Customer = db.define(
  "customer",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    identificationNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
      },
  },
  {
    freezeTableName: true,
  }
);

Customer.belongsTo(User, { foreignKey: "userId" });

export default Customer;
