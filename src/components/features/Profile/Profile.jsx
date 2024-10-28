import React from "react";
import { Copy, ChevronRight, Star } from "lucide-react";
import RafflesCard from "../../common/RafflesCard/RafflesCard";

const UserProfile = () => {
  const recentGames = [
    {
      currency: "USDT",
      tokens: [
        {
          _id: "66e420c2d6f48d6f56e716c3",
          address: "0xa00453052a36d43a99ac1ca145dfe4a952ca33b8",
          chainName: "Ethereum",
          chainId: 1,
          createdAt: "2024-09-13T11:23:46.934Z",
          updatedAt: "2024-10-16T08:06:05.304Z",
          __v: 0,
          decimals: 9,
          image_url:
            "https://coin-images.coingecko.com/coins/images/40146/small/Cate_on_ETH.png?1726048356",
          market_cap_usd: 4039573.2090531,
          name: "Cate",
          price_usd: 0.00407201,
          symbol: "CATE",
          total_reserve_in_usd: 239958.57937328867,
          total_supply: "1000000000000000000.0",
          volume_usd: {
            h24: "166713.730640089",
          },
          avg_points: 0,
          credits: 9,
        },
        {
          _id: "66e420c3d6f48d6f56e716c5",
          address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          chainName: "Ethereum",
          chainId: 1,
          createdAt: "2024-09-13T11:23:47.013Z",
          updatedAt: "2024-10-16T08:06:05.304Z",
          __v: 0,
          decimals: 18,
          image_url:
            "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
          market_cap_usd: 7623653250.71837,
          name: "Wrapped Ether",
          price_usd: 2614.63,
          symbol: "WETH",
          total_reserve_in_usd: 1947835505.490502,
          total_supply: "2936793942508386889024611.0",
          volume_usd: {
            h24: "1125388811.11969",
          },
          avg_points: 0,
          credits: 9,
        },
        {
          _id: "66e420c3d6f48d6f56e716cb",
          address: "0x1121acc14c63f3c872bfca497d10926a6098aac5",
          chainName: "Ethereum",
          chainId: 1,
          createdAt: "2024-09-13T11:23:47.246Z",
          updatedAt: "2024-10-16T08:06:05.304Z",
          __v: 0,
          decimals: 18,
          image_url:
            "https://coin-images.coingecko.com/coins/images/39841/large/Department_Of_Government_Efficiency.png?1724288499",
          market_cap_usd: 11194259.0126847,
          name: "Department Of Government Efficiency",
          price_usd: 0.01119976,
          symbol: "DOGE",
          total_reserve_in_usd: 584607.0781538518,
          total_supply: "1000000000000000000000000000.0",
          volume_usd: {
            h24: "873916.478845817",
          },
          avg_points: 0,
          credits: 9,
        },
        {
          _id: "66e420c3d6f48d6f56e716d5",
          address: "0xf280b16ef293d8e534e370794ef26bf312694126",
          chainName: "Ethereum",
          chainId: 1,
          createdAt: "2024-09-13T11:23:47.623Z",
          updatedAt: "2024-10-16T08:06:05.304Z",
          __v: 0,
          decimals: 9,
          image_url:
            "https://coin-images.coingecko.com/coins/images/50333/large/IMG_0728.jpeg?1727384521",
          market_cap_usd: 662947.349596868,
          name: "Asteroid Shiba",
          price_usd: 0.00000157,
          symbol: "ASTEROID",
          total_reserve_in_usd: 91695.24641497715,
          total_supply: "420690000000000000000.0",
          volume_usd: {
            h24: "31654.8072376589",
          },
          avg_points: 0,
          credits: 9,
        },
      ],
      teams: [
        {
          name: "Sol maxis",
          image_url: "https://dd.dexscreener.com/ds-data/chains/solana.png",
        },
        {
          name: "ETH maxis",
          image_url: "https://dd.dexscreener.com/ds-data/chains/ethereum.png",
        },
        {},
      ],
      _id: "66e0055c3fe790b808fe919f",
      name: "BEST MEME COINS CONTEST SOL VS ETH",
      startDate: "2024-10-09T18:30:00.000Z",
      endDate: "2022-10-31T18:30:00.000Z",
      maxPoolAmount: 10000,
      maxUsers: 1000,
      maxCredit: 50,
      maxTokens: 5,
      live: true,
      entryFee: 1,
      slugKey: "best-meme-coins-contest-sol-vs-eth-xv41y9",
      totalSpots: 10000,
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Profile Header */}
      <div className="relative">
        {/* Banner Image */}
        <div className="h-24 w-full bg-[url('/images/profileBanner.png')] bg-cover relative">
          <div className="absolute -bottom-8 left-4 flex items-center gap-3">
            {/* Profile Image */}
            <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-700 relative">
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800" />
            </div>
          </div>
        </div>
      </div>

      {/* User Info Section */}
      <div className="mt-[60px] px-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-semibold">SIDDHARTH SHANKAR</h1>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
              <span>Wallet ID:</span>
              <span className="font-mono">DxF5cF....Fe7e9A</span>
              <Copy className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="p-4 space-y-4 bg-[#353535] mx-[8px] mt-[10px] rounded-[12px] flex items-center">
          <div className="flex items-center gap-3">
            <img src="/images/wallet.png" alt="USD" className="w-8 h-8" />

            <div>
              <div className="text-sm text-gray-400">USD Balance</div>
              <div className="text-lg font-semibold">3,290</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Recently Played Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recently Played</h2>
            <button className="text-sm text-gray-400">View All</button>
          </div>

          {/* Game Cards */}
          {recentGames.map((game) => (
            <RafflesCard raffleData={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
