import React from "react";

const Spinner = ({ size = "40px", color = "#6B61FF" }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1E1E1E]">
      <div className="relative" style={{ width: size, height: size }}>
        <div
          className="absolute inset-0 border-4 border-t-transparent border-solid rounded-full animate-spin-slow"
          style={{
            borderColor: `${color}`,
            borderWidth: `calc(${size} / 8)`,
          }}
        ></div>

        <div
          className="absolute inset-1 border-4 border-b-transparent border-solid rounded-full animate-spin-reverse"
          style={{
            borderColor: `${color}`,
            borderWidth: `calc(${size} / 10)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
