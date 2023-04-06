import React, { useEffect, useState } from "react";
import LoginImg from "../../assets/images/login.webp";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import styles from "./User.module.css";
import { useFormik } from "formik";
import { forgetPasswordSchema } from "../../assets/data/schema";
import { useDispatch } from "react-redux";

const initialValues = {
  email: "",
};
function ForgotPassword() {
  const dispatch = useDispatch();
  const toastifySuccess = () => {
    toast.success("Password Mailed Sent Successfully", {
      position: "top-center",
      autoClose: 1500,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
      theme: "colored",
    });
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: forgetPasswordSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        toastifySuccess();
      },
    });
  return (
    <div className={styles.forgotPassword}>
      <div className={styles.forgotPasswordImgDiv}>
        <img
          src={LoginImg}
          className={styles.forgotPasswordImg}
          loading="lazy"
          alt=""
        />
      </div>
      <div className={styles.forgotPasswordBox}>
        <form className={styles.forgotPasswordForm} onSubmit={handleSubmit}>
          <p className={styles.forgotPasswordHead}>Forgot Password</p>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <span className={styles.formError}>{errors.email}</span>
            ) : null}
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
