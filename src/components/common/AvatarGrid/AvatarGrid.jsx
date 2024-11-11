import React from "react";

const AvatarGrid = ({ selectedTokens, openModal }) => {
  const avatars = selectedTokens.map((token) => ({
    name: token.symbol,
    credits: token.credits,
    imageUrl: token.image_url,
    buttonIcon: "/icons/Edit Icon.png",
    crownIcon: "/icons/crown 1.png",
  }));

  const joinContest = async () => {
    const tokens = selectedTokens.map((token) => token._id);
    setLoadingJoin(true);

    try {
      const response = await fetcher.post(`/contests/join/${slugKey}`, {
        tokens,
      });
      console.log("Contest joined successfully:", response);
      setJoinSuccess(true);
    } catch (error) {
      handleError(error.response.data.message);
      console.error("Error joining contest:", error);
    } finally {
      setLoadingJoin(false);
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-black text-white text-center">
      {/* Header */}
      <div className="bg-[url('/images/Mask group.png')] py-4 text-[14px] font-medium leading-5 flex justify-center items-center bg-[#1e1e1e]">
        <img
          src="/icons/Solana Icon.png"
          alt="Solana Logo"
          className="w-6 mr-2"
        />
        <span>Team Solana Maxis</span>
      </div>

      {/* Avatar Grid */}
      <div className="flex items-center flex-wrap gap-5 justify-center px-4 py-4">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="w-40 bg-[#353535] border border-[#6b61ff] rounded-[12px] shadow-md flex flex-col items-center relative"
          >
            <img
              src={avatar.imageUrl}
              alt={avatar.name}
              className="w-full h-36 rounded-t-lg object-cover bg-white"
            />
            <div className="font-light text-[16px] w-full text-[#D2D2D2] mt-2 truncate">
              {avatar.name}
            </div>
            <div className="text-[14px] text-white mt-1 mb-2">
              {avatar.credits} Credits
            </div>
            {/* Button */}
            <div className="absolute bottom-[60px] right-[-10px] rounded-full cursor-pointer">
              <img
                src={avatar.buttonIcon}
                alt="button-icon"
                className="w-8 h-8"
              />
            </div>
            {/* Crown Icon */}
            {avatar.crownIcon && (
              <img
                src={avatar.crownIcon}
                alt="crown-icon"
                className="absolute -top-3 -right-3 w-6"
              />
            )}
          </div>
        ))}
      </div>

      {/* Footer with Next button */}
      <div
        className="my-4 py-4 mx-4 bg-[#6B61FF] rounded-[100px] font-bold text-[14px] leading-[17px] cursor-pointer"
        onClick={openModal}
      >
        Next
      </div>
    </div>
  );
};

export default AvatarGrid;
