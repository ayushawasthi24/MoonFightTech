import React, { useState } from "react";
import { formatMarketCap } from "../../../utils/utils";

const TokenList = ({ tokens, selectedTokens, onTokenSelect }) => {
  return (
    <div className="pb-[100px]">
      {tokens.map((token, index) => {
        const isSelected = selectedTokens.includes(token);

        return (
          <div
            key={index}
            className={`w-full grid grid-cols-2 px-2 py-2 my-2 ${
              selectedTokens.includes(token) ? "bg-[#6B61FF]" : "bg-[#353535]"
            }`}
          >
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-2 items-center justify-center">
                <img
                  src={token.image_url}
                  alt={token.name}
                  className="w-[42px] h-[42px]"
                />
                <h3 className="font-[600] text-[12px] text-[#D2D2D2]">
                  {token.symbol}
                </h3>
              </div>
              <div className="flex flex-col items-start gap-2 m-1 justify-center text-[10px]">
                <p className="text-white">{token.price_usd.toFixed(4)}</p>
                {/* Add the SVG chart here */}
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="grid grid-rows-2 col-span-2 items-center">
                <div className="grid grid-cols-2">
                  <div className="text-center">
                    <p className="font-[400] text-[14px]">{token.avg_points}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-[400] text-[14px]">{token.credits}</p>
                  </div>
                </div>
                <div className="text-[10px] font-[400] text-white">
                  Market Cap: ${formatMarketCap(token.market_cap_usd)}
                </div>
              </div>
              {!selectedTokens.includes(token) ? (
                <div className="items-center justify-center flex">
                  <button
                    className="p-2 text-white rounded-full bg-[#6B61FF] w-[24px] h-[24px] flex items-center justify-center"
                    onClick={() => onTokenSelect(token)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <div className="items-center justify-center flex">
                  <button
                    className="p-2 text-white rounded-full bg-[#FF4545] w-[24px] h-[24px] flex items-center justify-center"
                    onClick={() => onTokenSelect(token)}
                  >
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TokenList;
