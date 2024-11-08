import React, { useEffect, useState } from "react";
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
import BackHeader from "../../common/BackHeader/BackHeader";
import BottomBar from "../../common/BottomBar/BottomBar";
import Shimmer from "../../common/Shimmer/Shimmer";
import fetcher from "../../../services/apiFetcher";

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
    let newType = ["winning", "leaderboard", "points-calculation"][newValue];
    const url = new URL(window.location.href);
    url.searchParams.set("type", newType);
    navigate(`${url.pathname}?${url.searchParams.toString()}`);
  };

  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetcher.get(`/contests/data/${slug}`);
        setApiResponse(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [slug]);

  if (!apiResponse) return <Shimmer />;

  const { winnings, leaderboard, pointsCalculation } = apiResponse;

  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white">
      <BackHeader
        title="Sol Maxis vs Eth Maxis"
        img1="/images/sol.png"
        img2="/images/eth.png"
      />
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
          "& .Mui-selected": { color: "#6B61FF !important" },
          "& .MuiTabs-indicator": { backgroundColor: "#6B61FF" },
        }}
      >
        <Tab label="Winnings" />
        <Tab label="Leaderboard" />
        <Tab label="Points Calculation" />
      </Tabs>

      {type === "winning" && (
        <div>
          <div className="flex items-center justify-center my-4">
            <CustomToggle
              options={[
                { label: "Current Fill", value: "current" },
                { label: "Max Fill", value: "max" },
              ]}
              defaultValue="current"
              onChange={(value) => console.log(value)}
            />
          </div>

          <List sx={{ mt: 2, flex: 1, overflow: "auto" }}>
            {winnings.curentFill.map((item, index) => (
              <ListItem
                key={index}
                sx={{ borderBottom: "1px solid #333", py: 1.5 }}
              >
                <ListItemText
                  primary={`# ${item.rankRange[0]}`}
                  sx={{ color: "#888" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "right",
                  }}
                >
                  <img
                    src="/images/coin.png"
                    alt="logo"
                    style={{ width: 20, height: 20, marginRight: 8 }}
                  />
                  <ListItemText
                    primary={`${item.prize}`}
                    sx={{ color: "white" }}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </div>
      )}

      {type === "leaderboard" && (
        <div>
          <div className="my-4 text-[10px] mx-4">
            All Teams ({leaderboard.totalTeams})
          </div>
          <hr className="border-[1px] border-[#323232]" />
          <div className="w-full">
            {leaderboard.data.map((team, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-4 transition-all duration-300 p-2 text-[12px]"
              >
                <div className="flex items-center">
                  <Avatar src={team.image_url} alt={team.name} />
                  <span className="ml-4 text-lg">{team.name}</span>
                </div>
                <div className="bg-[#353535] rounded-md p-1">
                  {team.team_id}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {type === "points-calculation" && (
        <div className="text-white p-3 rounded-[12px] border-[1px] border-[#424242] m-4">
          {pointsCalculation.map((section, index) => (
            <Accordion
              key={index}
              sx={{ background: "#1E1E1E", color: "white" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls={`${section.type}-content`}
                id={`${section.type}-header`}
              >
                <span className="font-medium">{section.type}</span>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="space-y-2">
                  {section.data.map((point, idx) => (
                    <li
                      key={idx}
                      className={`flex justify-between bg-[#35353580] rounded-[6px] p-1 px-2`}
                    >
                      <span>{point.title}</span>
                      <span
                        className={
                          point.type === "positive"
                            ? "text-green-400"
                            : "text-red-400"
                        }
                      >
                        {point.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}

      <BottomBar
        buttons={[
          {
            text: "Back",
            bgColor: "bg-[#6B61FF]",
            textColor: "text-white",
            onClick: () => console.log("Back button clicked"),
          },
        ]}
      />
    </div>
  );
};

export default PricePool;
