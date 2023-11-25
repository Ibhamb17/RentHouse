// import React from "react";
// import { useSelector } from "react-redux";
// import { NavLink} from "react-router-dom";

// const Welcome = () => {
//   const { user } = useSelector((state) => state.auth);
//   return (
// <>
// <div>
//       <h1 className="title has-text-centered">Dashboard</h1>
//       <h2 className="subtitle">
//         Selamat Datang, <strong>{user && user.name}</strong>
//       </h2> 
//     </div>
//     <section className="section has-background-light is-clickable">
//     <div className="container ">
//       <div className="title has-text-centered is-size-4">
//         <div className="columns mt-5 is-8 is-variable is-justify-content-center">
//           <div className="column is-4-tablet is-3-desktop ">
//           <NavLink to={"/materigeneral"}>
//             <div className="card has-background-primary-light">
//               <div className="card-image has-text-centered px-6">
//               </div>
//               <div className="card-content">Lihat Materi</div>
//               <div className="title is-size-5"></div>
//             </div>
//             </NavLink>
//           </div>
//           {user && user.role === "dosen" && (
//           <div className="column is-4-tablet is-3-desktop ">
//           <NavLink to={"/managemateri"}>
//             <div className="card has-background-primary-light">
//               <div className="card-image has-text-centered px-6">
//               </div>
//               <div className="card-content">Manage Materi</div>
//               <div className="title is-size-5"></div>
//             </div>
//             </NavLink>
//           </div>)}

//           {user && user.role === "admin" && ( 
//           <div className="column is-4-tablet is-3-desktop ">
//           <NavLink to={"/users"}>
//             <div className="card has-background-primary-light">
//               <div className="card-image has-text-centered px-6">
//               </div>
//               <div className="card-content">Data Users</div>
//               <div className="title is-size-5"></div>
//             </div>
//             </NavLink>
//           </div>)}

//         <div className="column is-4-tablet is-3-desktop ">
//           <NavLink to={"/pengaturanakun"}>
//             <div className="card has-background-primary-light">
//               <div className="card-image has-text-centered px-6">
//               </div>
//               <div className="card-content">Pengaturan</div>
//               <div className="title is-size-5"></div>
//             </div>
//             </NavLink>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   </section>
//   </>
//   );
// };

// export default Welcome;

import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    
    <>

      <section id="content">
      <nav>
        <i className="bx bx-menu"></i>
        <a href="#" className="nav-link">Categories</a>
        <form action="#">
          <div className="form-input">
            <input type="search" placeholder="Search..." />
            <button type="submit" className="search-btn">
              <i className="bx bx-search"></i>
            </button>
          </div>
        </form>
        <input type="checkbox" id="switch-mode" hidden />
        <label htmlFor="switch-mode" className="switch-mode"></label>
        <a href="#" className="notification">
          <i className="bx bxs-bell"></i>
          <span className="num">8</span>
        </a>
        <a href="#" className="profile">
          <img src="img/people.png" alt="Profile" />
        </a>
      </nav>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li><i className="bx bx-chevron-right"></i></li>
              <li>
                <a className="active" href="#">Home</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-download">
            <i className="bx bxs-cloud-download"></i>
            <span className="text">Download PDF</span>
          </a>
        </div>
        <ul className="box-info">
          <li>
            <i className="bx bxs-calendar-check"></i>
            <span className="text">
              <h3>1020</h3>
              <p>New Order</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-group"></i>
            <span className="text">
              <h3>2834</h3>
              <p>Visitors</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-dollar-circle"></i>
            <span className="text">
              <h3>$2543</h3>
              <p>Total Sales</p>
            </span>
          </li>
        </ul>
        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Recent Orders</h3>
              <i className="bx bx-search"></i>
              <i className="bx bx-filter"></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Date Order</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status completed">Completed</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status process">Process</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status completed">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="todo">
            <div className="head">
              <h3>Todos</h3>
              <i className="bx bx-plus"></i>
              <i className="bx bx-filter"></i>
            </div>
            <ul className="todo-list">
              <li className="completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </section>
    </>
  );
};


export default Welcome;
