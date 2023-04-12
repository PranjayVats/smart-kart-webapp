import React, { useEffect, useState } from "react";
import RegisterImg from "../../assets/images/login.webp";
import { toast } from "react-toastify";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./CreateProduct.module.css";
import { useFormik } from "formik";
import { createProductSchema} from "../../assets/data/schema";

const initialValues = {
  name: "",
  price: 0,
  description: "",
  category: "Shoes",
  file:undefined
};

function CreateProduct() {const toastifySuccess = () => {
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
      validationSchema: createProductSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        toastifySuccess();
        setRegister(true);
      },
    });

  const [register, setRegister] = useState(false);
  const navigate = useNavigate();
  
  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
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
        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="xyz@gmail.com"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.price && touched.price ? (
          <span className={styles.formError}>{errors.price}</span>
        ) : null}
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.description && touched.description ? (
          <span className={styles.formError}>{errors.description}</span>
        ) : null}
      </div>
      <div>
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.category && touched.category ? (
          <span className={styles.formError}>{errors.category}</span>
        ) : null}
      </div>
      <div>
        <label>Upload Images</label>
        <input
          type="file"
          name="file"
          value={values.file}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.file && touched.file ? (
          <span className={styles.formError}>{errors.file}</span>
        ) : null}
      </div>
      <button type="submit" className={styles.submitBtn}>
        Register
      </button>
    </form>
  );
}

export default CreateProduct;
