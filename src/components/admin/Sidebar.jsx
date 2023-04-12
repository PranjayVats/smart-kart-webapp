import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { FiChevronDown } from "react-icons/fi";

function Sidebar() {
  const [openProduct, setOpenProduct] = useState(false);
  return (
    <ul className={styles.sidebar}>
      <li>Dashboard</li>
      <li className={styles.product} >
        <span onClick={() => setOpenProduct(!openProduct)}>
          Products&nbsp;
          <FiChevronDown />
        </span>
        {openProduct ? (
          <ul>
            <li>All</li>
            <li>Create</li>
          </ul>
        ) : (
          <></>
        )}
      </li>
      <li>Orders</li>
      <li>Users</li>
      <li>Reviews</li>
    </ul>
  );
}

export default Sidebar;
