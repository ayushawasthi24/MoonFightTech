import React from "react";
import BackHeader from "../../common/BackHeader/BackHeader";
import CustomToggle from "../../common/CustomToggle/CustomToggle";
import { ArrowDown, Plus, Wallet } from "lucide-react";

const WalletPage = () => {
  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white">
      <BackHeader title="Wallet" />
      <div className="p-4 space-y-4 bg-[#353535] mx-[16px] rounded-[12px]">
        <div className="flex items-center space-x-2">
          <img src="/images/wallet.png" className="w-[44px] h-[44px]" />
          <div className="flex flex-col">
            <span className="font-[400] text-[12px] text-[#D2D2D2]">
              Usable Balance
            </span>
            <div className="flex gap-2">
              <img src="/images/coin.png" alt="" className="w-[20px] [20px]" />
              <span className="font-[400] text-[16px] text-white">10</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 flex items-center justify-center space-x-1 text-[#D2D2D2] font-bold py-2 px-4 rounded">
            <img
              src="/images/deposit.png"
              alt=""
              className="w-[32px] h-[32px]"
            />
            <span className="font-[400] text-[12px]">Deposit Crypto</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-1 text-[#D2D2D2] font-bold py-2 px-4 rounded">
            <img
              src="/images/transfer.png"
              alt=""
              className="w-[32px] h-[32px]"
            />
            <span className="font-[400] text-[12px]">Transfer Crypto</span>
          </button>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex items-center justify-center my-4">
          <CustomToggle
            options={[
              { label: "Transactions", value: "transactions" },
              { label: "Portfolio", value: "portfolio" },
            ]}
            defaultValue="transactions"
            onChange={(value) => console.log(value)}
          />
        </div>
        <div className="space-y-3">
          {[
            {
              type: "debit",
              amount: 50,
              description: "USDC debited for Clan Creation",
            },
            {
              type: "credit",
              amount: 10,
              description: "USDC credited for Sol Contest",
            },
            {
              type: "debit",
              amount: 50,
              description: "USDC debited for Clan Creation",
            },
          ].map((transaction, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-[#353535] p-3 rounded-[12px]"
            >
              <div className="bg-[#32BA7C33] w-[32px] h-[32px] rounded-[4px] flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92009 9.99406C7.79342 9.99406 7.66675 9.9474 7.56675 9.8474L5.86009 8.14073C5.66675 7.9474 5.66675 7.6274 5.86009 7.43406C6.05342 7.24073 6.37342 7.24073 6.56675 7.43406L7.92009 8.7874L9.27342 7.43406C9.46675 7.24073 9.78676 7.24073 9.98009 7.43406C10.1734 7.6274 10.1734 7.9474 9.98009 8.14073L8.27342 9.8474C8.17342 9.9474 8.04675 9.99406 7.92009 9.99406Z"
                    fill="#32BA7C"
                  />
                  <path
                    d="M7.91992 9.94602C7.64659 9.94602 7.41992 9.71935 7.41992 9.44602V2.66602C7.41992 2.39268 7.64659 2.16602 7.91992 2.16602C8.19326 2.16602 8.41992 2.39268 8.41992 2.66602V9.44602C8.41992 9.71935 8.19326 9.94602 7.91992 9.94602Z"
                    fill="#32BA7C"
                  />
                  <path
                    d="M8.00033 13.9525C4.56699 13.9525 2.16699 11.5525 2.16699 8.11914C2.16699 7.84581 2.39366 7.61914 2.66699 7.61914C2.94033 7.61914 3.16699 7.84581 3.16699 8.11914C3.16699 10.9658 5.15366 12.9525 8.00033 12.9525C10.847 12.9525 12.8337 10.9658 12.8337 8.11914C12.8337 7.84581 13.0603 7.61914 13.3337 7.61914C13.607 7.61914 13.8337 7.84581 13.8337 8.11914C13.8337 11.5525 11.4337 13.9525 8.00033 13.9525Z"
                    fill="#32BA7C"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm">{transaction.description}</div>
                <div className="text-xs text-zinc-400">
                  USDC {transaction.type === "credit" ? "credited" : "debited"}
                </div>
              </div>
              <div className="font-semibold"> {transaction.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
