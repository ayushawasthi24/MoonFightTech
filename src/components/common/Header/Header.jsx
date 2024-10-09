// Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Moon Fight</h1>
      <div className="flex justify-center items-center bg-[#FFFFFF33] rounded-[70px] px-[8px] w-[48px] h-[24px] gap-[8px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/2654/d0ea/7067f6da4d09a20d5d807a46ea193b8e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhFJsAcEfgHYBjlUBwEnM5V2DsjYfyWLTwGLq0-rAQaf-MWKlhdz6k~Ffi1~WeYIeturxT2X6iXKyGPW4tYNLfcYzjpWHmpBXw154HaKnJ8CRARJFm~mKy7EHw-Toi4wcyYWL5aeO-gz1KjoTKgVjPxJqwsfeSlTLuMc0roHyX45rDHx2RFR9Y~N0wyYvPDBL7vqzmNfj9FT0YEA~txcFpSlWHHEvlgioAFjmoH6B2sVhkLMlcjcyXp78PiOBcqz6W7hbYWWwTITFy~aSc~4illXRLcRZZewgbAK6Dco4adkgU6nXHzT~x3Qmb424vWMEyhl~Xmzn85KiaEwN4j~NQ__"
          alt="Coin Icon"
          className="w-[16px] h-[16.5px]"
        />
        <span className="text-white mt-1 text-[12px]">0</span>
      </div>
    </header>
  );
};

export default Header;
