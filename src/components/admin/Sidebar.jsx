import React from "react";
import styles from "./Dashboard.module.css";
import { FiChevronDown } from "react-icons/fi";

function Sidebar() {
  return (
    <ul className={styles.sidebar}>
      <li>Dashboard</li>
      <li>
        <details>
          <summary>Products&nbsp;<FiChevronDown/></summary>
          <ul>
            <li>All</li>
            <li>Create</li>
          </ul>
        </details>
      </li>
      <li>Orders</li>
      <li>Users</li>
      <li>Reviews</li>
    </ul>
  );
}

export default Sidebar;
