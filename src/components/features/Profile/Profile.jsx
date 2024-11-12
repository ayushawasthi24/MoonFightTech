import React, { useState, useEffect } from "react";
import { Copy, ChevronRight, Star } from "lucide-react";
import RafflesCard from "../../common/RafflesCard/RafflesCard";
import fetcher from "../../../services/apiFetcher";
import Shimmer from "../../common/Shimmer/Shimmer";
import BottomNavbar from "../../common/BottomNavbar/BottomNavbar";
import { getUserData, saveUserData } from "../../../utils/indexedDB";
import { DATA_MAX_AGE } from "../../../constants/appConstants";


const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        let id = JSON.parse(localStorage.getItem("user")).id;
        const storedData = await getUserData(id);
        console.log(storedData);
        const now = Date.now();

        if (storedData && now - storedData.fetchedAt < DATA_MAX_AGE) {
          console.log("Using cached data");
          setUserData(storedData);
          setLoading(false);
        } else {
          // Fetch fresh data
          console.log("Fetching fresh data");
          const response = await fetcher.get("/users/profile");
          const dataWithTimestamp = { ...response, fetchedAt: now };
          setUserData(dataWithTimestamp);
          await saveUserData(dataWithTimestamp);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error loading user data:", error);
        setLoading(false);
      }
    };
    loadUserData();
  }, []);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Loading Shimmer */}
      {loading ? (
        <Shimmer />
      ) : (
        <>
          {/* Profile Header */}
          <div className="relative">
            {/* Banner Image */}
            <div className="h-24 w-full bg-[url('/images/profileBanner.png')] bg-cover relative">
              <div className="absolute -bottom-8 left-4 flex items-center gap-3">
                {/* Profile Image */}
                <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-700 relative">
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800" />
                </div>
              </div>
            </div>
          </div>

          {/* User Info Section */}
          <div className="mt-[60px] px-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-xl font-semibold">{userData?.name}</h1>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                  <span>Wallet ID:</span>
                  <span className="font-mono">{userData._id}</span>
                  <Copy className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Balance Card */}
            <div className="p-4 space-y-4 bg-[#353535] mx-[8px] mt-[10px] rounded-[12px] flex items-center">
              <div className="flex items-center gap-3">
                <img src="/images/wallet.png" alt="USD" className="w-8 h-8" />

                <div>
                  <div className="text-sm text-gray-400">USD Balance</div>
                  <div className="text-lg font-semibold">{userData.balance}</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            {/* Recently Played Section */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Recently Played</h2>
                <button className="text-sm text-gray-400">View All</button>
              </div>

              {/* Game Cards
          {recentGames.map((game) => (
            // <RafflesCard raffleData={game} />
          ))} */}
            </div>
          </div>
        </>
      )}
      <BottomNavbar />
    </div>
  );
};

export default UserProfile;
