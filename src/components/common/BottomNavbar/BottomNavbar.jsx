import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const BottomNavbar = () => {
  const navItems = [
    {
      icon: <HomeIcon className="text-white" />,
      label: "Home",
      active: true,
      gradient: true,
    },
    {
      icon: <ShowChartIcon className="text-gray-400" />,
      label: "My Raffles",
      active: false,
    },
    {
      icon: <AccountBalanceWalletIcon className="text-gray-400" />,
      label: "Wallet",
      active: false,
    },
    {
      icon: <AccountCircleIcon className="text-gray-400" />,
      label: "Profile",
      active: false,
    },
  ];

  return (
    <div className="fixed px-1 bottom-1 w-full bg-black flex justify-around py-4 rounded-[45px]">
      {navItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`${
              item.gradient
                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                : ""
            } p-2 rounded-full`}
          >
            {item.icon}
          </div>
          <span
            className={`text-sm ${
              item.active ? "text-white" : "text-gray-400"
            } mt-1`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavbar;
