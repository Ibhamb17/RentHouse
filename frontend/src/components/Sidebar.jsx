// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { IoPerson, IoNewspaperSharp, IoHome, IoLogOut,IoCalendar, IoBook, IoSettingsSharp } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { LogOut, reset } from "../features/authSlice";
// import logo from "../dp.png";

// const Sidebar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);

  
//   const logout = () => {
//     dispatch(LogOut());
//     dispatch(reset());
//     navigate("/");
//   };

//   return (
//     <div>
//       <aside className="menu pl-2 has-shadow">
//               <img src={logo} width="200" height="100" alt="logo" />
//         <form action="">
//           <ul>
//             <li><center>
            
//             </center></li>
//             <li><center>{user && user.name}</center></li>
//             <li><center>({user && user.role})</center></li>
//             <li><center>{user && user.nim}</center></li>
//           </ul>
//         </form>
//         <p className="menu-label">General</p>
//         <ul className="menu-list">
//           <li>
//             <NavLink to={"/dashboard"}>
//               <IoHome /> Dashboard
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to={"/materigeneral"}>
//               <IoNewspaperSharp /> Materi
//             </NavLink>
//           </li>
//         </ul>

//         {user && user.role === "dosen" && (
//           <div>
//             <p className="menu-label">Dosen</p>
//             <ul className="menu-list">
//               <li>
//                 <NavLink to={"/managemateri"}>
//                   < IoBook /> Manage Materi
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/jadwal"}>
//                   <IoCalendar /> Jadwal Mata Kuliah
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         )}

//         {user && user.role === "admin" && (
          
//           <div>
//             <p className="menu-label">Admin</p>
//             <ul className="menu-list">
//             <li>
//                 <NavLink to={"/managemateri"}>
//                   <IoCalendar /> Manage Jadwal Mengajar
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/users"}>
//                   <IoPerson /> Users
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
          
//         )}

//         <p className="menu-label">Settings</p>
//         <ul className="menu-list"><li>
//               <li>
//                 <NavLink to={`/pengaturanakun/edit/:id`}>
//                   <IoSettingsSharp /> Akun
//                 </NavLink>
//               </li>
//           </li>
//           <li>
//             <button onClick={logout} className="button is-white">
//               <IoLogOut /> Logout
//             </button>
//           </li>
//         </ul>
//       </aside>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoNewspaperSharp, IoHome, IoLogOut, IoCalendar, IoBook, IoSettingsSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import './sidebar.css';
import './Header/Header.js'

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <section id="sidebar">
      <ul className="side-menu top">
        <li className="active">
          <NavLink to="/dashboard">
            <i className='bx bxs-dashboard' ></i>
            <span className="text">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/managekontrakan">
            <i className='bx bxs-shopping-bag-alt' ></i>
            <span className="text">My Properties</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            <i className='bx bxs-doughnut-chart' ></i>
            <span className="text">User List</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/managebookings">
            <i className='bx bxs-message-dots' ></i>
            <span className="text">Booking Request</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">
            <i className='bx bxs-group' ></i>
            <span className="text">Team</span>
          </NavLink>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <NavLink to="/dashboard">
            <i className='bx bxs-cog' ></i>
            <span className="text">Settings</span>
          </NavLink>
        </li>
        <li>
          <a href="#" className="logout" onClick={logout}>
            <i className='bx bxs-log-out-circle' ></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
