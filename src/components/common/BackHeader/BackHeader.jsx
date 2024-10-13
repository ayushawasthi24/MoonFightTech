import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackHeader = ({ title, img1, img2 }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex gap-2 items-center justify-center">
        <ArrowBackIcon className="text-white" onClick={handleBack} />
        {img1 && <img src={img1} className="rounded-full w-[20px] h-[20px]" />}
        <h2 className="text-[12px] font-bold">{title}</h2>
        {img2 && <img src={img2} className="w-[20px] h-[20px] rounded-full" />}
      </div>
    </div>
  );
};

export default BackHeader;
