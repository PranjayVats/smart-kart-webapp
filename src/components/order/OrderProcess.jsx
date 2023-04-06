import React, { useState } from "react";
import ForgotPassword from "../user/ForgotPassword";
import styles from "./OrderProcess.module.css";

function OrderProcess() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const [activeTab, setActiveTab] = useState("Shipping");
  let output;
  switch (activeTab) {
    case "Shipping":
      output = (
        <div>
          <ForgotPassword />
        </div>
      );
      break;
    case "Confirm":
      output = <div>Some Data</div>;
      break;
    case "Payment":
      output = <div>No Data</div>;
      break;
    default:
      output = <div>Please select an option</div>;
      break;
  }
  const handleTab1 = () => {
    setActiveTab("Shipping");
  };
  const handleTab2 = () => {
    setActiveTab("Confirm");
  };
  const handleTab3 = () => {
    setActiveTab("Payment");
  };
  return (
    <div className={styles.shippingPage}>
      <div className={styles.tabs}>
        <ul>
          <li
            className={activeTab === "Shipping" ? styles.active : ""}
            onClick={handleTab1}
          >
            <span>Shipping Details</span>
          </li>
          <li
            className={activeTab === "Confirm" ? styles.active : ""}
            onClick={handleTab2}
          >
            <span>Confirm Order</span>
          </li>
          <li
            className={activeTab === "Payment" ? styles.active : ""}
            onClick={handleTab3}
          >
            <span>Payment</span>
          </li>
        </ul>
      </div>
      <div className={styles.tabData}>{output}</div>
    </div>
  );
}

export default OrderProcess;
