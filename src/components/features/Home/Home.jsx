import React, { useState, useEffect } from "react";
import Header from "../../common/Header/Header";
import RafflesCard from "../../common/RafflesCard/RafflesCard";
import BottomNavbar from "../../common/BottomNavbar/BottomNavbar";
import { useNavigate } from "react-router-dom";
import HowToUse from "../../common/HowToUse/HowToUse";
import Shimmer from "../../common/Shimmer/Shimmer";
import fetcher from "../../../services/apiFetcher";

const Home = () => {
  const navigate = useNavigate();
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetcher.get("/contests");
        setContests(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchContests();
  }, []);

  return (
    <>
      <Header />
      <HowToUse />
      <div className="p-2 bg-[#1E1E1E] h-screen w-screen">
        {loading ? (
          <Shimmer />
        ) : (
          <>
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
          </>
        )}
      </div>
      <BottomNavbar />
    </>
  );
};

export default Home;
