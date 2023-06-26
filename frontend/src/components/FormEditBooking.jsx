import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditUser = () => {
  const [status_booking, setStatusbooking] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getBookingId = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/bookings/${id}`);
        setStatusbooking(response.data.status_booking);;
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getBookingId();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/bookings/${id}`, {
        status_booking: status_booking,
      });
      navigate("/managebooking");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">Update User</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Konfirmasi</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      placeholder="isi role"
                      value={status_booking}
                      onChange={(e) => setStatusbooking(e.target.value)}
                    >
                      <option value="">-pending </option>
                      <option value="pending">pending</option>
                      <option value="confirmed">confirmed</option>
                      <option value="canceled">canceled</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
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

export default FormEditUser;
