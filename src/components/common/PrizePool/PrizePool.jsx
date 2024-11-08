import React from "react";
import "./PrizePool.css";
import { useNavigate } from "react-router-dom";

const PrizePool = ({ currentPrizePool, maxPrizePool, totalSpots, spotsTaken }) => {
  const navigate = useNavigate();

  const progressPercentage = (spotsTaken / totalSpots) * 100;

  return (
    <div
      className="prize-pool-container mx-2"
      onClick={() => navigate("/price-pool/sol-maxis-vs-eth-maxis/?type=winning")}
    >
      <div className="prize-info">
        <div className="prize-value">
          <span>Current Prize Pool</span>
          <div className="flex">
            <img src="/icons/empty-wallet.png" alt="dollar" width={20} height={20} />
            <h1 className="dollar-icon">{currentPrizePool}</h1>
          </div>
        </div>

        <div className="prize-value">
          <span>Max Prize Pool</span>
          <div className="flex">
            <img src="/icons/empty-wallet.png" alt="dollar" width={20} height={20} />
            <h1 className="dollar-icon">{maxPrizePool}</h1>
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
        <button className="win-button">
          <div className="win-icon">
            <img src="/icons/trophy-icon 1.png" alt="Group1" width={12} height={12.96} />
          </div>
          Winnings
        </button>

        <button className="point-button">
          <div className="p-icon">
            <img src="/icons/Group 427319845.png" alt="Group2" width={12} height={12} />
          </div>
          Points Calculation
        </button>

        <button className="graph-button">
          <div className="graph-icon">
            <img src="/icons/Union.png" alt="Group3" width={12} height={12.13} />
          </div>
          Leaderboard
        </button>
      </div>
    </div>
  );
};

export default PrizePool;
