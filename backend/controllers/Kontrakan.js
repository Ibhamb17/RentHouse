import Kontrakan from "../models/Kontrakan.js";
import Owner from "../models/Owner.js";
import User from "../models/UserModel.js";

export const getKontrakans = async (req, res) => {
  try {
    const kontrakans = await Kontrakan.findAll();

    res.json(kontrakans);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getKontrakanById = async (req, res) => {
    const { id } = req.params;
  
    try {
        let kontrakan;
        if(req.role === "admin"){
      kontrakan = await Kontrakan.findOne({ where: { id } });      
       if (!kontrakan) {
        return res.status(404).json({ msg: "Kontrakan tidak ditemukan" });
       }
      
       res.json(kontrakan);
        }else{
        kontrakan = await Kontrakan.findOne({ where: { id } });
        if (!kontrakan) {
            return res.status(404).json({ msg: "Kontrakan tidak ditemukan" });
          }
        const ownerId = kontrakan.ownerId; // Dapatkan ownerId dari objek kontrakan
        if (ownerId !== req.session.ownerId) {
        return res.status(403).json({ msg: "Akses ditolak. Anda tidak berhak melihat kontrakan ini" });
      }
      res.json(kontrakan);
    }
} catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };

export const getKontrakansByOwnerId = async (req, res) => {

    try {
      const kontrakans = await Kontrakan.findAll({ where: { ownerId: req.session.ownerId } });
  
      res.json(kontrakans);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  

export const createKontrakan = async (req, res) => {
    const { namaKontrakan, alamatKontrakan, keterangan, price } = req.body;
  
    try {
      const user = await User.findOne({
        where: {
          id: req.userId,
        },
      });
  
      if (!user) {
        return res.status(404).json({ msg: "Pengguna tidak ditemukan" });
      }
  
      let ownerId = null;
      if (user.role === "owner") {
        ownerId = req.session.ownerId;
      }
  
      const newKontrakan = await Kontrakan.create({
        namaKontrakan,
        alamatKontrakan,
        keterangan,
        price,
        ownerId,
      });
  
      res.status(201).json({ msg: "Kontrakan berhasil ditambahkan", kontrakan: newKontrakan });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  
  
  

  export const updateKontrakan = async (req, res) => {
    try {
      const { id } = req.params;
      const { namaKontrakan, alamatKontrakan, keterangan, availability, price } = req.body;
  
      let kontrakan;
      if (req.role === "admin") {
        kontrakan = await Kontrakan.findOne({ where: { id } });
        if (!kontrakan) {
          return res.status(404).json({ msg: "Kontrakan tidak ditemukan" });
        }
  
        await Kontrakan.update(
          { namaKontrakan, alamatKontrakan, keterangan, availability, price },
          { where: { id } }
        );
      } else {
        kontrakan = await Kontrakan.findOne({ where: { id } });
        if (!kontrakan) {
          return res.status(404).json({ msg: "Kontrakan tidak ditemukan" });
        }
        
        const ownerId = kontrakan.ownerId;
        if (ownerId !== req.session.ownerId) {
          return res
            .status(403)
            .json({ msg: "Akses ditolak. Anda tidak berhak melihat kontrakan ini" });
        }
  
        await Kontrakan.update(
          { namaKontrakan, alamatKontrakan, keterangan, availability, price },
          { where: { id, ownerId: req.session.ownerId } }
        );
      }
  
      res.json({ msg: "Kontrakan berhasil diperbarui" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  
  


  
export const updateKontrakanById = async (req, res) => {
  const { id } = req.params;
  const { ownerId } = req.body;

  try {
    const kontrakan = await Kontrakan.findOne({ where: { id, ownerId } });
    if (!kontrakan) {
      return res.status(404).json({ msg: "Kontrakan tidak ditemukan" });
    }

    await kontrakan.update(req.body);

    res.json({ msg: "Kontrakan berhasil diperbarui" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteKontrakan = async (req, res) => {
    try {
      const { id } = req.params;
  
      let kontrakan;
      if (req.role === "admin") {
        kontrakan = await Kontrakan.findOne({ where: { id } });
        if (!kontrakan) {
          return res.status(404).json({ msg: "Kontrakan tidak ditemukan" });
        }
  
        await Kontrakan.destroy({ where: { id } });
      } else {
        kontrakan = await Kontrakan.findOne({ where: { id } });
        if (!kontrakan) {
          return res.status(404).json({ msg: "Kontrakan tidak ditemukan" });
        }
        
        const ownerId = kontrakan.ownerId;
        if (ownerId !== req.session.ownerId) {
          return res
            .status(403)
            .json({ msg: "Akses ditolak. Anda tidak berhak menghapus kontrakan ini" });
        }
  
        await Kontrakan.destroy({ where: { id, ownerId: req.session.ownerId } });
      }
  
      res.json({ msg: "Kontrakan berhasil dihapus" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  
  export const getKontrakanByIdForCustomer = async (req, res) => {
    const { id } = req.params;
  
    try {
      const kontrakan = await Kontrakan.findOne({
        where: { id },
        include: [
          {
            model: Owner,
            as: 'owner',
            include: [
              {
                model: User,
                as: 'user',
                attributes: ['phoneNumber'],
              },
            ],
          },
        ],
      });
  
      if (!kontrakan) {
        return res.status(404).json({ msg: "Kontrakan tidak ditemukan" });
      }
  
      const phoneNumber = kontrakan.owner.user.phoneNumber;
      const kontrakanData = kontrakan.toJSON();
      kontrakanData.owner.user.phoneNumber = phoneNumber;
  
      res.json(kontrakanData);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  
  