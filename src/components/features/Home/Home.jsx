import React, { useState, useEffect } from "react";
import Header from "../../common/Header/Header";
import RafflesCard from "../../common/RafflesCard/RafflesCard";
import HowToUse from "../../common/HowToUse/HowToUse";
import fetcher from "../../../services/apiFetcher";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "../../common/AvatarGrid/TemporaryDrawer";
import PrizePool from "../../common/PrizePool/PrizePool";

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
      <TemporaryDrawer />
      <Header />
      <HowToUse />
      <div className="p-2 bg-[#1E1E1E] h-screen w-screen">
        <div className="text-white text-[14px] ml-[11px] m-2 font-[600]">Upcoming Raffles</div>
        {contests.map((contest) => (
          <div key={contest.id} onClick={() => navigate(`/game/${contest.slugKey}`)}>
            <RafflesCard raffleData={contest} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
