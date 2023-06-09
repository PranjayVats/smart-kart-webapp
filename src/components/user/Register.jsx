import React, { useEffect, useState } from "react";
import RegisterImg from "../../assets/images/login.webp";
import { toast } from "react-toastify";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./User.module.css";
import { useFormik } from "formik";
import { registerSchema } from "../../assets/data/schema";
import { addUser } from "../../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
function Register() {
  const dispatch = useDispatch();
  const toastifySuccess = () => {
    toast.success("Registered Successfully", {
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
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        dispatch(addUser(values));
        action.resetForm();
        toastifySuccess();
        setRegister(true);
      },
    });

  const [register, setRegister] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (register) return navigate("/");
  }, [navigate, register]);

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="name"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? (
          <span className={styles.formError}>{errors.name}</span>
        ) : null}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="xyz@gmail.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <span className={styles.formError}>{errors.email}</span>
        ) : null}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <span className={styles.formError}>{errors.password}</span>
        ) : null}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm_password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirm_password && touched.confirm_password ? (
          <span className={styles.formError}>{errors.confirm_password}</span>
        ) : null}
      </div>
      <button type="submit" className={styles.submitBtn}>
        Register
      </button>
    </form>
  );
}

export default Register;
