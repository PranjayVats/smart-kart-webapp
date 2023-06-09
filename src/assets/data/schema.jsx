import * as Yup from "yup";
const CATEGORIES = ["Electronics", "Shoes", "Attire", "Clothes"];
const SUPPORTED_FORMATS = ["jpg", "image/jpeg", "image/gif", "image/png"];
export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});
export const registerSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
export const forgetPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});
export const shippingSchema = Yup.object({
  recipientName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter recipient name"),
  phoneNumber: Yup.string()
    .min(10, "Phone number must have 10 digits")
    .max(10, "Phone number must have 10 digits")
    .matches(/^[0-9]/, "Phone number is not valid")
    .required("Please enter your phone number"),
  address: Yup.string().min(10).max(50).required("Please enter your address"),
  city: Yup.string().min(3).max(20).required("Please enter your city"),
  pincode: Yup.string()
    .min(6)
    .max(6)
    .matches(/^[0-9]/)
    .required("Please enter your pin code"),
  state: Yup.string().min(3).max(20).required("Please enter your state"),
  country: Yup.string().min(3).max(20).required("Please enter your country"),
});

export const createProductSchema = Yup.object().shape({
  name: Yup.string().min(2).max(25).required("Please provide product name"),
  price: Yup.number().required("Please provide product price"),
  description: Yup.string()
    .min(10)
    .required("Please provide product description"),
  category: Yup.string().required("Please provide product category"),
  file: Yup
    .mixed()
    .required("A file is required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});
