import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";

const Property = db.define("Property", {
  uuid: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  propertyName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  propertyAddress: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  propertyDescription: {
    type: DataTypes.STRING,
    allowNull: false,
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
}, {
  freezeTableName: true,
});

User.hasMany(Property);
Property.belongsTo(User, { foreignKey: "userId" });

export default Property;