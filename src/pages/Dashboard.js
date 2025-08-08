import React, { useState, useEffect } from "react";
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

import BuySellContainer from "./BuySellContainer";  // Adjust path if needed
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
  // Initialize with some historical years and default data
  const initialLabels = ["2020", "2021", "2022", "2023", "2024", "2025"];
  const initialDataPoints = [30, 40, 40, 55, 40, 55, 65, 72];  // Dummy initial data

  // State for chart data & labels
  const [chartData, setChartData] = useState({
    labels: initialLabels,
    datasets: [
      {
        label: "USDT Price Over Time (USD)",
        data: initialDataPoints,
        borderColor: "#d4af37",          // gold color
        backgroundColor: "#f0c419",      // brighter gold for background/fill (if enabled)
        pointBackgroundColor: "#d4af37", // gold points background
        pointBorderColor: "#f0c419",     // brighter gold points border
        borderWidth: 3,
        fill: false,
        tension: 0.4,

      },
    ],
  });

  useEffect(() => {
    // Function to fetch USDT price from CoinGecko API
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd"
        );
        const data = await response.json();
        const currentPrice = data.tether.usd;

        // Prepare new label as current date (formatted)
        const now = new Date();
        const formattedLabel = now.toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        setChartData((prevData) => {
          // Copy previous labels and data array
          let newLabels = [...prevData.labels];
          let newDataPoints = [...prevData.datasets[0].data];

          // Append new label and price
          newLabels.push(formattedLabel);
          newDataPoints.push(currentPrice);

          // Optional: Limit array lengths, e.g. max last 10 entries
          if (newLabels.length > 10) newLabels.shift();
          if (newDataPoints.length > 10) newDataPoints.shift();

          return {
            ...prevData,
            labels: newLabels,
            datasets: [
              {
                ...prevData.datasets[0],
                data: newDataPoints,
              },
            ],
          };
        });
      } catch (error) {
        console.error("Failed to fetch USDT price:", error);
      }
    };

    // Fetch immediately on component mount
    fetchPrice();

    // Set interval to fetch daily (86400000 ms = 24h)
    const intervalId = setInterval(fetchPrice, 86400000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Chart options (as before)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: false,
        ticks: { stepSize: 0.1, color: "#444" },
        grid: { color: "#ddd" },
      },
      x: {
        ticks: { color: "#444" },
        grid: { color: "#eee" },
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

        <div className="chart-section" style={{ height: "350px" }}>
          <Line data={chartData} options={options} />
        </div>
      </div>

      {/* Render your BuySellContainer component */}
      <BuySellContainer />
    </div>
  );
};

export default Dashboard;
