import React from "react";
import "./PrizePool.css";
import { useNavigate } from "react-router-dom";

const PrizePool = () => {
  const navigate = useNavigate();

  const currentPrizePool = 7.5;
  const maxPrizePool = 10;
  const totalSpots = 20000;
  const spotsTaken = 15000;

  const progressPercentage = (spotsTaken / totalSpots) * 100;

  return (
    <div
      className="prize-pool-container m-4"
      onClick={() => navigate("/price-pool/sol-maxis-vs-eth-maxis/?type=winning")}
    >
      <div className="prize-info">
        <div className="prize-value">
          <span>Current Prize Pool</span>
          <div className="flex">
            <img src="/icons/empty-wallet.png" alt="dollar" width={20} height={20} />
            <h1 className="dollar-icon">{currentPrizePool}k</h1>
          </div>
        </div>

        <div className="prize-value">
          <span>Max Prize Pool</span>
          <div className="flex">
            <img src="/icons/empty-wallet.png" alt="dollar" width={20} height={20} />
            <h1 className="dollar-icon">{maxPrizePool}k</h1>
          </div>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className="spots-info">
        <span>{totalSpots} spots</span>
        <span>{totalSpots - spotsTaken} spots left</span>
      </div>

      <div className="prize-actions">
        <div className="win-icon">
            <img src="/icons/trophy-icon 1.png" alt="Group1" width={15} height={15} />
            </div>
         <button> Winnings</button>

        <div className="p-icon">
            <img src="/icons/Group 427319845.png" alt="Group2" width={15} height={15} />
            </div>
         <button>Points Calculation</button>

        <div className="graph-icon">
            <img src="/icons/Union.png" alt="Group3" width={15} height={15} />
            </div>
          <button>Leaderboard</button>
      </div>
    </div>
  );
};

export default PrizePool;
