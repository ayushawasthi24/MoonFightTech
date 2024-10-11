import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Avatar,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomToggle from "../../common/CustomToggle/CustomToggle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BottomBar from "../../common/BottomBar/BottomBar";

const winnings = [
  { rank: "# 1", amount: "5k" },
  { rank: "# 2", amount: "1k" },
  { rank: "# 3", amount: "500" },
  { rank: "# 4 - 100", amount: "500" },
  { rank: "# 100 - 1000", amount: "10" },
  { rank: "# 1000 - 5000", amount: "2" },
];

const teamsData = [
  { name: "Sara", tier: "T5", imageUrl: "https://i.pravatar.cc/50?img=1" },
  { name: "Arya", tier: "T4", imageUrl: "https://i.pravatar.cc/50?img=2" },
  { name: "Degen", tier: "T3", imageUrl: "https://i.pravatar.cc/50?img=3" },
  { name: "Wrap", tier: "T2", imageUrl: "https://i.pravatar.cc/50?img=4" },
  { name: "Katy", tier: "T2", imageUrl: "https://i.pravatar.cc/50?img=5" },
  { name: "Frenzy", tier: "T1", imageUrl: "https://i.pravatar.cc/50?img=6" },
];

const PricePool = () => {
  const { slug } = useParams();
  const search = useLocation().search;
  const type = new URLSearchParams(search).get("type");

  let val = 0;
  switch (type) {
    case "winning":
      val = 0;
      break;
    case "leaderboard":
      val = 1;
      break;
    case "points-calculation":
      val = 2;
      break;
    default:
      val = 0;
  }
  const [tabValue, setTabValue] = useState(val);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    let newType = "";
    switch (newValue) {
      case 0:
        newType = "winning";
        break;
      case 1:
        newType = "leaderboard";
        break;
      case 2:
        newType = "points-calculation";
        break;
      default:
        newType = "winning";
    }
    // Construct new URL with updated query parameter
    const url = new URL(window.location.href);
    url.searchParams.set("type", newType);

    // Navigate to the new route
    navigate(`${url.pathname}?${url.searchParams.toString()}`);
  };
  const handleToggleChange = (value) => {
    console.log(value);
  };
  const handleBack = () => {
    console.log("Back button clicked");
    navigate("/game/sol-maxis-vs-eth-maxis");
  };
  const backButton = [
    {
      text: "Back",
      bgColor: "bg-[#6B61FF]",
      textColor: "text-white",
      onClick: () => console.log("Back button clicked"),
    },
  ];
  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-2 items-center justify-center">
          <ArrowBackIcon className="text-white" onClick={handleBack} />
          <img
            src="/images/sol.png"
            alt="Solana logo"
            className="rounded-full w-[20px] h-[20px]"
          />
          <h2 className="text-[12px] font-bold">Sol Maxis vs Eth Maxis</h2>
          <img
            src="/images/eth.png"
            alt="Ethereum logo"
            className="w-[20px] h-[20px] rounded-full"
          />
        </div>
      </div>
      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{
          fontFamily: "Nohemi",
          "& .MuiTab-root": {
            color: "#fff",
            textTransform: "none",
            fontWeight: "400",
          },
          "& .Mui-selected": { color: "#6B61FF" },
          "& .MuiTabs-indicator": { backgroundColor: "#6B61FF" },
        }}
      >
        <Tab label="Winnings" />
        <Tab label="Leaderboard" />
        <Tab label="Points Calculation" />
      </Tabs>
      {type === "winning" && (
        <div className="">
          {/* Custom Toggle */}
          <div className="flex items-center justify-center my-4">
            <CustomToggle
              options={[
                { label: "Current Fill", value: "current" },
                { label: "Max Fill", value: "max" },
              ]}
              defaultValue="current"
              onChange={handleToggleChange}
            />
          </div>

          {/* Winnings Table */}
          <List sx={{ mt: 2, flex: 1, overflow: "auto" }}>
            {winnings.map((item, index) => (
              <ListItem
                key={index}
                sx={{ borderBottom: "1px solid #333", py: 1.5 }}
              >
                <ListItemText primary={item.rank} sx={{ color: "#888" }} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "right",
                  }}
                >
                  {/* Inline SVG */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    {/* Inline SVG */}
                    <img
                      src="/images/coin.png"
                      alt="logo"
                      style={{ width: 20, height: 20, marginRight: 8 }}
                    />

                    <ListItemText
                      primary={`${item.amount}`}
                      sx={{ color: "white" }}
                    />
                  </div>
                </div>
              </ListItem>
            ))}
          </List>
        </div>
      )}
      {type === "leaderboard" && (
        <div>
          <div className="my-4 text-[10px] mx-4">All Teams (41,234)</div>
          <hr className="border-[1px] border-[#323232]" />

          {/* Teams List */}
          <div className="w-full">
            {teamsData.map((team, index) => (
              <>
                <div
                  key={index}
                  className="flex items-center justify-start gap-4 transition-all duration-300 p-2 text-[12px]"
                >
                  <div className="flex items-center">
                    <Avatar src={team.imageUrl} alt={team.name} />
                    <span className="ml-4 text-lg">{team.name}</span>
                  </div>
                  <div className="bg-[#353535] rounded-md p-1">{team.tier}</div>
                </div>
                <hr className="border-[1px] border-[#323232]" />
              </>
            ))}
          </div>
        </div>
      )}
      {type === "points-calculation" && (
        <div className="text-white p-3 rounded-[12px] border-[1px] border-[#424242] m-4">
          {/* Price Section */}
          <Accordion
            sx={{
              background: "#1E1E1E",
              color: "white",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="price-content"
              id="price-header"
              className="text-white"
            >
              <span className="font-medium">Price</span>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#1E1E1E", color: "white" }}>
              <ul className="space-y-2">
                <li className="flex justify-between bg-[#35353580] rounded-[6px] p-1 px-2">
                  <span>Price Increase</span>
                  <span className="text-green-400">+1 point</span>
                </li>
                <li className="flex justify-between bg-[#35353580] rounded-[6px] p-1 px-2">
                  <span>5% Price Jump</span>
                  <span className="text-green-400">+5 points</span>
                </li>
                <li className="flex justify-between bg-[#35353580] rounded-[6px] p-1 px-2">
                  <span>10% Price Jump</span>
                  <span className="text-green-400">+15 points</span>
                </li>
                <li className="flex justify-between bg-[#35353580] rounded-[6px] p-1 px-2">
                  <span>Price Decrease</span>
                  <span className="text-red-400">-1 point</span>
                </li>
                <li className="flex justify-between bg-[#35353580] rounded-[6px] p-1 px-2">
                  <span>5% Price Decrease</span>
                  <span className="text-red-400">-5 points</span>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <div className="border-t border-[1px] border-[#424242]" />

          {/* Makers Section */}
          <Accordion sx={{ background: "#1E1E1E", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="makers-content"
              id="makers-header"
            >
              <span className="font-medium">Makers</span>
            </AccordionSummary>
            <AccordionDetails>
              <p className="bg-[#35353580] rounded-[6px] p-1 px-2">
                Details about Makers...
              </p>
            </AccordionDetails>
          </Accordion>

          <div className="border-t border-[1px] border-[#424242]" />

          {/* Transactions Section */}
          <Accordion sx={{ background: "#1E1E1E", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="transactions-content"
              id="transactions-header"
            >
              <span className="font-medium">Transactions</span>
            </AccordionSummary>
            <AccordionDetails>
              <p className="bg-[#35353580] rounded-[6px] p-1 px-2">Details about Transactions...</p>
            </AccordionDetails>
          </Accordion>

          <div className="border-t border-[1px] border-[#424242]" />

          {/* Volume Section */}
          <Accordion sx={{ background: "#1E1E1E", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="volume-content"
              id="volume-header"
            >
              <span className="font-medium">Volume</span>
            </AccordionSummary>
            <AccordionDetails>
              <p className="bg-[#35353580] rounded-[6px] p-1 px-2">Details about Volume...</p>
            </AccordionDetails>
          </Accordion>

          <div className="border-t border-[1px] border-[#424242]" />

          {/* Liquidity Section */}
          <Accordion sx={{ background: "#1E1E1E", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="liquidity-content"
              id="liquidity-header"
            >
              <span className="font-medium">Liquidity</span>
            </AccordionSummary>
            <AccordionDetails>
              <p className="bg-[#35353580] rounded-[6px] p-1 px-2">Details about Liquidity...</p>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
      <BottomBar buttons={backButton} />
    </div>
  );
};

export default PricePool;
