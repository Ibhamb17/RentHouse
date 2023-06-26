import React, { useEffect } from "react";
import Layout from "./Layout";
// import FormEditUser from "../components/FormEditUser";
// import { useDispatch} from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import FormPengaturanAkun from "../components/FormPengaturanAkun";

const EditPengaturanAkun = () => {
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
    if (user && user.role === "ts" )  {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <FormPengaturanAkun />
    </Layout>
  );
};

export default EditPengaturanAkun;
