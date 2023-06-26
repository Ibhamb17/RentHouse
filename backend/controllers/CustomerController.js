// controllers/CustomerController.js
import Customer from "../models/Customer.js";
// controllers/OwnerController.js
import Owner from "../models/Owner.js";

import User from "../models/UserModel.js";
import argon2 from "argon2";

export const createCustomer = async (req, res) => {
    try {
      const {
        fullName,
        username,
        email,
        password,
        confirmPassword,
        address,
        phoneNumber,
        dateOfBirth,
        gender,
        occupation,
        identificationNumber
      } = req.body;
  
      // Periksa apakah email sudah terdaftar sebelumnya
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ msg: "Email sudah terdaftar" });
      }
  
      // Periksa apakah password dan confirm password sama
      if (password !== confirmPassword) {
        return res
          .status(400)
          .json({ msg: "Password dan Confirm Password tidak cocok" });
      }
  
      // Hash password menggunakan argon2
      const hashPassword = await argon2.hash(password);
  
      // Membuat pengguna baru dengan data yang diberikan
      const newUser = await User.create({
        fullName,
        username,
        email,
        password: hashPassword,
        role: "customer",
        address,
        phoneNumber
      });
  
      // Membuat pelanggan baru dengan data yang diberikan dan merujuk pada pengguna yang baru dibuat
      const newCustomer = await Customer.create({
        dateOfBirth,
        gender,
        occupation,
        identificationNumber,
        userId: newUser.id
      });
  
      res
        .status(201)
        .json({ msg: "Customer berhasil dibuat", customer: newCustomer });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  export const createOwner = async (req, res) => {
    const { fullName, username, email, password, confirmPassword, businessName, businessAddress,norekening, address, phoneNumber } = req.body;
  
    // Periksa apakah email sudah terdaftar sebelumnya
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ msg: "Email sudah terdaftar" });
    }
  
    // Periksa apakah password dan confirm password sama
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    }
  
    // Hash password menggunakan argon2
    const hashPassword = await argon2.hash(password);
  
    try {
      // Membuat pengguna baru dengan data yang diberikan
      const newUser = await User.create({
        fullName,
        username,
        email,
        password: hashPassword,
        role: "owner", // Mengatur peran pengguna sebagai "owner"
        address,
        phoneNumber,
      });
  
      // Generate nomor registrasi bisnis secara otomatis
      const lastOwner = await Owner.findOne({
        order: [["id", "DESC"]],
      });
  
      let businessRegistrationNumber;
      if (lastOwner) {
        const lastRegistrationNumber = lastOwner.businessRegistrationNumber;
        const lastNumber = parseInt(lastRegistrationNumber.replace("REG", ""));
        businessRegistrationNumber = `REG${lastNumber + 1}`;
      } else {
        businessRegistrationNumber = "REG1";
      }
  
      // Membuat pemilik baru dengan data yang diberikan dan merujuk pada pengguna yang baru dibuat
      const newOwner = await Owner.create({
        businessName,
        businessAddress,
        businessRegistrationNumber,
        norekening,
        userId: newUser.id,
      });
  
      res.status(201).json({ msg: "Owner berhasil dibuat", owner: newOwner });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };