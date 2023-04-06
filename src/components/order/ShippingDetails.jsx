import React, { useState } from "react";
import LoginImg from "../../assets/images/login.webp";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ShippingDetails.module.css";
import { useFormik } from "formik";
import { shippingSchema } from "../../assets/data/schema";
import { useDispatch } from "react-redux";

const initialValues = {
  recipientName: "",
  phoneNumber: "",
  address: "",
  city: "",
  pincode: "",
  state: "",
  country: "",
};
function ShippingDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let shippingDetails;
  const toastifySuccess = () => {
    toast.success("Shipping Details stored successfully", {
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
      validationSchema: shippingSchema,
      onSubmit: (values, action) => {
        shippingDetails = values;
        action.resetForm();
        toastifySuccess();
        navigate("/confirmOrder", {
          state: shippingDetails,
          replace: true,
        });
      },
    });
  return (
    <div className={styles.shipping}>
      <div className={styles.shippingImgDiv}>
        <img
          src={LoginImg}
          className={styles.shippingImg}
          loading="lazy"
          alt=""
        />
      </div>

      <div className={styles.shippingBox}>
        <form className={styles.shippingForm} onSubmit={handleSubmit}>
          <p className={styles.shippingHead}>Shipping</p>
          <div>
            <label>Recipient Name</label>
            <input
              type="text"
              name="recipientName"
              value={values.recipientName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.recipientName && touched.recipientName ? (
              <span className={styles.formError}>{errors.recipientName}</span>
            ) : null}
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <span className={styles.formError}>{errors.phoneNumber}</span>
            ) : null}
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address && touched.address ? (
              <span className={styles.formError}>{errors.address}</span>
            ) : null}
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.city && touched.city ? (
              <span className={styles.formError}>{errors.city}</span>
            ) : null}
          </div>
          <div>
            <label>Pin Code</label>
            <input
              type="text"
              name="pincode"
              value={values.pincode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.pincode && touched.pincode ? (
              <span className={styles.formError}>{errors.pincode}</span>
            ) : null}
          </div>
          <div>
            <label>State</label>
            <input
              type="text"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.state && touched.state ? (
              <span className={styles.formError}>{errors.state}</span>
            ) : null}
          </div>
          <div>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.country && touched.country ? (
              <span className={styles.formError}>{errors.country}</span>
            ) : null}
          </div>
          <button type="submit" className={styles.submitBtn}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShippingDetails;
