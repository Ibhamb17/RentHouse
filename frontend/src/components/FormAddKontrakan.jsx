import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const FormAddKontrakan = () => {
  const [namaKontrakan, setNamaKontrakan] = useState("");
  const [alamatKontrakan, setAlamatKontrakan] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveKontrakan = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/kontrakan`, {
        namaKontrakan: namaKontrakan,
        alamatKontrakan: alamatKontrakan,
        keterangan: keterangan,
        price: price,
      });
      // Tampilkan Sweet Alert setelah berhasil memperbarui
      Swal.fire({
        title: "Sukses!",
        text: "Tampilan data kontrakan diperbarui",
        icon: "success",
        confirmButtonText: "Selesai",
        showCancelButton: true, 
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/managekontrakan");
        }
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };


  return (
    <div>
      <h1 className="title">Kontrakan</h1>
      <h2 className="subtitle">Tambah Kontrakan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveKontrakan}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaKontrakan}
                    onChange={(e) => setNamaKontrakan(e.target.value)}
                    placeholder="Nama Kontrakan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Address</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={alamatKontrakan}
                    onChange={(e) => setAlamatKontrakan(e.target.value)}
                    placeholder="Input address"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Keterangan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                    placeholder="Input Keterangan"
                  />
                </div>
              </div>


              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Input house price"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddKontrakan;
