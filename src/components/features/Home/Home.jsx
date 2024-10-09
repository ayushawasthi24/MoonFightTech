import React from "react";
import Header from "../../common/Header/Header";
import RafflesCard from "../../common/RafflesCard/RafflesCard";

const Home = () => {
  return (
    <>
      <Header />
      <div className="p-2 bg-[#1E1E1E] h-screen w-screen">
        <div className="text-white text-[14px] ml-[11px] m-2 font-[600]">
          Upcoming Raffles
        </div>
        <RafflesCard />
        <RafflesCard />
        <RafflesCard />
        <RafflesCard />
        <RafflesCard />
      </div>
    </>
  );
};

export default Home;
