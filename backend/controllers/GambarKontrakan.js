import GambarKontrakan from "../models/Gambarkontrakan.js";
import Kontrakan from "../models/Kontrakan.js";

export const tambahGambarKontrakan = async (req, res) => {
    try {
      const { kontrakanId, namaFile, pathFile } = req.body;
  
      // Periksa ketersediaan kontrakan
      const kontrakan = await Kontrakan.findOne({
        where: { id: kontrakanId, ownerId: req.session.ownerId },
      });
      if (!kontrakan) {
        return res
          .status(404)
          .json({ msg: "Kontrakan tidak tersedia, tidak dapat menambahkan gambar" });
      }
  
      const gambarKontrakan = await GambarKontrakan.create({
        kontrakanId,
        namaFile,
        pathFile,
      });
  
      res
        .status(201)
        .json({ msg: "Gambar kontrakan berhasil ditambahkan", data: gambarKontrakan });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  
