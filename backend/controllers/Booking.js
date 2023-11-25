import Booking from "../models/Booking.js";
import Kontrakan from "../models/Kontrakan.js";
import Pembayaran from "../models/Pembayaran.js";
import Owner from "../models/Owner.js";
import Customer from "../models/Customer.js";


// Mendapatkan semua data booking
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

// Mendapatkan data booking berdasarkan ID
const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ error: "Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch booking" });
  }
};
// Controller untuk Owner membaca data customer yang booking pada kontrakan miliknya saja
const getBookingsByOwner = async (req, res) => {
  const ownerId = req.session.ownerId;

  try {
    // Mengambil kontrakan yang dimiliki oleh Owner
    const kontrakans = await Kontrakan.findAll({ where: { ownerId } });

    // Mengambil booking yang terkait dengan kontrakans milik Owner
    const bookings = await Booking.findAll({
      where: { kontrakanId: kontrakans.map((kontrakan) => kontrakan.id) },
      include: [{ model: Customer }],
    });

    // Mengambil data pembayaran berdasarkan bookingId
    const pembayaranPromises = bookings.map((booking) =>
      Pembayaran.findOne({ where: { bookingId: booking.id } })
    );
    const pembayaranResults = await Promise.all(pembayaranPromises);

    // Menggabungkan data pembayaran ke dalam data booking
    const bookingsWithPembayaran = bookings.map((booking, index) => ({
      ...booking.toJSON(),
      pembayaran: pembayaranResults[index] ? pembayaranResults[index].toJSON() : null,
    }));

    res.json(bookingsWithPembayaran);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};


export { getBookingsByOwner };

// const createBooking = async (req, res) => {
//     const { kontrakanId } = req.body;
//     const customerId = req.session.customerId;
  
//     try {
//       // Periksa apakah kontrakan dengan ID yang diberikan tersedia dan memiliki availability true
//       const kontrakan = await Kontrakan.findOne({
//         where: {
//           id: kontrakanId,
//           availability: true
//         }
//       });
  
//       if (!kontrakan) {
//         return res.status(404).json({ error: "Kontrakan not found or unavailable" });
//       }
  
//       const createdAt = new Date().toISOString();
  
//       const checkinDate = new Date();
//       checkinDate.setDate(checkinDate.getDate() + 4); // Tambahkan 1 hari pada tanggal check-in
//       const checkoutDate = new Date(checkinDate.getTime() + 30 * 24 * 60 * 60 * 1000);
//       const tanggal_checkin = checkinDate.toISOString().split("T")[0];
//       const tanggal_checkout = checkoutDate.toISOString().split("T")[0];
  
//       const booking = await Booking.create({
//         tanggal_booking: createdAt,
//         tanggal_checkin,
//         tanggal_checkout,
//         status_booking: "pending",
//         customerId,
//         kontrakanId,
//       });
  
//       res.status(201).json(booking);
//     } catch (error) {
//       res.status(500).json({ error: "Failed to create booking" });
//     }
//   };
  
const createBooking = async (req, res) => {
    const { kontrakanId } = req.body;
    const customerId = req.session.customerId;
  
    try {
      // Periksa apakah kontrakan dengan ID yang diberikan tersedia dan memiliki availability true
      const kontrakan = await Kontrakan.findOne({
        where: {
          id: kontrakanId,
          availability: true,
        },
      });
  
      if (!kontrakan) {
        return res.status(404).json({ error: "Kontrakan not found or unavailable" });
      }
  
      const createdAt = new Date().toISOString();
  
      const checkinDate = new Date();
      checkinDate.setDate(checkinDate.getDate() + 4); // Tambahkan 4 hari pada tanggal check-in
      const checkoutDate = new Date(checkinDate.getTime() + 30 * 24 * 60 * 60 * 1000);
      const tanggal_checkin = checkinDate.toISOString().split("T")[0];
      const tanggal_checkout = checkoutDate.toISOString().split("T")[0];
  
      const booking = await Booking.create({
        tanggal_booking: createdAt,
        tanggal_checkin,
        tanggal_checkout,
        status_booking: "pending",
        customerId,
        kontrakanId,
      });
  
      // Dapatkan data owner berdasarkan ownerId saat booking
      const owner = await Owner.findOne({
        where: {
          id: kontrakan.ownerId,
        },
      });
  
      if (!owner) {
        return res.status(404).json({ error: "Owner not found" });
      }
  
      // Buat pembayaran baru dengan menggunakan data owner
      const pembayaran = await Pembayaran.create({
        total_pembayaran: kontrakan.price, // Mengambil harga kontrakan dari kontrakan yang dipesan
        bookingId: booking.id,
        rekeningowner: owner.norekening, // Menggunakan nomor rekening dari owner
      });
  
      res.status(201).json({ booking, pembayaran });
    } catch (error) {
      res.status(500).json({ error: "Failed to create booking and pembayaran" });
    }
  };
  

  const updateBooking = async (req, res) => {
    const { id } = req.params;
    const { status_booking } = req.body;
    try {
      const booking = await Booking.findByPk(id);
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
  
      // Perbarui status booking
      booking.status_booking = status_booking;
      await booking.save();
  
      // Jika status_booking menjadi "confirmed", ubah availability kontrakan menjadi false
      if (status_booking === "confirmed") {
        const kontrakan = await Kontrakan.findByPk(booking.kontrakanId);
        if (kontrakan) {
          kontrakan.availability = false;
          await kontrakan.save();
  
          // Hapus booking lain dengan status_booking "pending" dan kontrakanId yang sama
          await Booking.destroy({
            where: {
              status_booking: "pending",
              kontrakanId: booking.kontrakanId
            }
          });
        }
      }
  
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ error: "Failed to update booking" });
    }
  };
  
  
  

// Menghapus data booking berdasarkan ID
const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id);
    if (booking) {
      await booking.destroy();
      res.status(200).json({ message: "Booking deleted successfully" });
    } else {
      res.status(404).json({ error: "Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete booking" });
  }
};

export { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking };
