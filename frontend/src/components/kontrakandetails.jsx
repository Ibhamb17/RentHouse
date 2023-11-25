import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./hsd.css";
import Header from "./Header/Header";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const PropertyDetail = () => {
  const { kontrakanId } = useParams();
  const [kontrakan, setKontrakan] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

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
    Swal.fire({
      title: 'Ajukan Booking',
      text: 'Apakah Anda yakin ingin mengajukan booking?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Ajukan',
      cancelButtonText: 'Batal',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      preConfirm: async () => {
        try {
          const response = await axios.post("http://localhost:5000/bookings", { kontrakanId });
          console.log(response.data); // Tampilkan respons dari backend jika diperlukan
          return response.data;
        } catch (error) {
          console.error(error);
          Swal.showValidationMessage('Terjadi kesalahan saat mengajukan booking.');
        }
      },
      allowEscapeKey: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Booking berhasil diajukan!', 'Terima kasih telah mengajukan booking.', 'success');
        // Tambahkan logika atau tindakan lain yang diinginkan setelah pemesanan berhasil
      }
    });
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
  
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login/login");
    }
  }, [isError, navigate]);
  
  const getRandomImageUrl = () => {
    const imageUrls = [
      "https://drive.google.com/uc?id=12QqOKWrOj4gAlxP3NZBC1KtOMqhCyfkr",
      "https://drive.google.com/uc?id=1CXQ4fFClHTNjncMee09wXfzIb4ehmLKW",
      "https://drive.google.com/uc?id=1zpNepAWYup4ZqgCgtfJ-WVIIVV2ne4pj",
      "https://drive.google.com/uc?id=1EQ7Zbml7OVaVAsEYCySec3Q8A6XblrxJ"
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };
  return (
    <div className="container">
      <Header className="header" />
      <div className="house-details-container">
      <div className="pict">
    <div className="main-pict" style={{
                      backgroundImage: `url("${getRandomImageUrl()}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}>
    </div>
    <div className="facility-picts-container">
      <div className="others" style={{
                      backgroundImage: `url("https://drive.google.com/uc?id=1aGe6Fxi265bIKGXitTmITIyI6X4dXlKm")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}>
      </div>
      <div className="others" style={{
                      backgroundImage: `url("https://drive.google.com/uc?id=1ClHJv2Ug4sO4rhbMED9fdBLB-ZfV6tdU")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}>
      </div>
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
                <p>Price: Rp.{kontrakan.price.toLocaleString()}</p>
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
