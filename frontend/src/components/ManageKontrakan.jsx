import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ManageKontrakan = () => {
  const [kontrakans, setKontrakan] = useState([]);

  useEffect(() => {
    getKontrakans();
  }, []);

  const getKontrakans = async () => {
    const response = await axios.get("http://localhost:5000/kontrakanowner");
    setKontrakan(response.data);
  };

  const deleteMateri = async (kontrakanId) => {
    await axios.delete(`http://localhost:5000/kontrakan/${kontrakanId}`);
    getKontrakans();
  };
  
  return (
    <div>
      <h1 className="title has-text-centered">Daftar Kontrakan</h1>
      <h2 className="subtitle has-text-centered">Kontrakan Saya</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>ID Kontrakan</th>
            <th>nama kotrakan</th>
            <th>alamat kontrakan</th>
            <th>keterangan</th>
            <th>avaibility</th>
            <th>price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {kontrakans.map((kontrakan, index) => (
            <tr key={kontrakan.id}>
              <td>{index + 1}</td>
              <td>{kontrakan.id}</td>
              <td>{kontrakan.namaKontrakan}</td>
              <td>{kontrakan.alamatKontrakan}</td>
              <td>{kontrakan.keterangan}</td>
              <td>{kontrakan.availability ? "Tersedia" : "Kontrakan Tidak Tersedia"}</td>
              <td>Rp.{kontrakan.price.toLocaleString()},-</td>
              <td>
                <Link
                  to={`/managekontrakan/edit/${kontrakan.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteMateri(kontrakan.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/managekontrakan/add" className="button is-primary mb-2">
        Tambah kontrakan
      </Link>
    </div>
  );
};

export default ManageKontrakan;
