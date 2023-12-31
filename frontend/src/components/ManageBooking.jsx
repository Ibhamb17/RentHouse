import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    const response = await axios.get("http://localhost:5000/bookingsbyowner");
    setBookings(response.data);
  };

  return (
    <div>
      <h1 className="title has-text-centered">Booking Request</h1>
      <h2 className="subtitle has-text-centered">Booking Management</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Tanggal Booking</th>
            <th>Tanggal Check-in</th>
            <th>Tanggal Check-out</th>
            <th>Status Booking</th>
            <th>Status Pembayaran</th>
            <th>Kontrakan ID</th>
            <th>Customer ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.id}</td>
              <td>{booking.tanggal_booking}</td>
              <td>{booking.tanggal_checkin}</td>
              <td>{booking.tanggal_checkout}</td>
              <td>{booking.status_booking}</td>
              <td>{booking.pembayaran ? booking.pembayaran.status_pembayaran : "-"}</td> {/* Mengambil status_pembayaran jika ada data pembayaran */}
              <td>{booking.kontrakanId}</td>
              <td>{booking.customerId}</td>
              <td>
                <Link
                  to={`/managebooking/edit/${booking.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooking;
