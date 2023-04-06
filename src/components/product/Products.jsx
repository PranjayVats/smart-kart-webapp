import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filterProduct } from "../../store/slices/ProductSlice";
import NoProductFound from "../../assets/images/no-product-found.png";
import styles from "./Products.module.css";
import Loading from "../layout/loading/Loading";
import { BsFilterRight } from "react-icons/bs";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Pagination from "react-responsive-pagination";
import "./Pagination.css";
import "./Slider.css";

const Products = () => {
  const dispatch = useDispatch();
  const { filterProducts } = useSelector((state) => {
    return state.product;
  });
  const [filterData, setFilterData] = useState([]);
  const options = [
    { value: "Electronics", label: "Electronics" },
    { value: "Shoes", label: "Shoes" },
    { value: "Clothes", label: "Clothes" },
  ];
  const [rate, setRate] = useState(0);
  const [price, setPrice] = useState([0, 0]);
  const [category, setCategory] = useState("");

  function applyFilter()  {
    const filterInput = {
      filterPrice: [price[0], price[1]],
      filterRating: rate,
      filterCategory: category,
    };
    dispatch(filterProduct(filterInput));
  };
  function resetFilter() {
    setCategory("");
    setRate(0);
    setPrice([0, 0]);
  };
  const [totalPage, setTotalPage] = useState(0);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage =3;
  useEffect(() => {
    setFilterData(filterProducts);
    const num = Math.ceil(filterData.length / 3);
    setTotalPage(num);
    setCurrentPage(1);
  }, [dispatch, filterProducts, filterData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    // <Fragment>
    //   {filterData === undefined ? (
    //     <Loading />
    //   ) : (
        <div className={styles.productsPage}>
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
          {currentItems.length != 0 ? (
            <div className={styles.productsContainer}>
              <h1>Products</h1>

              <div className={styles.productsList}>
                {currentItems &&
                  currentItems.map((p) => (
                    <Link
                      key={p.id}
                      className={styles.productCard}
                      to={`/product/${p.id}`}
                    >
                      <figure className={styles.productImage}>
                        <img src={p.url[0]} alt="" loading="lazy" />
                        <figcaption>{p.name}</figcaption>
                      </figure>
                      <div className={styles.overlay}>
                        <h2>{p.name}</h2>
                        <p>{p.category}</p>
                        <p>{p.price}</p>
                      </div>
                    </Link>
                  ))}
              </div>

              <Pagination
                total={totalPage}
                current={currentPage}
                pageSize={itemsPerPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          ) : (
            <>
              <figure className={styles.noProduct}>
                <img src={NoProductFound} alt="" loading="lazy" />
                <figcaption>
                  <h2>No Product Found</h2>
                </figcaption>
              </figure>
            </>
          )}
        </div>
    //   )}
    // </Fragment>
  );
};

export default Products;
