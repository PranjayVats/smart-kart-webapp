import React from "react";
import styles from "./Dashboard.module.css";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import Sidebar from "./Sidebar";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  LineElement
);
function Dashboard() {
  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["rgb(	255,99,71)"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 10000],
      },
    ],
  };
  const doughnutState = {
    labels: ["Out Of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A684", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [100, 4000],
      },
    ],
  };
  return (
    <div className={styles.dashboardPage}>
        <Sidebar/>
      <hr />
      <div className={styles.mainDashboard}>
        <h1>Dashboard</h1>
        <h2>Total Amount: ₹ 13847.50</h2>
        <ul>
          <li>
            <p>Products</p>
            <p>10</p>
          </li>
          <li>
            <p>Users</p>
            <p>10</p>
          </li>
          <li>
            <p>Orders</p>
            <p>10</p>
          </li>
        </ul>
        <div className={styles.chart}>
          <Line data={lineState} />
        </div>
        <div className={styles.chart}>
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
