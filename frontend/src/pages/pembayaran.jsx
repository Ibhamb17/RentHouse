import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdatePembayaran = ({ id }) => {
  const [rekeningcustomer, setRekeningCustomer] = useState("");
  const [buktiPembayaran, setBuktiPembayaran] = useState("");
  const [statusPembayaran, setStatusPembayaran] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchPembayaran();
  }, [id]);

  const fetchPembayaran = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/pembayaran/${id}`);
      const pembayaran = response.data.pembayaran;
      setRekeningCustomer(pembayaran.rekeningcustomer);
      setBuktiPembayaran(pembayaran.bukti_pembayaran);
      setStatusPembayaran(pembayaran.status_pembayaran);
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data pembayaran");
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/pembayaran/${id}`, {
        rekeningcustomer,
        bukti_pembayaran: buktiPembayaran,
        status_pembayaran: statusPembayaran,
      });
      setSuccess(response.data.message);
    } catch (error) {
      setError("Terjadi kesalahan saat mengupdate pembayaran");
    }
  };

  return (
    <div>
      <h2>Update Pembayaran</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <div>
        <label>Rekening Customer:</label>
        <input type="text" value={rekeningcustomer} onChange={(e) => setRekeningCustomer(e.target.value)} />
      </div>
      <div>
        <label>Bukti Pembayaran:</label>
        <input type="text" value={buktiPembayaran} onChange={(e) => setBuktiPembayaran(e.target.value)} />
      </div>
      <div>
        <label>Status Pembayaran:</label>
        <select value={statusPembayaran} onChange={(e) => setStatusPembayaran(e.target.value)}>
          <option value="belum bayar">Belum Bayar</option>
          <option value="confirmed">Confirmed</option>
        </select>
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdatePembayaran;
