import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { CgShoppingCart } from "react-icons/cg";
import { MdMenu } from "react-icons/md";
import Logo from "../../../assets/images/logo1.png";
import { useSelector } from "react-redux";

function Navbar() {
  const location = useLocation();
  const [selectedSearch, setSelectedSearch] = useState(null);
  const { products } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const cartItemsCount = cartItems.length;
  const navigate = useNavigate();
  const options = [];
  products.forEach((element) => {
    const obj = {
      value: element.id,
      label: element.name,
    };
    options.push(obj);
  });
  const handleSearch = (selectedOption) => {
    setSelectedSearch(selectedOption);
  };
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (selectedSearch != null) {
      navigate(`/product/${selectedSearch.value}`);
      setSelectedSearch(null);
    }
  }, [selectedSearch, navigate]);
  useEffect(() => {
    setOpenMenu(false);
  }, [location]);

  const [width, setWidth] = useState(window.innerWidth);
  function handleResize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width, handleResize]);
  return (
    <nav className="navbar">
      <div className="burgerMenu">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={Logo} loading="lazy" alt="" />
        </Link>
        <MdMenu onClick={() => setOpenMenu(!openMenu)} />
      </div>
      {openMenu && width <= 750 ? (
        <ul className="navbar-nav">
          <div className="searchBox">
            <Select
              placeholder="Search products"
              defaultValue={selectedSearch}
              onChange={handleSearch}
              options={options}
              isClearable={true}
              isSearchable={true}
            />
          </div>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              PRODUCTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login-register"
              className="nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              LOGIN
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cart"
              className="nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="cartBadge">
                <CgShoppingCart className="cartIcon" />
                <span className="badge">{cartItemsCount}</span>
              </div>
            </Link>
          </li>
        </ul>
      ) : (
        <></>
      )}

      <Link
        to="/"
        className="navbar-logo"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src={Logo} loading="lazy" alt="" />
      </Link>

      <div className="rightPart">
        <div className="searchBox">
          <Select
            placeholder="Search products"
            defaultValue={selectedSearch}
            onChange={handleSearch}
            options={options}
            isClearable={true}
            isSearchable={true}
          />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              PRODUCTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login-register"
              className="nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              LOGIN
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cart"
              className="nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="cartBadge">
                <CgShoppingCart className="cartIcon" />
                <span className="badge">{cartItemsCount}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
