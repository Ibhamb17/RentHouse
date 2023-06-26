import Booking from "../models/Booking.js";
import Kontrakan from "../models/Kontrakan.js";
import Pembayaran from "../models/Pembayaran.js";


// Fungsi untuk mengupdate pembayaran
const updatePembayaran = async (req, res) => {
    const { id } = req.params; // ID pembayaran yang akan diupdate
    const { rekeningcustomer, bukti_pembayaran, status_pembayaran } = req.body; // Data yang akan diupdate
  
    try {
      // Cari pembayaran berdasarkan ID
      const pembayaran = await Pembayaran.findByPk(id);
  
      if (!pembayaran) {
        return res.status(404).json({ message: "Pembayaran tidak ditemukan" });
      }

  
      // Lakukan update atribut yang diinginkan
      pembayaran.rekeningcustomer = rekeningcustomer;
      pembayaran.bukti_pembayaran = bukti_pembayaran;
      pembayaran.tanggal_pembayaran = new Date(); // Menggunakan tanggal saat ini
  
      // Simpan perubahan ke database
      await pembayaran.save();
  
      return res.status(200).json({ message: "Pembayaran berhasil diupdate", pembayaran });
    } catch (error) {
      console.error("Error: ", error);
      return res.status(500).json({ message: "Terjadi kesalahan saat mengupdate pembayaran" });
    }
  };
  
  const updatepembayaranOwner = async (req, res) => {
    const { id } = req.params; // ID pembayaran yang akan diupdate
    const { rekeningcustomer, bukti_pembayaran, status_pembayaran } = req.body; // Data yang akan diupdate
  
    try {
      // Cari pembayaran berdasarkan ID
      const pembayaran = await Pembayaran.findByPk(id, { include: Booking });
  
      if (!pembayaran) {
        return res.status(404).json({ message: "Pembayaran tidak ditemukan" });
      }
  
      pembayaran.status_pembayaran = status_pembayaran;
  
      // Simpan perubahan ke database
      await pembayaran.save();
  
      if (status_pembayaran === "confirmed") {
        const booking = pembayaran.Booking;
  
        if (!booking) {
          return res.status(404).json({ message: "Booking tidak ditemukan" });
        }
  
        booking.status_booking = "confirmed";
        await booking.save();
  
        const kontrakan = await Kontrakan.findByPk(booking.kontrakanId);
  
        if (!kontrakan) {
          return res.status(404).json({ message: "Kontrakan tidak ditemukan" });
        }
  
        kontrakan.availability = false;
        await kontrakan.save();
      }
  
      return res.status(200).json({ message: "Pembayaran berhasil diupdate", pembayaran });
    } catch (error) {
      console.error("Error: ", error);
      return res.status(500).json({ message: "Terjadi kesalahan saat mengupdate pembayaran" });
    }
  };
  
  
  

export { updatePembayaran, updatepembayaranOwner };
