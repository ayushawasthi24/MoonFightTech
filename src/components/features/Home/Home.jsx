import React, { useState, useEffect } from "react";
import Header from "../../common/Header/Header";
import RafflesCard from "../../common/RafflesCard/RafflesCard";
import BottomNavbar from "../../common/BottomNavbar/BottomNavbar";
import { useNavigate } from "react-router-dom";
import HowToUse from "../../common/HowToUse/HowToUse";
import fetcher from "../../../services/apiFetcher";

const Home = () => {
  const navigate = useNavigate();
  const [contests, setContests] = useState([]);

  useEffect(() => {
    fetcher.get("/contests").then((res) => {
      setContests(res);
    });
  }, []);

  return (
    <>
      <Header />
      <HowToUse />
      <div className="p-2 bg-[#1E1E1E] h-screen w-screen">
        <div className="text-white text-[14px] ml-[11px] m-2 font-[600]">
          Upcoming Raffles
        </div>
        {contests.map((contest) => (
          <div
            key={contest.id}
            onClick={() => navigate(`/game/${contest.slugKey}`)}
          >
            <RafflesCard raffleData={contest} />
          </div>
        ))}
        {/* <div onClick={() => navigate("/game/sol-maxis-vs-eth-maxis")}>
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
        </div> */}
      </div>
      <BottomNavbar />
    </>
  );
};

export default Home;
