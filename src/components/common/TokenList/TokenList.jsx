import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const tokens = [
  {
    name: "Tim Walz",
    price: "$0.0001251",
    points: 56,
    credits: 9.5,
    marketCap: "$5mn+",
  },
];

const TokenList = () => {
  return (
    <div>
      {tokens.map((token, index) => (
        <div
          key={index}
          className="bg-[#353535] my-2 w-full rounded-md flex justify-between items-center px-2 py-2"
        >
          <div className="flex items-center gap-2">
            <img src="/images/timwalz.png" alt="" className="w-[42px] h-[42px]" />
            <div>
              <h4 className="font-bold">{token.name}</h4>
              <p className="text-sm text-gray-400">{token.price}</p>
              <p className="text-xs text-gray-500">
                Market Cap: {token.marketCap}
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold">{token.points}</p>
            <p className="text-xs text-gray-500">Avg Points</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{token.credits}</p>
            <p className="text-xs text-gray-500">Credits</p>
          </div>
          <AddCircleOutlineIcon className="text-blue-400" />
        </div>
      ))}
    </div>
  );
};

export default TokenList;
