import React, { useState } from "react";

export default function CustomToggle({ options, defaultValue, onChange }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleToggle = (value) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="flex rounded-[60px] p-0.5 bg-[#353535]">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
            selectedValue === option.value
              ? "bg-white text-gray-800 rounded-[60px]"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => handleToggle(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
