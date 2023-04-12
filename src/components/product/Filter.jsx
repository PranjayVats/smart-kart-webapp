import React, { Fragment, useEffect, useState } from "react";
import { BsFilterRight, BsFilterLeft } from "react-icons/bs";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import Select from "react-select";
import RangeSlider from "react-range-slider-input";
import { filterProduct } from "../../store/slices/ProductSlice";
import "react-range-slider-input/dist/style.css";
import "./Slider.css";
import { useDispatch } from "react-redux";
import styles from "./Products.module.css";

function Filter() {
  const dispatch = useDispatch();
  const options = [
    { value: "Electronics", label: "Electronics" },
    { value: "Shoes", label: "Shoes" },
    { value: "Clothes", label: "Clothes" },
  ];
  const [rate, setRate] = useState(0);
  const [price, setPrice] = useState([0, 0]);
  const [category, setCategory] = useState("");

  function applyFilter() {
    const filterInput = {
      filterPrice: [price[0], price[1]],
      filterRating: rate,
      filterCategory: category,
    };
    dispatch(filterProduct(filterInput));
  }
  function resetFilter() {
    setCategory("");
    setRate(0);
    setPrice([0, 0]);
  }
  const [sidebar, setSidebar] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  function handleResize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    if (width <= 900) {
      setSidebar(true);
    } else {
      setSidebar(false);
      setOpenSidebar(false);
    }
    window.addEventListener("resize", handleResize);
  }, [width, handleResize]);
  return (
    <Fragment>
      <BsFilterLeft
        className={styles.filterSidebar}
        onClick={() => setOpenSidebar(true)}
      />
      {openSidebar ? (
        <div className={styles.productsFilterSidebar}>
          <div className={styles.filterHeader}>
            <h4>Filters</h4>
            <VscChromeClose
              className={styles.filterCloseIcon}
              onClick={() => setOpenSidebar(false)}
            />
          </div>
          <hr />
          <div className={styles.priceFilter}>
            <h3>Price Range</h3>
            <div className={styles.priceRange}>
              <RangeSlider
                step="2500"
                min={0}
                value={price}
                max={50000}
                id="range-slider-yellow"
                onInput={setPrice}
              />
            </div>
            <span>
              Min Price: <strong>₹ {price[0]}</strong>
            </span>
            <span>
              Max Price: <strong>₹ {price[1]}</strong>
            </span>
          </div>
          <hr />
          <div className={styles.ratingFilter}>
            <h3>Rating</h3>
            <div>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  onClick={() => setRate(i + 1)}
                  className={styles.rateStars}
                >
                  {rate > i ? <RiStarFill /> : <RiStarLine />}
                </span>
              ))}
            </div>
          </div>
          <hr />
          <div className={styles.categoryFilter}>
            <h3>Category</h3>
            <Select
              className={styles.categorySelect}
              placeholder="Select category"
              options={options}
              isClearable={false}
              value={category}
              onChange={setCategory}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary: "#103E70",
                },
              })}
            />
          </div>
          <div className={styles.filterBtn}>
            <button onClick={applyFilter}>Apply Filter</button>
            <button onClick={resetFilter}>Reset Filters</button>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className={styles.productsFilter}>
        <div className={styles.filterHeader}>
          <h2>Filters</h2>
          <BsFilterRight className={styles.filterIcon} />
        </div>
        <hr />
        <div className={styles.priceFilter}>
          <h3>Price Range</h3>
          <div className={styles.priceRange}>
            <RangeSlider
              step="2500"
              min={0}
              value={price}
              max={50000}
              id="range-slider-yellow"
              onInput={setPrice}
            />
          </div>
          <span>
            Min Price: <strong>₹ {price[0]}</strong>
          </span>
          <span>
            Max Price: <strong>₹ {price[1]}</strong>
          </span>
        </div>
        <hr />
        <div className={styles.ratingFilter}>
          <h3>Rating</h3>
          <div>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                onClick={() => setRate(i + 1)}
                className={styles.rateStars}
              >
                {rate > i ? <RiStarFill /> : <RiStarLine />}
              </span>
            ))}
          </div>
        </div>
        <hr />
        <div className={styles.categoryFilter}>
          <h3>Category</h3>
          <Select
            className={styles.categorySelect}
            placeholder="Select category"
            options={options}
            isClearable={false}
            value={category}
            onChange={setCategory}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "#103E70",
              },
            })}
          />
        </div>
        <div className={styles.filterBtn}>
          <button onClick={applyFilter}>Apply Filter</button>
          <button onClick={resetFilter}>Reset Filters</button>
        </div>
      </div>
    </Fragment>
  );
}

export default Filter;
