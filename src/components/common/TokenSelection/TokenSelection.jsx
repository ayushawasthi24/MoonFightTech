import React, { useEffect, useState } from "react";

const TokenSelection = ({ contest, selectedTokens }) => {
  const [creditsLeft, setCreditsLeft] = useState(contest?.maxCredit);

  useEffect(() => {
    const creditsUsed = selectedTokens.reduce(
      (acc, token) => acc + token.credits,
      0
    );
    setCreditsLeft(contest?.maxCredit - creditsUsed);
  }, [selectedTokens, contest?.maxCredit]);

  return (
    <div className="my-4 rounded-md p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-[14px] font-bold">Create Team</h3>
      </div>
      <div className="flex justify-between py-2">
        <div className="flex flex-col gap-1">
          <div className="flex gap-4 py-2">
            {selectedTokens.length > 0
              ? selectedTokens.map((token, index) => (
                  <img
                    key={index}
                    src={token.image_url}
                    alt={`Token ${index + 1}`}
                    className="w-[16px] h-[16px]"
                  />
                ))
              : Array.from({ length: contest.maxTokens }).map((_, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.99999 4.6543C7.06379 4.6543 6.31332 5.40945 6.31332 6.34096C6.31332 7.24015 7.01575 7.9733 7.90576 8.0199C7.96707 8.01489 8.03245 8.01445 8.09595 8.01981C8.98214 7.97246 9.68083 7.24215 9.68666 6.33955C9.68589 5.40967 8.93004 4.6543 7.99999 4.6543ZM5.31332 6.34096C5.31332 4.85915 6.50952 3.6543 7.99999 3.6543C9.4828 3.6543 10.6867 4.85815 10.6867 6.34096V6.34379H10.6866C10.6785 7.78936 9.54145 8.97143 8.09703 9.02067C8.06769 9.02167 8.03833 9.02009 8.00928 9.01594C8.01215 9.01635 8.01271 9.01631 8.01087 9.01619C8.00915 9.01608 8.00628 9.01596 8.00249 9.01596C7.9943 9.01596 7.98673 9.01651 7.98201 9.0171C7.95579 9.02038 7.92936 9.02157 7.90295 9.02067C6.46106 8.97152 5.31332 7.79127 5.31332 6.34096Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.96455 11.6167C4.45109 11.9625 4.16408 12.3583 4.05224 12.7344C5.12304 13.631 6.49581 14.1677 7.99999 14.1677C9.50417 14.1677 10.8769 13.631 11.9477 12.7344C11.8358 12.3581 11.5486 11.9621 11.0347 11.6162C10.2279 11.0766 9.13082 10.791 8.00499 10.791C6.87963 10.791 5.77872 11.0763 4.96455 11.6167ZM8.00499 9.79102C9.28223 9.79102 10.5849 10.112 11.5914 10.7855L11.5925 10.7862C12.3942 11.3257 12.9043 12.058 12.9905 12.8681C13.0073 13.026 12.9481 13.1825 12.831 13.2898C11.5558 14.4575 9.86325 15.1677 7.99999 15.1677C6.13673 15.1677 4.44415 14.4575 3.16898 13.2898C3.05187 13.1825 2.99266 13.026 3.00946 12.8681C3.09565 12.058 3.60574 11.3257 4.40752 10.7862L4.41 10.7845L4.41001 10.7845C5.42238 10.1121 6.72759 9.79102 8.00499 9.79102Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.00001 1.83398C4.59425 1.83398 1.83334 4.59489 1.83334 8.00065C1.83334 11.4064 4.59425 14.1673 8.00001 14.1673C11.4058 14.1673 14.1667 11.4064 14.1667 8.00065C14.1667 4.59489 11.4058 1.83398 8.00001 1.83398ZM0.833344 8.00065C0.833344 4.04261 4.04197 0.833984 8.00001 0.833984C11.9581 0.833984 15.1667 4.04261 15.1667 8.00065C15.1667 11.9587 11.9581 15.1673 8.00001 15.1673C4.04197 15.1673 0.833344 11.9587 0.833344 8.00065Z"
                      fill="white"
                    />
                  </svg>
                ))}
          </div>
          <p>Select 5 tokens to participate</p>
        </div>
        <div className="text-xs flex flex-col items-center gap-1">
          <span>Credits Left</span>
          <span className="font-bold rounded-[70px] w-[53px] text-center p-2 bg-[#FFFFFF33]">
            {creditsLeft}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TokenSelection;
