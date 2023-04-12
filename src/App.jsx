import "./App.css";
import React, { Fragment, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import Background from "./components/layout/Background";
import { data } from "./assets/data/productsData";
import { useDispatch } from "react-redux";
import { addProduct } from "./store/slices/ProductSlice";
import Loading from "./components/layout/loading/Loading";
import Error404 from "./components/layout/error404/error404";
import LoginRegister from "./components/user/LoginRegister";
import Filter from "./components/product/Filter";
import CreateProduct from "./components/admin/CreateProduct";
const Footer = lazy(() => import("./components/layout/footer/Footer"));
const Login = lazy(() => import("./components/user/Login"));
const Register = lazy(() => import("./components/user/Register"));
const Products = lazy(() => import("./components/product/Products"));
const Product = lazy(() => import("./components/product/Product"));
const Cart = lazy(() => import("./components/cart/Cart"));
const ForgotPassword = lazy(() => import("./components/user/ForgotPassword"));
const OrderProcess = lazy(() => import("./components/order/OrderProcess"));
const ShippingDetails = lazy(() =>
  import("./components/order/ShippingDetails")
);
const ConfirmOrder = lazy(() => import("./components/order/ConfirmOrder"));
const Dashboard = lazy(() => import("./components/admin/Dashboard"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    data.map((product) => dispatch(addProduct(product)));
  }, [dispatch]);
  return (
    <Fragment>
      <ToastContainer />
      <Router>
        {" "}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/login-register"
            element={
              <Suspense fallback={<Loading />}>
                <>
                  <Navbar />
                  <LoginRegister />
                  <Footer />
                </>
              </Suspense>
            }
          ></Route>
          <Route
            path="/forgotPassword"
            element={
              <Suspense fallback={<Loading />}>
                <>
                  <Navbar />
                  <ForgotPassword />
                  <Footer />
                </>
              </Suspense>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <Suspense fallback={<Loading />}>
                <>
                  <Navbar />
                  <Products />
                  <Footer />
                </>
              </Suspense>
            }
          ></Route>
          <Route
            path="/product/:id"
            element={
              <Suspense fallback={<Loading />}>
                <>
                  <Navbar />
                  <Product />
                  <Footer />
                </>
              </Suspense>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Suspense fallback={<Loading />}>
                <>
                  <Navbar />
                  <Cart />
                  <Footer />
                </>
              </Suspense>
            }
          ></Route>
          <Route
            path="/orderProcess"
            element={
              <Suspense fallback={<Loading />}>
                <>
                  <Navbar />
                  <OrderProcess />
                  <Footer />
                </>
              </Suspense>
            }
          ></Route>
          <Route
            path="/shippingDetails"
            element={
              <Suspense fallback={<Loading />}>
                <>
                  <Navbar />
                  <ShippingDetails />
                  <Footer />
                </>
              </Suspense>
            }
          ></Route>
          <Route
            path="/confirmOrder"
            element={
              <Suspense fallback={<Loading />}>
                <>
                  <Navbar />
                  <ConfirmOrder />
                  <Footer />
                </>
              </Suspense>
            }
          ></Route>
          <Route
            path="/admin/dashboard"
            element={
              <Suspense fallback={<Loading />}>
                <>
                  <Navbar />
                  <Dashboard />
                  <Footer />
                </>
              </Suspense>
            }
          ></Route>
          <Route
            path="/admin/createProduct"
            element={
              <Suspense fallback={<Loading />}>
                <>
                  <Navbar />
                  <CreateProduct />
                  <Footer />
                </>
              </Suspense>
            }
          ></Route>
          <Route path="/background" element={<Background />}></Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <Error404 />
              </Suspense>
            }
          ></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
