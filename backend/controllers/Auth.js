import User from "../models/UserModel.js";
import Owner from "../models/Owner.js";
import Customer from "../models/Customer.js";
import argon2 from "argon2";

export const Login = async (req, res) =>{
  if(req.session.userId){
    return res.status(400).json({msg:"Anda sudah login, Lakukan logout terlebih dahulu ^_^"})
  }
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({msg: "Email atau password anda salah bang"});
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({msg: "Password salah"});

    let ownerId = null;
    let customerId=null;
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const fullName = user.fullName;
    const email = user.email;
    const role = user.role;
    if (role === "owner") {
      const owner = await Owner.findOne({ where: { userId: user.id } });
      if (owner) {
        ownerId = owner.id;
        req.session.ownerId = ownerId;
      }
      res.status(200).json({msg:"Login Success",uuid, fullName, email, role,ownerId});
    }else if (role === "customer") {
      const customer = await Customer.findOne({ where: { userId: user.id } });
      if (customer) {
        customerId = customer.id;
        req.session.customerId = customerId;
      }
      res.status(200).json({msg:"Login Success",uuid, fullName, email, role, customerId});
    }else{
    res.status(200).json({msg:"Login Success",uuid, fullName, email, role});
    }
}



export const Me = async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
    }
    const user = await User.findOne({
      attributes: ["id", "fullName", "email", "role"], // Mengubah "uuid" menjadi "id"
      where: {
        uuid: req.session.userId,
      },
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  
    const { id, fullName, email, role } = user; // Menggunakan "id" sebagai pengganti "uuid"
    const userId = user.id; // Menyimpan "id" sebagai "userId"
    
  if (role === "owner") {
    let ownerId = null;
    const owner = await Owner.findOne({ where: { userId: user.id } });
    if (owner) {
      ownerId = owner.id;
    }
  
    res.status(200).json({ id, fullName, email, role, userId,ownerId }); // Mengirimkan "userId" dalam respons
  }else{
  res.status(200).json({ id, fullName, email, role, userId});}
  };
  

export const logOut = (req, res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: "Tidak dapat logout"});
        res.status(200).json({msg: "Anda telah logout"});
    });
}