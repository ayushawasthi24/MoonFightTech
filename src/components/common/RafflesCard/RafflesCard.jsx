import React from "react";

export default function RafflesCard() {
  return (
    <div className="w-full bg-[#353535] rounded-[12px] overflow-hidden shadow-lg h-[126px] my-[12px]">
      <div className="flex justify-between h-[19px] text-white text-[10px] bg-[#535353] text-xs">
        <span className="my-auto ml-[10px] text-[10px] font-[400]">
          Start : 21 Aug 12:00 PM GMT
        </span>
        <span className="my-auto mr-[10px] text-[10px] font-[400]">
          End : 21 Aug 12:30 PM GMT
        </span>
      </div>
      <div className="px-4 py-4 flex items-center justify-between text-[12px]">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img
              src="/images/sol.png"
              alt="Solana logo"
              className="rounded-full w-[35px] h-[35px]"
            />
          </div>
          <span className="text-white text-[12px] font-[500]">Sol maxis</span>
        </div>
        <div className="text-[#FF0000] font-[600] text-[10px] bg-[#FFF7F70D] p-[5px] rounded-[4px]">
          15m 30s
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-white text-[12px] font-[500]">ETH maxis</span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img
              src="/images/eth.png"
              alt="Ethereum logo"
              className="rounded-full w-[33px] h-[33px]"
            />
          </div>
        </div>
      </div>
      <div className="border-t-[0.5px] border-[#535353]" />
      <div className="px-4 py-[6px] flex justify-between items-center">
        <div className="bg-[#FFF7F70D] rounded-[12px] px-4 py-2 text-[10px] text-white h-[27px] flex flex-row items-center justify-center">
          <span className="">Entry Fee :</span>
          <img
            src="https://s3-alpha-sig.figma.com/img/2654/d0ea/7067f6da4d09a20d5d807a46ea193b8e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhFJsAcEfgHYBjlUBwEnM5V2DsjYfyWLTwGLq0-rAQaf-MWKlhdz6k~Ffi1~WeYIeturxT2X6iXKyGPW4tYNLfcYzjpWHmpBXw154HaKnJ8CRARJFm~mKy7EHw-Toi4wcyYWL5aeO-gz1KjoTKgVjPxJqwsfeSlTLuMc0roHyX45rDHx2RFR9Y~N0wyYvPDBL7vqzmNfj9FT0YEA~txcFpSlWHHEvlgioAFjmoH6B2sVhkLMlcjcyXp78PiOBcqz6W7hbYWWwTITFy~aSc~4illXRLcRZZewgbAK6Dco4adkgU6nXHzT~x3Qmb424vWMEyhl~Xmzn85KiaEwN4j~NQ__"
            alt=""
            className="w-[10px] h-[10px] mx-[1.2px] md-[3px]"
          />
          <span>10</span>
        </div>
        <div className="bg-gradient-to-r from-[#6B61FF] to-gray-100 rounded-[12px] px-4 py-2 text-[10px] text-white h-[27px] flex flex-row items-center justify-center">
          Mega
          <img
            src="https://s3-alpha-sig.figma.com/img/2654/d0ea/7067f6da4d09a20d5d807a46ea193b8e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhFJsAcEfgHYBjlUBwEnM5V2DsjYfyWLTwGLq0-rAQaf-MWKlhdz6k~Ffi1~WeYIeturxT2X6iXKyGPW4tYNLfcYzjpWHmpBXw154HaKnJ8CRARJFm~mKy7EHw-Toi4wcyYWL5aeO-gz1KjoTKgVjPxJqwsfeSlTLuMc0roHyX45rDHx2RFR9Y~N0wyYvPDBL7vqzmNfj9FT0YEA~txcFpSlWHHEvlgioAFjmoH6B2sVhkLMlcjcyXp78PiOBcqz6W7hbYWWwTITFy~aSc~4illXRLcRZZewgbAK6Dco4adkgU6nXHzT~x3Qmb424vWMEyhl~Xmzn85KiaEwN4j~NQ__"
            alt=""
            className="w-[10px] h-[10px] mx-[1.2px] md-[3px]"
          />
          10k pool
        </div>
      </div>
    </div>
  );
}
