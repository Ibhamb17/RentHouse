import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const OwnerSignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [norekening, setNorekening] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/owners", {
        fullName,
        username,
        email,
        password,
        confirmPassword,
        businessName,
        businessAddress,
        norekening,
        address,
        phoneNumber,
      });

      Swal.fire({
        title: "Success",
        text: response.data.msg,
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });

      // Tambahkan logika tambahan setelah pendaftaran berhasil
    } catch (error) {
      console.error(error.response.data.msg);
      // Tambahkan logika untuk menangani respons dari backend jika terjadi kesalahan saat mendaftar sebagai owner
    }
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container is-max-desktop">
          <div className="box has-background-white-bis has-shadow">
            <h2 className="title is-4 has-text-centered">Sign Up as Owner</h2>
            <form onSubmit={handleSignUp}>
              <div className="columns is-multiline">
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Full Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Business Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Business Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Business Address</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Business Address"
                        value={businessAddress}
                        onChange={(e) => setBusinessAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Nomor Rekening</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Nomor Rekening"
                        value={norekening}
                        onChange={(e) => setNorekening(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Address</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Phone Number</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control has-text-centered">
                  <button className="button is-primary" type="submit">
                    Sign Up as Owner
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSignUpForm;
