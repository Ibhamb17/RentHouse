import React, { useEffect } from "react";
import Layout from "./Layout";
import Propertydetail from "../components/kontrakandetails";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const PropertyDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/kontrakan/:kontrakanId");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <Propertydetail />
    </Layout>
  );
};

export default PropertyDetail;
