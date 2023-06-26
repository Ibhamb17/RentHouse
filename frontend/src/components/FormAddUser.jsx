import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddUser = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [businessName, setBusinessname] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfPassword] = useState("");
  const [norekening, setNorek] = useState("");
  const [dateOfBirth, setBirtyday] = useState("");
  const [idemtificationNumber, setIdentify] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        fullName: fullName,
        email: email,
        address: address,
        phoneNumber: phoneNumber,
        role: role,
        password: password,
        confirmPassword: confirmPassword,
      });

      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">Tambah User</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={fullName}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan NIM jika mahasiswa"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Address</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Masukkan NPM jika Dosen"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">phoneNumber</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={phoneNumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    placeholder="Photo Profile"
                  />
                </div>
              </div>
              {/* <div className="field">
                <label className="label">Business Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={businessName}
                    onChange={(e) => setBusinessname(e.target.value)}
                    placeholder="Business Name"
                  />
                </div>
              </div> 
              <div className="field">
                <label className="label">Business Address</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={businessAddress}
                    onChange={(e) => setBusinessAddress(e.target.value)}
                    placeholder="Business Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">No Rekening</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={norekening}
                    onChange={(e) => setNorek(e.target.value)}
                    placeholder="Business Name"
                  />
                </div>
              </div> */}
              
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={confirmPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      placeholder="isi role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">-pilih role</option>
                      <option value="admin">admin</option>
                      <option value="owner">owner</option>
                      <option value="customer">customer</option>
                    </select>
                  </div>
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

export default FormAddUser;
