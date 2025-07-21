import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import BuySellContainer from "./BuySellContainer";  // Import here
import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Growth Over Years",
        data: [30, 40, 40, 55, 40, 55, 65, 72],
        borderColor: "#00bcd4",
        backgroundColor: "#00bcd4",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#00bcd4",
        borderWidth: 3,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          color: "#444",
        },
        grid: {
          color: "#ddd",
        },
      },
      x: {
        ticks: {
          color: "#444",
        },
        grid: {
          color: "#eee",
        },
      },
    },
  };

  return (
    <div className="dashboard-wrapper">
      <h2 className="platform-title">VIRTUAL ASSETS TRAINING PLATFORM</h2>

      <div className="dashboard-container">
        <div className="text-section">
          <h3>USDT Coin</h3>
          <p>
            Tether (USDT) is a stablecoin that is pegged to the U.S. Dollar on a
            1:1 basis. This means 1 USDT is designed to always be worth
            approximately 1 USD. It was launched by Tether Ltd. and is widely
            used in the cryptocurrency ecosystem for trading, hedging, and
            transferring value without the volatility of other digital assets.
          </p>
        </div>

        <div className="chart-section">
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Add BuySellContainer below the chart and text */}
      <BuySellContainer />
    </div>
  );
};

export default Dashboard;
