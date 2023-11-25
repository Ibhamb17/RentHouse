import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const CustomerSignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/customers", {
        fullName,
        username,
        email,
        password,
        confirmPassword,
        address,
        phoneNumber,
        dateOfBirth,
        gender,
        occupation,
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
      // Tambahkan logika untuk menangani respons dari backend jika terjadi kesalahan saat mendaftar sebagai customer
    }
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container is-max-desktop">
          <div className="box has-background-white-bis has-shadow">
            <h2 className="title is-4 has-text-centered">Sign Up as Customer</h2>
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
                  <div className="field">
                    <label className="label">Date of Birth</label>
                    <div className="control">
                      <input
                        className="input"
                        type="date"
                        placeholder="Date of Birth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Gender</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Occupation</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Occupation"
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control has-text-centered">
                  <button className="button is-primary" type="submit">
                    Sign Up as Customer
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

export default CustomerSignUpForm;
