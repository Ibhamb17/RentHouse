import { NavLink, useParams } from "react-router-dom";
import { IoNewspaperSharp, IoHome} from "react-icons/io5";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./sidebar.css";
import "../Header/Header.js";

const Sidebar = () => {
  const [kontrakans, setKontrakans] = useState([]);
  const { id } = useParams();
  const [setMsg] = useState("");

  useEffect(() => {
    const getKontrakanById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/kontrakan/${id}`);
        response.data.json(kontrakans);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getKontrakanById();
  }, [id, kontrakans, setMsg]);

  useEffect(() => {
    getKontrakans();
  }, []);

  const getKontrakans = async () => {
    const response = await axios.get("http://localhost:5000/kontrakanowner");
    setKontrakans(response.data);
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <form action="">
        </form>
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={`/managekontrakan/edit/${id}`}>
              <IoHome /> Data kontrakaan
            </NavLink>
          </li>
          <li>
            <NavLink to={`/uploadgambar/${id}`}>
              <IoNewspaperSharp /> Gambar
            </NavLink>
          </li>
        </ul>

      </aside>
    </div>
  );
};

export default Sidebar;
