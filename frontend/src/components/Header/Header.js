import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset, getMe } from '../../features/authSlice';
import Swal from 'sweetalert2';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleSignupDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <nav className="navbar is-fixed-top" style={{ backgroundColor: 'rgba(48, 104, 246, 1)' }}>
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <div className="has-text-white">Rent house</div>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          {!user ? (
            <div className="navbar-item">
              <div className="buttons" style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/login/login" className="button is-primary">
                  Login
                </Link>
                <div className={`navbar-item has-dropdown ${isDropdownOpen ? 'is-active' : ''}`} style={{ marginLeft: '10px' }}>
                  <a className="navbar-link" onClick={handleSignupDropdown}>
                    Signup
                  </a>
                  <div className="navbar-dropdown" style={{ backgroundColor: 'rgba(0, 0, 0, 0.09)', color: '#ffffff', left: '-90%', top: 'calc(100% + 5px)' }}>
                    <Link to="/signup/customer" className="navbar-item">
                      <span className="signup-item">Sign up as Customer</span>
                    </Link>
                    <Link to="/signup/owner" className="navbar-item">
                      <span className="signup-item">Sign up as Owner</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="navbar-item">
              <button className="button is-primary" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
