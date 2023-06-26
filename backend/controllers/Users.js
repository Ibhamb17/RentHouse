import User from "../models/UserModel.js";
import argon2 from "argon2";

// name, email, nim, npm, password, confPassword, alamat, dp, role

export const getUsers = async (req, res) => {
    try {
      const users = await User.findAll();
  
      res.json(users);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };


export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:['id','fullName','email', 'address', 'phoneNumber', 'role'],
            where: {
                role: req.params.role,
                fullName: req.params.fullName
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUser = async (req, res) => {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      address,
      phoneNumber,
      role,
    } = req.body;
  
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ msg: "Password dan Confirm Password tidak cocok" });
    }
  
    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ msg: "Email sudah digunakan" });
      }
  
      const hashPassword = await argon2.hash(password);
  
      await User.create({
        fullName: fullName,
        email: email,
        password: hashPassword,
        address: address,
        phoneNumber: phoneNumber,
        role: role,
      });
  
      res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  
  

export const updateUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    const { fullName,email, address, phoneNumber, role, password, confPassword} = req.body;
    // let hashPassword;
    // if(password === "" || password === null){
    //     hashPassword = user.password
    // }else{
    //     hashPassword = await argon2.hash(password);
    // }
    // if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    try {
        await User.update({
            fullName: fullName,
            email: email,
            address: address,
            phoneNumber: phoneNumber,
            // password: hashPassword,
            role: role,
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "User Berhasil di Update"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateUserbyID = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    const {name, email, nim, npm, password, confPassword, alamat, dp, role} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    try {
        await User.update({
            name: name,
            email: email,
            nim: nim,
            npm: npm,
            password: hashPassword,
            alamat: alamat,
            dp: dp,
            role: role
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    try {
        await User.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateUserById = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    const {name, email, password, confPassword, role} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    try {
        await User.update({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "User Berhasil Di Update"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}