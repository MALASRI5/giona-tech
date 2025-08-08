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

import BuySellContainer from "./BuySellContainer";  // Adjust path as needed
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
  // Initial dummy labels and data
  const initialLabels = ["19:00", "20:00", "21:00", "22:00", "23:00"];
  const initialDataPoints = [88.50, 89.10, 88.90, 89.50, 90.00]; // Example INR prices

  // State for chart data & labels
  const [chartData, setChartData] = useState({
    labels: initialLabels,
    datasets: [
      {
        label: "USDT Price Over Time (INR)",
        data: initialDataPoints,
        borderColor: "#d4af37",           
        backgroundColor: "transparent",  
        pointBackgroundColor: "#d4af37",
        pointBorderColor: "#d4af37",
        borderWidth: 2,
        fill: false,
        tension: 0,
        pointRadius: 3,
      },
    ],
  });

  // Additional state for metrics
  const [metrics, setMetrics] = useState({
    currentPrice: 88.50,
    change24h: -0.98,
    high24h: 90.04,
    low24h: 88.36,
    volume24h: 43687791.73,
  });

  // Fetch latest USDT price and update metrics and chart
  useEffect(() => {
    const fetchUSDTINRData = async () => {
      try {
        // Ideally, use a specific API providing USDT/INR pair data with metrics,
        // here a placeholder for concept demonstration:
        // Replace with actual API endpoint for USDT/INR data including 24h stats.
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=inr");
        const data = await response.json();
        const currentPrice = data.tether.inr;

        // Example metrics update (replace with actual API data)
        // For demo, mock change, high, low, volume as random or static values
        const change24h = -0.98;
        const high24h = 90.04;
        const low24h = 88.36;
        const volume24h = 43687791.73;

        setMetrics({ currentPrice, change24h, high24h, low24h, volume24h });

        const now = new Date();
        const formattedLabel = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

        setChartData((prevData) => {
          let newLabels = [...prevData.labels, formattedLabel];
          let newDataPoints = [...prevData.datasets[0].data, currentPrice];
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
        console.error("Failed to fetch USDT/INR price:", error);
      }
    };

    fetchUSDTINRData();
    const intervalId = setInterval(fetchUSDTINRData, 600000); // 60,000 ms = 1 minute
    

    return () => clearInterval(intervalId);
  }, []);

  // Chart options: clean, minimalist
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: {} },
    scales: {
      y: {
        beginAtZero: false,
        ticks: { color: "#444", font: { size: 12 } },
        grid: { color: "transparent" },
      },
      x: {
        ticks: { color: "#444", font: { size: 12 } },
        grid: { color: "transparent" },
      },
    },
  };

  // Format volume as currency string (INR)
  const formattedVolume = metrics.volume24h.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  return (
    <div className="dashboard-wrapper">
      <h2 className="platform-title">VIRTUAL ASSETS TRAINING PLATFORM</h2>

      {/* Metrics Info Section */}
      <div className="metrics-info" style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "#3e4523ff" }}>
        <strong>USDT/INR Price:</strong> ₹{metrics.currentPrice.toFixed(2)}&nbsp;&nbsp;|&nbsp;&nbsp;
        <strong>24H Change:</strong> {metrics.change24h > 0 ? "+" : ""}{metrics.change24h}%&nbsp;&nbsp;|&nbsp;&nbsp;
        <strong>24H High:</strong> ₹{metrics.high24h.toFixed(2)}&nbsp;&nbsp;|&nbsp;&nbsp;
        <strong>24H Low:</strong> ₹{metrics.low24h.toFixed(2)}&nbsp;&nbsp;|&nbsp;&nbsp;
        <strong>24H Volume:</strong> {formattedVolume}
      </div>

      <div className="dashboard-container">
        <div className="text-section">
          <h3>USDT Coin</h3>
          <p>
            Tether (USDT) is a stablecoin pegged to the U.S. Dollar at approximately 1:1.
            It is widely used for trading, hedging, and transferring value without the
            volatility of other digital assets. Its INR price reflects USD/INR exchange rates and market liquidity.
          </p>
          <p>
            This chart shows real-time 1-hour interval price movements and key metrics for USDT/INR, useful for spotting trends and trading opportunities with stable liquidity and low volatility.
          </p>
        </div>

        <div className="chart-section" style={{ height: "350px" }}>
          <Line data={chartData} options={options} />
        </div>
      </div>

      {/* Trading buttons in BuySellContainer as per your existing setup */}
      <BuySellContainer />
    </div>
  );
};

export default Dashboard;
