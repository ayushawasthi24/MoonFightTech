import React from "react";

const Shimmer = ({ width = "100%", height = "100%" }) => {
  return (
    <div
      className={`relative overflow-hidden bg-gray-700 rounded`}
      style={{ width, height }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#535353] to-[#404040] opacity-50 animate-shimmer" />
    </div>
  );
};

const ShimmerComponent = () => {
  return (
    <div className="flex flex-col gap-4">
      <Shimmer width="100%" height="20px" />
    </div>
  );
};

export default ShimmerComponent;
