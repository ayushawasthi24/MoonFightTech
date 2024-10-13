import React from "react";
import { LinearProgress } from "@mui/material";
import { Chart } from "react-chartjs-2";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BackHeader from "../../common/BackHeader/BackHeader";
import BottomBar from "../../common/BottomBar/BottomBar";

const buySellStats = {
  transactions: "10.5k",
  volume: "$1.3Mn",
  makers: "5004",
  buys: 7583,
  sells: 2534,
  buyVol: "$1.2Mn",
  sellVol: "$0.1Mn",
  buyers: 3583,
  sellers: 1534,
};

const TokenDetails = () => {
  const backButton = [
    {
      text: "Back",
      bgColor: "bg-[#6B61FF]",
      textColor: "text-white",
      onClick: () => console.log("Back button clicked"),
    },
  ];
  return (
    <div className="min-h-screen text-white bg-[#1E1E1E]">
      <BackHeader title="Tim Walz" />
      {/* Header with Image and Name */}
      <div className="flex items-center justify-between p-2 px-[22px]">
        {/* Profile Image and Info */}
        <div className="flex items-center">
          <img
            src="/images/timwalz.png"
            alt="Profile"
            className="rounded-full w-[60px] h-[60px] mr-4"
          />
          <div>
            <h3 className="text-[12px] text-[#D2D2D2]">$Wif</h3>
            <div className="flex flex-row justify-center items-center gap-2">
              <span className="text-[14px] text-white font-[600]">
                Tim Walz
              </span>
              <span className="font-[400] text-white text-[8px] text-[#D2D2D2]">
                10 days ago
              </span>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex">
          <IconButton className="text-white">
            <img src="/images/X.png" alt="" className="w-[42px] h-[42px]" />
          </IconButton>
          <IconButton className="text-white">
            <img
              src="/images/telegram.png"
              alt=""
              className="w-[42px] h-[42px]"
            />
          </IconButton>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-between items-center p-4 px-[22px]">
        {/* Price */}
        <div>
          <p className="text-[16px] font-[600]">$ 0.00421</p>
          <p className="text-[#4FC17F] text-[12px]">
            <KeyboardArrowUpIcon /> 50%{" "}
            <span className="text-[#D2D2D2] text-[8px]">all time</span>
          </p>
        </div>

        {/* Liquidity */}
        <div className="text-center">
          <div className="flex flex-row items-center justify-center gap-1">
            <svg
              width="10"
              height="15"
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 14.3478C7.757 14.3478 10 12.1048 10 9.34783C10 8.05344 9.50552 6.87235 8.69565 5.98352V3.69565C8.69565 1.65787 7.03778 0 5 0C2.96222 0 1.30439 1.65787 1.30439 3.69565V5.98344C0.494478 6.87235 0 8.05344 0 9.34783C0 12.1048 2.243 14.3478 5 14.3478ZM5.65217 9.56461V10.4348C5.65217 10.795 5.36017 11.087 5 11.087C4.63983 11.087 4.34783 10.795 4.34783 10.4348V9.56461C4.084 9.36613 3.91304 9.05052 3.91304 8.69565C3.91304 8.0963 4.40065 7.6087 5 7.6087C5.59935 7.6087 6.08696 8.0963 6.08696 8.69565C6.08696 9.05052 5.916 9.36613 5.65217 9.56461ZM2.60874 3.69565C2.60874 2.37709 3.68148 1.30435 5 1.30435C6.31856 1.30435 7.3913 2.37709 7.3913 3.69565V4.95778C6.68052 4.56904 5.86565 4.34783 5 4.34783C4.13439 4.34783 3.31952 4.56904 2.60874 4.95774V3.69565Z"
                fill="#737373"
              />
            </svg>
            <p className="text-[16px] font-[600]">$200k</p>
          </div>
          <p className="text-[#D2D2D2] text-[8px]">Liquidity</p>
        </div>

        {/* Market Cap */}
        <div className="text-center">
          <div className="flex flex-row items-center justify-center gap-1">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0867 13.5589V1.35589C12.0867 0.610149 12.378 0 13.252 0H13.8347C14.7087 0 15 0.610149 15 1.35589V13.5589H12.0867Z"
                fill="#737373"
              />
              <path
                d="M4.09686 1.35589V13.5589H6.8281V1.35589C6.8281 0.610149 6.55498 0 5.7356 0H5.18936C4.36998 0 4.09686 0.610149 4.09686 1.35589ZM0 5.42354V13.5589H2.42777V5.42354C2.42777 4.67781 2.18499 4.06766 1.45666 4.06766H0.971108C0.242777 4.06766 0 4.67781 0 5.42354ZM8.49719 8.81326V13.5589H10.925V8.81326C10.925 8.06752 10.6822 7.45737 9.95385 7.45737H9.4683C8.73997 7.45737 8.49719 8.06752 8.49719 8.81326Z"
                fill="#737373"
              />
            </svg>

            <p className="text-[16px] font-[600]">$1.5M</p>
          </div>
          <p className="text-[#D2D2D2] text-[8px]">Market Cap</p>
        </div>
      </div>

      <div className="mx-[7px] rounded-[12px]">
        <img src="/images/graph.png" alt="" />
      </div>

      <div className="mx-[7px] p-4 rounded-[12px] bg-[#353535] text-white">
        {/* Time Tabs */}
        <div className="flex justify-center items-center mb-6 gap-2">
          <div className="bg-[#6B61FF] text-center p-2 rounded-[6px] w-1/4">
            <p className="text-[14px]">5min</p>
            <p className="text-[12px] text-[#FF4545]">-3.5%</p>
          </div>
          <div className="bg-[#686868] text-center p-2 rounded-[6px] w-1/4">
            <p className="text-[14px]">30min</p>
            <p className="text-[12px] text-[#FF4545]">-3.5%</p>
          </div>
          <div className="bg-[#686868] text-center p-2 rounded-[6px] w-1/4">
            <p className="text-[14px]">1h</p>
            <p className="text-[12px] text-[#FF4545]">-3.5%</p>
          </div>
          <div className="bg-[#686868] text-center p-2 rounded-[6px] w-1/4">
            <p className="text-[14px]">1d</p>
            <p className="text-[12px] text-[#FF4545]">-3.5%</p>
          </div>
        </div>

        {/* Buy/Sell Stats */}
        <Metric
          label="Transactions"
          value="10.5k"
          buyLabel="Buys"
          sellLabel="Sell"
          buyValue="7583"
          sellValue="2534"
          buyColor="bg-[#46DAAE]"
          sellColor="bg-[#FF4545]"
        />
        <Metric
          label="Volume"
          value="$1.3Mn"
          buyLabel="Buy Vol"
          sellLabel="Sell Vol"
          buyValue="$1.2Mn"
          sellValue="$0.1Mn"
          buyColor="bg-[#46DAAE]"
          sellColor="bg-[#FF4545]"
        />
        <Metric
          label="Makers"
          value="5004"
          buyLabel="Buyers"
          sellLabel="Sellers"
          buyValue="3583"
          sellValue="1534"
          buyColor="bg-[#46DAAE]"
          sellColor="bg-[#FF4545]"
        />
      </div>

      <BottomBar buttons={backButton} />
    </div>
  );
};

