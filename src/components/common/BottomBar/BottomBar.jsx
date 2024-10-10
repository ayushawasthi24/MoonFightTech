import React from "react";

const BottomBar = () => {
  return (
    <div className="fixed left-0 bottom-2 w-full rounded-lg bg-gray-900 p-4 flex justify-around">
      <button className="bg-purple-500 text-white rounded-full px-4 py-2">
        Preview your Clan
      </button>
      <button className="bg-white text-purple-500 rounded-full px-4 py-2">
        How it Works
      </button>
    </div>
  );
};

export default BottomBar;
