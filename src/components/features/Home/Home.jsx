import React from "react";
import Header from "../../common/Header/Header";
import RafflesCard from "../../common/RafflesCard/RafflesCard";
import HowToUse from "../../common/HowToUse/HowToUse";
import PrizePool from "../../common/PrizePool/PrizePool";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <HowToUse />
      <PrizePool />
      <div className="p-2 bg-[#1E1E1E] h-screen w-screen">
        <div className="text-white text-[14px] ml-[11px] m-2 font-[600]">Upcoming Raffles</div>
        <div onClick={() => navigate("/game/sol-maxis-vs-eth-maxis")}>
          <RafflesCard />
        </div>
        <div onClick={() => navigate("/game/sol-maxis-vs-eth-maxis")}>
          <RafflesCard />
        </div>
        <div onClick={() => navigate("/game/sol-maxis-vs-eth-maxis")}>
          <RafflesCard />
        </div>
        <div onClick={() => navigate("/game/sol-maxis-vs-eth-maxis")}>
          <RafflesCard />
        </div>
        <div onClick={() => navigate("/game/sol-maxis-vs-eth-maxis")}>
          <RafflesCard />
        </div>
        <RafflesCard />
        <RafflesCard />
        <RafflesCard />
        <RafflesCard />
        <RafflesCard />
      </div>
      <BottomNavbar />
    </>
  );
};

export default Home;