function Metric({
  label,
  value,
  buyLabel,
  sellLabel,
  buyValue,
  sellValue,
  buyColor,
  sellColor,
}) {
  const total = parseInt(buyValue) + parseInt(sellValue);
  const buyWidth = (parseInt(buyValue) / total) * 100;
  const sellWidth = (parseInt(sellValue) / total) * 100;

  return (
    <div className="mb-4 flex justify-between ">
      <div className="flex flex-col justify-between mb-1 gap-2">
        <span className="text-sm font-[14px] text-[#D2D2D2]">{label}</span>
        <span className="text-sm font-[12px] text-[#D2D2D2]">{value}</span>
      </div>
      <div className="w-[130px]">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-[#D2D2D2]">{buyLabel}</span>
          <span className="text-xs font-medium text-[#D2D2D2]">
            {sellLabel}
          </span>
        </div>
        <div className="flex h-2 mb-1">
          <div
            className={`${buyColor} rounded-[60px]`}
            style={{ width: `${buyWidth}%` }}
          ></div>
          <div
            className={`${sellColor} rounded-[60px]`}
            style={{ width: `${sellWidth}%` }}
          ></div>
        </div>
        <div className="flex justify-between">
          <span className="text-xs font-[10px] text-[#D2D2D2]">{buyValue}</span>
          <span className="text-xs font-[10px] text-[#D2D2D2]">
            {sellValue}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TokenDetails;
