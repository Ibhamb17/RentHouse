import React, { useEffect } from "react";
import Layoutkos from "./Layoutkos";
import Welcome from "../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/managekontrakan");
    }
  }, [isError, navigate]);

  return (
    <Layoutkos>
      
    </Layoutkos>
  );
};

export default Dashboard;
