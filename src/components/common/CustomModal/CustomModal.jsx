import React from "react";
import { X } from "lucide-react";
import BottomBar from "../BottomBar/BottomBar";

const CustomModal = ({
  isOpen,
  onClose,
  title,
  children,
  customStyles = {},
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-end"
      style={customStyles.overlay}
    >
      <div
        className="bg-[#353535] w-full p-6 rounded-t-3xl h-auto"
        style={customStyles.modal}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Render the children prop */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
