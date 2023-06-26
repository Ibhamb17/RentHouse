import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset, getMe } from '../../features/authSlice';
import Swal from 'sweetalert2';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    Swal.fire({
      title: 'Logout',
      text: 'Apakah Anda yakin akan logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      customClass: {
        confirmButton: 'logout-button-confirm'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(LogOut());
        dispatch(reset());
        navigate('/');
        Swal.fire('Logout', 'Anda Telah Logout', 'success');
      }
    });
  };

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <nav className="topbar">
      <Link to="/">
        <div className="logo">
          <div className="logo-text">Rent house</div>
        </div>
      </Link>
      <div className="componen">
        {!user ? (
          <>
            <div className="subcomponen">
              <Link className="label-text" to="/login/login">Login</Link>
            </div>
            <div className="subcomponen">
              <Link className="label-text" to="/login/login">Signup</Link>
            </div>
          </>
        ) : (
          <button className="logout-button" onClick={handleLogout}>
            <span className="label-text">Logout</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
