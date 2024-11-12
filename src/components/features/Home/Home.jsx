import React, { useState, useEffect } from "react";
import Header from "../../common/Header/Header";
import RafflesCard from "../../common/RafflesCard/RafflesCard";
import HowToUse from "../../common/HowToUse/HowToUse";
import Shimmer from "../../common/Shimmer/Shimmer";
import fetcher from "../../../services/apiFetcher";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "../../common/BottomNavbar/BottomNavbar";
import { saveUserData } from "../../../utils/indexedDB";

const Home = () => {
  const navigate = useNavigate();
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [balance, setBalance] = useState(0);

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
    const fetchUserData = async () => {
      const now = Date.now();
      try {
        const response = await fetcher.get("/users/profile");
        const dataWithTimestamp = { ...response, fetchedAt: now };
        setUserData(dataWithTimestamp);
        await saveUserData(dataWithTimestamp); // Save to IndexedDB
        setBalance(response.balance);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        setLoading(false);
      }
    };
    fetchUserData();
    fetchContests();
  }, []);

  return (
    <>
      <Header balance={balance} />
      <HowToUse />
      <div className="p-2 bg-[#1E1E1E] h-screen">
        {loading ? (
          <Shimmer />
        ) : (
          <>
            <div className="text-white text-[14px] ml-[11px] m-2 font-[600]">Upcoming Raffles</div>
            {contests.map((contest) => (
              <div key={contest.id} onClick={() => navigate(`/game/${contest.slugKey}`)}>
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
