import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddKontrakan = () => {
  const [namaKontrakan, setName] = useState("");
  const [alamatKontrakan, setAddress] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveKontrakan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kontrakan", {
        namaKontrakan: namaKontrakan,
        alamatKontrakan: alamatKontrakan,
        keterangan: keterangan,

        price: price,
      });
      navigate("/managekontrakan");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Kontrakan</h1>
      <h2 className="subtitle">Tambah Konrakan</h2>
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
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Kontrakan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Adress</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={alamatKontrakan}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="inpurt address"
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
                    placeholder="input Keterangan"
                  />
                </div>
              </div>

          

              <div className="field">
                <label className="label">price</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="inpurt house price"
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
