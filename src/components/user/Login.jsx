import React, { useEffect, useState } from "react";
import LoginImg from "../../assets/images/login.webp";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import styles from "./User.module.css";
import { useFormik } from "formik";
import { loginSchema } from "../../assets/data/schema";
import { addUser } from "../../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};
function Login() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toastifySuccess = () => {
    toast.success("Login Successfully", {
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
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        dispatch(addUser(values));
        action.resetForm();
        toastifySuccess();
        setLogin(true);
      },
    });

  useEffect(() => {
    if (login) return navigate("/");
  }, [navigate, login]);

  return (
    <form className={styles.loginForm}>
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
      <Link to="/forgotPassword" className={styles.forgetBtn}>
        Forget Password
      </Link>
      <button className={styles.submitBtn} onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}

export default Login;
