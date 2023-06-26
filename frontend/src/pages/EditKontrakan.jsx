import React, { useEffect } from "react";
import Layout from "./Layout";
import FormEditKontrakan from "../components/FormEditKontrakan";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const EditKontrakan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    // if (user && user.role !== "admin") {
    //   navigate("/dashboard");
    // }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <FormEditKontrakan />
    </Layout>
  );
};

export default EditKontrakan;
