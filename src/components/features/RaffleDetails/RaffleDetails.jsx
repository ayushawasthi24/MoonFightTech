import React, { useState, useEffect } from "react";
import TokenSelection from "../../common/TokenSelection/TokenSelection";
import TokenList from "../../common/TokenList/TokenList";
import BottomBar from "../../common/BottomBar/BottomBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import { useLocation, useNavigate } from "react-router-dom";
import PrizePool from "../../common/PrizePool/PrizePool";
import Shimmer from "../../common/Shimmer/Shimmer";
import fetcher from "../../../services/apiFetcher";
import { toTitleCase } from "../../../utils/utils";
import BackHeader from "../../common/BackHeader/BackHeader";

const RaffleDetails = () => {
  const navigate = useNavigate();
  const slugKey =
    useLocation().pathname.split("/")[
      useLocation().pathname.split("/").length - 1
    ];

  const [loading, setLoading] = useState(true);

  const [contest, setContest] = useState(null);

  const [selectedTokens, setSelectedTokens] = useState([]);

  const handleTokenSelect = (token) => {
    if (selectedTokens.includes(token)) {
      setSelectedTokens(selectedTokens.filter((t) => t !== token));
    } else {
      setSelectedTokens([...selectedTokens, token]);
    }
  };
  useEffect(() => {
    const fetchContests = async () => {
      try {
        const res = await fetcher.get(`/contests/${slugKey}`);
        setContest(res);
      } catch (error) {
        console.error("Error fetching contests:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContests();
  }, []);

  const joinContest = async (contestId, tokenList) => {
    const url = `/contests/join/${contestId}`;

    const tokens = tokenList.map((token) => token._id);
    console.log(tokens);
    
    try {
      const response = await fetcher.post(
        url,
        {
          tokens: tokens,
        },
      );
      console.log("Contest joined successfully:", response);
      alert("Contest joined successfully");
      return response.data;
    } catch (error) {
      console.error("Error joining contest:", error);
      throw error;
    }
  };

  const buttons = [
    {
      text: "Preview your Clan",
      icon: (
        <path
          d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59 18.3099 9.35 16.9399 9.59M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59 5.65994 9.35 7.02994 9.59M17.9999 7.16C17.937 7.14999 17.8729 7.14999 17.8099 7.16C17.1426 7.13587 16.5107 6.85321 16.0479 6.37176C15.5852 5.89032 15.3277 5.2478 15.3299 4.58C15.3299 3.15 16.4799 2 17.9099 2C18.5942 2 19.2504 2.27182 19.7343 2.75566C20.2181 3.23951 20.4899 3.89574 20.4899 4.58C20.4881 5.24828 20.2279 5.88996 19.7639 6.37081C19.2998 6.85167 18.6677 7.13445 17.9999 7.16ZM5.96994 7.16C6.02994 7.15 6.09994 7.15 6.15994 7.16C6.82731 7.13587 7.45915 6.85321 7.92194 6.37176C8.38472 5.89032 8.64219 5.2478 8.63994 4.58C8.63994 3.15 7.48994 2 6.05994 2C5.37568 2 4.71945 2.27182 4.23561 2.75566C3.75176 3.23951 3.47994 3.89574 3.47994 4.58C3.48994 5.98 4.58994 7.11 5.96994 7.16ZM11.9999 14.63C11.937 14.62 11.8729 14.62 11.8099 14.63C11.1426 14.6059 10.5107 14.3232 10.0479 13.8418C9.58516 13.3603 9.32769 12.7178 9.32994 12.05C9.32994 10.62 10.4799 9.47 11.9099 9.47C12.5942 9.47 13.2504 9.74182 13.7343 10.2257C14.2181 10.7095 14.4899 11.3657 14.4899 12.05C14.4799 13.45 13.3799 14.59 11.9999 14.63ZM9.08994 17.78C7.67994 18.72 7.67994 20.26 9.08994 21.2C10.6899 22.27 13.3099 22.27 14.9099 21.2C16.3199 20.26 16.3199 18.72 14.9099 17.78C13.3199 16.72 10.6899 16.72 9.08994 17.78Z"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      ),
      bgColor: "bg-[#6B61FF]",
      textColor: "text-white",
      onClick: () => console.log("Preview your Clan"),
    },
    {
      text: selectedTokens.length > 0 ? "Save" : "Select Tokens",
      bgColor: "bg-white",
      textColor: "text-[#6B61FF] hover:bg-gray-100",
      onClick: () => selectedTokens.length > 0 ? joinContest(slugKey, selectedTokens) : console.log("Select Tokens"),
    },
  ];
  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white">
      {loading ? (
        <>
          <div className="">
            <Shimmer />
          </div>
        </>
      ) : (
        <>
          <BackHeader
            title={toTitleCase(contest?.name)}
            img1={contest?.teams[0].image_url}
            img2={contest?.teams[1].image_url}
          />

          <PrizePool
            currentPrizePool={contest.currentPoolAmount}
            maxPrizePool={contest.maxPoolAmount}
            totalSpots={contest.totalSpots}
            spotsTaken={contest.takenSpots}
          />
          <TokenSelection contest={contest} selectedTokens={selectedTokens} />
          <div className="grid grid-cols-10 text-white px-4">
            {/* Token Column */}
            <div className="text-center col-span-4">
              <p className="font-[700] text-[12px]">Token</p>
            </div>

            {/* Avg Points Column */}
            <div className="col-span-3 flex items-center justify-center">
              <p className="text-center font-[700] text-[12px]">Avg Points</p>
              <Tooltip
                title="Average points of the token in the last 24 hours"
                placement="top"
              >
                <InfoOutlinedIcon className="text-gray-400" fontSize="small" />
              </Tooltip>
            </div>

            {/* Credits Column */}
            <div className="col-span-3">
              <p className="font-[700] text-[12px]">Credits</p>
            </div>
          </div>
          <TokenList
            tokens={contest.tokens}
            selectedTokens={selectedTokens}
            onTokenSelect={handleTokenSelect}
          />
          <BottomBar buttons={buttons} />
        </>
      )}
    </div>
  );
};

export default RaffleDetails;
