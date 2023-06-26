import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const JadwalDosen = () => {
  const [jadwal_dosens, setJadwalDosen] = useState([]);

  useEffect(() => {
    getJadwalDosens();
  }, []);

  const getJadwalDosens = async () => {
    const response = await axios.get("http://localhost:5000/jadwal_dosen");
    setJadwalDosen(response.data);
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
            <th>Kelas</th>
            <th>SKS</th>
            <th>Ruang</th>
            <th>Hari</th>
            <th>Waktu</th>
          </tr>
        </thead>
        <tbody>
          {jadwal_dosens.map((jadwal_dosen, index) => (
            <tr key={jadwal_dosen.uuid}>
              <td>{index + 1}</td>
              <td>{jadwal_dosen.matakuliah}</td>
              <td>{jadwal_dosen.kelas}</td>
              <td>{jadwal_dosen.sks}</td>
              <td>
                  {jadwal_dosen.ruang} 
              </td>
              <td>{jadwal_dosen.hari}</td>
              <td>{jadwal_dosen.waktu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JadwalDosen;
