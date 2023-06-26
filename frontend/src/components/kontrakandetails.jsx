import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./hsd.css";
import Header from "./Header/Header";

const PropertyDetail = () => {
  const { kontrakanId } = useParams();
  const [kontrakan, setKontrakan] = useState(null);

  useEffect(() => {
    const getKontrakanById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/kontrakan/customer/${kontrakanId}`);
        const { data } = response;
        setKontrakan(data);
      } catch (error) {
        console.error(error);
      }
    };

    getKontrakanById();
  }, [kontrakanId]);

  const handleBooking = async () => {
    try {
      const response = await axios.post("http://localhost:5000/bookings", { kontrakanId });
      console.log(response.data); // Tampilkan respons dari backend jika diperlukan
      // Tambahkan logika atau tindakan lain yang diinginkan setelah pemesanan berhasil
    } catch (error) {
      console.error(error);
      // Tambahkan penanganan kesalahan jika diperlukan
    }
  };

  function formatPhoneNumber(phoneNumber) {
    // Menghapus angka 0 di depan nomor telepon
    const cleanedPhoneNumber = phoneNumber.replace(/^0+/, '');
  
    // Menambahkan kode negara sebagai awalan nomor telepon
    const countryCode = '62';
    const formattedPhoneNumber = `+${countryCode}${cleanedPhoneNumber}`;
  
    return formattedPhoneNumber;
  }
  
  const handleWhatsAppChat = () => {
    const phoneNumber = formatPhoneNumber(kontrakan.owner.user.phoneNumber);
    const kontrakanDetailLink = `http://localhost:3000/kontrakan/${kontrakanId}`;
    const message = encodeURIComponent(`Halo min, saya berminat menyewa kontrakan ini (${kontrakanDetailLink})...`);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink, "_blank");
  };
  
  
  

  return (
    <div className="container">
      <Header className="header" />
      <div className="house-details-container">
        <div className="pict">
          <div className="main-pict"></div>
          <div className="facility-picts-container">
            <div className="others"></div>
            <div className="others"></div>
          </div>
        </div>

        <div className="content-details-container">
          <div className="content-details">
            <h2>Halaman Detail Kontrakan</h2>
            <p>Kontrakan ID: {kontrakanId}</p>
            {kontrakan && (
              <div className="property-details">
                <h3>Detail Kontrakan</h3>
                <h4>Nama Kontrakan: {kontrakan.namaKontrakan}</h4>
                <p>Alamat Kontrakan: {kontrakan.alamatKontrakan}</p>
                <p>Keterangan: {kontrakan.keterangan}</p>
                <p>Price: {kontrakan.price}</p>
              </div>
            )}
          </div>

          <div className="booking-section">
            {kontrakan && (
              <div>
                <h3>Harga: Rp.{kontrakan.price.toLocaleString()},-</h3>
                <div className="checkin-container">
                  <label htmlFor="checkin">Tanggal Check-in:</label>
                  <input type="date" id="checkin" name="checkin" />
                </div>
                <div className="payment-method">
                  <h4>Bayar DP</h4>
                  <p>DP (40%): Rp.{(kontrakan.price * 4 / 10).toLocaleString()},-</p>
                  <p>Pelunasan: Rp.{((kontrakan.price)-(kontrakan.price * 4 / 10)).toLocaleString()},-</p>
                </div>
                <div className="payment-method">
                  <h4>Pembayaran Penuh</h4>
                  <p>Rp.{kontrakan.price.toLocaleString()},-</p>
                </div>
                <button className="booking-button" onClick={handleBooking}>
                  Ajukan Booking
                </button>
                <button className="booking-button" onClick={handleWhatsAppChat}>
                  Chat WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
