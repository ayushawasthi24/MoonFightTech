import React from "react";
import TokenSelection from "../../common/TokenSelection/TokenSelection";
import TokenList from "../../common/TokenList/TokenList";
import BottomBar from "../../common/BottomBar/BottomBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";

const RaffleDetails = () => {
  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-2 items-center justify-center">
          <ArrowBackIcon className="text-white" />
          <img
            src="/images/sol.png"
            alt="Solana logo"
            className="rounded-full w-[20px] h-[20px]"
          />
          <h2 className="text-[12px] font-bold">Sol Maxis vs Eth Maxis</h2>
          <img
            src="/images/eth.png"
            alt="Ethereum logo"
            className="w-[20px] h-[20px] rounded-full"
          />
        </div>
        <div className="text-red-500 text-sm">15m 30s</div>
      </div>
      <hr className="border-[0.5px] mt-8 border-[#535353]" />
      <TokenSelection />
      <div className="flex justify-between items-center text-white px-4">
        {/* Token Column */}
        <div className="w-1/3 text-left">
          <p>Token</p>
        </div>

        {/* Avg Points Column */}
        <div className="w-1/3 flex items-center justify-center">
          <p>Avg Points</p>
          <Tooltip
            title="Average points of the token in the last 24 hours"
            placement="top"
          >
            <InfoOutlinedIcon className="ml-1 text-gray-400" fontSize="small" />
          </Tooltip>
        </div>

        {/* Credits Column */}
        <div className="w-1/3 text-right">
          <p>Credits</p>
        </div>
      </div>
      <TokenList />
      <TokenList />
      <TokenList />
      <TokenList />
      <TokenList />
      <TokenList />
      <TokenList />
      <TokenList />
      <BottomBar />
    </div>
  );
};

export default RaffleDetails;
