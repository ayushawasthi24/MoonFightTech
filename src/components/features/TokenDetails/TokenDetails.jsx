import React from "react";
import { Button, Avatar } from "@mui/material";
import { Chart } from "react-chartjs-2";

const TokenDetails = () => {
  return (
    <div className="min-h-screen p-4 bg-[#1E1E1E]">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt="Tim Walz"
            src="/images/timwalz.png"
          />
          <div>
            <h2 className="text-white text-xl font-semibold">Tim Walz</h2>
            <p className="text-gray-400">$Wif</p>
          </div>
        </div>
        <div className="text-white">
          <Button sx={{ color: "white" }}>More Options</Button>
        </div>
      </div>

      {/* Price and Chart Info */}
      <div className="p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-white">
            <h3 className="text-2xl font-semibold">$0.00421</h3>
            <p className="text-green-400">+50% all time</p>
          </div>
          <div className="text-white">
            <p>$200k</p>
            <p className="text-gray-400">Liquidity</p>
          </div>
          <div className="text-white">
            <p>$1.5M</p>
            <p className="text-gray-400">Market Cap</p>
          </div>
        </div>
        {/* Chart Placeholder */}
        <div className="bg-[#151515] h-40 rounded-lg">
          {/* Placeholder for chart */}
          <p className="text-center text-gray-500 pt-10">Chart Component</p>
        </div>
      </div>

      {/* Time Interval Buttons */}
      <div className="p-3 rounded-lg mb-4 flex justify-around">
        <Button
          variant="contained"
          sx={{ background: "#3A3A3A", color: "white" }}
        >
          <span>5min</span>
          <span className="ml-2 text-red-400">-3.5%</span>
        </Button>
        <Button
          variant="contained"
          sx={{ background: "#3A3A3A", color: "white" }}
        >
          <span>30min</span>
          <span className="ml-2 text-red-400">-3.5%</span>
        </Button>
        <Button
          variant="contained"
          sx={{ background: "#3A3A3A", color: "white" }}
        >
          <span>1h</span>
          <span className="ml-2 text-red-400">-3.5%</span>
        </Button>
        <Button
          variant="contained"
          sx={{ background: "#3A3A3A", color: "white" }}
        >
          <span>1d</span>
          <span className="ml-2 text-red-400">-3.5%</span>
        </Button>
      </div>

      {/* Transaction Details */}
      <div className="p-4 rounded-lg">
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-gray-400">Transactions</p>
            <p className="text-white">10.5k</p>
          </div>
          <div>
            <p className="text-gray-400">Volume</p>
            <p className="text-white">$1.3Mn</p>
          </div>
          <div>
            <p className="text-gray-400">Makers</p>
            <p className="text-white">5004</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg">
            <p className="text-white">Buys</p>
            <div className="flex justify-between items-center">
              <span>7583</span>
              <div className="w-1/2 h-2 bg-green-500 rounded-lg"></div>
            </div>
          </div>
          <div className="p-3 rounded-lg">
            <p className="text-white">Sells</p>
            <div className="flex justify-between items-center">
              <span>2534</span>
              <div className="w-1/2 h-2 bg-red-500 rounded-lg"></div>
            </div>
          </div>
          <div className="p-3 rounded-lg">
            <p className="text-white">Buy Vol</p>
            <p className="text-white">$1.2Mn</p>
          </div>
          <div className="p-3 rounded-lg">
            <p className="text-white">Sell Vol</p>
            <p className="text-white">$0.1Mn</p>
          </div>
          <div className="p-3 rounded-lg">
            <p className="text-white">Buyer</p>
            <p className="text-white">3583</p>
          </div>
          <div className="p-3 rounded-lg">
            <p className="text-white">Seller</p>
            <p className="text-white">1534</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;
