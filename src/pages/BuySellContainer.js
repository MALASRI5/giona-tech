import React from "react";
import "./BuySellContainer.css";

const coins = [
  {
    id: "usdt",
    name: "USDT",
    price: "1.00",
    img: "https://assets.coingecko.com/coins/images/325/small/Tether-logo.png",
  },
  {
    id: "btc",
    name: "BTC",
    price: "29,500.00",
    img: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
  },
  {
    id: "usdc",
    name: "USDC",
    price: "1.00",
    img: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png",
  },
  {
    id: "bnb",
    name: "BNB",
    price: "350.00",
    img: "https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png",
  },
  {
    id: "eth",
    name: "ETH",
    price: "1,850.00",
    img: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
  },
];

const BuySellContainer = () => {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: 30, color: "#d4af37" }}>
        Buy / Sell Cryptos
      </h2>
      <div className="card-grid">
        {coins.map((coin) => (
          <div key={coin.id} className="card">
            <img src={coin.img} alt={coin.name} className="coin-image" />
            <h3 style={{ color: "#d4af37" }}>{coin.name}</h3>
            <p className="price">${coin.price}</p>
            <div className="button-group">
              <button className="button buy-button">Buy</button>
              <button className="button sell-button">Sell</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySellContainer;
