import React, { useEffect } from "react";
import Layoutkos from "./tambah-kontrakan/Layout-tambah-kontrakan";
import FormAddKontrakan from "../components/FormAddKontrakan";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddKontrakan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }if (user && user.role !== "owner") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
  return (
    <Layoutkos>
      <FormAddKontrakan />
    </Layoutkos>
  );
};

export default AddKontrakan;
