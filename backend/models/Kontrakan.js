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
        notEmpty: {
          msg: "Nama kontrakan tidak boleh kosong",
        },
      },
    },
    alamatKontrakan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Alamat kontrakan tidak boleh kosong",
        },
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
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Harga tidak boleh kosong",
        },
      },
    },
    fotokontrakan: {
      type: DataTypes.STRING, // Menyimpan data gambar kontrakan
      allowNull: true,
    },
    akhirKontrak: {
      type: DataTypes.DATEONLY, // Menggunakan DataTypes.DATEONLY jika hanya tanggal yang diperlukan
      allowNull: true, // Mengizinkan nilai null jika belum ada informasi berakhirnya kontrak
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "diperiksa",
      validate: {
        isIn: {
          args: [["diperiksa", "ditolak", "diterima"]],
          msg: "Status tidak valid",
        },
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Kontrakan.belongsTo(Owner, { foreignKey: "ownerId" });

export default Kontrakan;
