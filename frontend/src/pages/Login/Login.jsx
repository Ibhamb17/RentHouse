import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../features/authSlice";
import "./login.css";
import Swal from 'sweetalert2';
import Header from "../../components/Header/Headerlogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess, isLoading, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      const { role } = user;
      if (role === "owner" || role === "admin") {
        navigate("/dashboard");
      } else if (role === "customer") {
        navigate("/");
      }
      Swal.fire({
        icon: 'success',
        title: 'Login Berhasil',
        text: 'Selamat datang!',
        showConfirmButton: true,
        timer: 20000
      });
    }
    dispatch(reset());
  }, [isSuccess, user, dispatch, navigate, message]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Masukkan Password dan Email',
        showConfirmButton: true,
        timer: 20000
      });
      return;
    }
    dispatch(LoginUser({ email, password }));
  };

  return (
    <>
      <Header />
      <section className="main">
        <div className="login-container">
          <p className="title">Welcome back</p>
          <div className="separator"></div>
          <p className="welcome-message">
            Please, provide login credentials to proceed and have access to all our services
          </p>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="fas fa-user"></i>
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fas fa-lock"></i>
            </div>

            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;