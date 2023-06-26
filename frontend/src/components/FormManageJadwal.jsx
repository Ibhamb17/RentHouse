import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ManageMateri = () => {
  const [materis, setMateris] = useState([]);

  useEffect(() => {
    getMateris();
  }, []);

  const getMateris = async () => {
    const response = await axios.get("http://localhost:5000/materis");
    setMateris(response.data);
  };

  const deleteMateri = async (materiId) => {
    await axios.delete(`http://localhost:5000/materis/${materiId}`);
    getMateris();
  };
  
  return (
    <div>
      <h1 className="title has-text-centered">Materi</h1>
      <h2 className="subtitle has-text-centered">Daftar Materi</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Mata Kuliah</th>
            <th>Materi</th>
            <th>Link Materi</th>
            <th>Waktu Tenggat</th>
            <th>Dibuat Oleh</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {materis.map((materi, index) => (
            <tr key={materi.uuid}>
              <td>{index + 1}</td>
              <td>{materi.mata_kuliah}</td>
              <td>{materi.nama_materi}</td>
              <td> <a href={materi.link_materi} 
                  target="_blank" rel="noopener noreferrer">
                  {materi.link_materi} 
                  </a> </td>
                <td>{materi.tenggat_waktu}</td>
              <td>{materi.user.name}</td>
              <td>
                <Link
                  to={`/managemateri/edit/${materi.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteMateri(materi.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/managemateri/add" className="button is-primary mb-2">
        Tambah materi
      </Link>
    </div>
  );
};

export default ManageMateri;
