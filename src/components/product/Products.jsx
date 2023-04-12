import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiStarFill } from "react-icons/ri";
import { filterProduct } from "../../store/slices/ProductSlice";
import NoProductFound from "../../assets/images/no-product-found.png";
import styles from "./Products.module.css";
import Loading from "../layout/loading/Loading";
import { useSelector } from "react-redux";
import Pagination from "react-responsive-pagination";
import "./Pagination.css";
import { FaShoppingCart } from "react-icons/fa";
import Filter from "./Filter";

const Products = () => {
  const { filterProducts } = useSelector((state) => {
    return state.product;
  });
  const [filterData, setFilterData] = useState([]);

  const [totalPage, setTotalPage] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  useEffect(() => {
    setFilterData(filterProducts);
    const num = Math.ceil(filterData.length / 9);
    setTotalPage(num);
    setCurrentPage(1);
  }, [filterProducts, filterData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.productsPage}>
      <Filter />
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
                    <p>{p.ratings} <RiStarFill/></p>
                    <p>MRP: <s>₹ {p.oldPrice}</s></p>
                    <h3>₹ {p.price}</h3>
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
  );
};

export default Products;
