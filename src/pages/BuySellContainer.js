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
      <table className="coins-table">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Buy Price (USD)</th>
            <th>Sell Price (USD)</th>

          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td className="coin-info" data-label="Coin">
                <img src={coin.img} alt={coin.name} className="coin-image" />
                <span>{coin.name}</span>
              </td>
              <td className="price" data-label="Buy Price">${coin.price}</td>
              <td className="price" data-label="Sell Price">${coin.price}</td>
              
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default BuySellContainer;
