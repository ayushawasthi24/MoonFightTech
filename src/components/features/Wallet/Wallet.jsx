import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import { Wallet, Download, Upload, X, Copy } from "lucide-react";
import BackHeader from "../../common/BackHeader/BackHeader";
import CustomToggle from "../../common/CustomToggle/CustomToggle";
import CustomModal from "../../common/CustomModal/CustomModal";
import BottomNavbar from "../../common/BottomNavbar/BottomNavbar";
import Shimmer from "../../common/Shimmer/Shimmer";
import { useSnackbar } from "../../../contexts/SnackbarContext";
import fetcher from "../../../services/apiFetcher";
import { getUserData, saveUserData } from "../../../utils/indexedDb";

const DATA_MAX_AGE = 1000 * 60 * 60 * 24; // 24 hours

const WalletPage = () => {
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [chains, setChains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChain, setSelectedChain] = useState("");
  const [userData, setUserData] = useState(null);
  const showSnackbar = useSnackbar();
  const walletAddress = localStorage.getItem("walletAddress");

  const handleCopy = () => {
    if (walletAddress) {
      navigator.clipboard
        .writeText(walletAddress)
        .then(() => {
          showSnackbar("Address copied to clipboard", "success");
        })
        .catch((err) => {
          console.error("Failed to copy address: ", err);
        });
    }
  };

  const toggleDepositModal = () => setIsDepositOpen(!isDepositOpen);

  useEffect(() => {
    const fetchChains = async () => {
      setLoading(true);
      try {
        const response = await fetcher.get("/users/chains");
        setChains(response);
      } catch (error) {
        console.error("Failed to fetch chains:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchChains();
  }, []);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        let id = JSON.parse(localStorage.getItem("user")).id;
        const storedData = await getUserData(id);
        console.log(storedData);
        const now = Date.now();

        if (storedData && now - storedData.fetchedAt < DATA_MAX_AGE) {
          console.log("Using cached data");
          setUserData(storedData);
          setLoading(false);
        } else {
          // Fetch fresh data
          console.log("Fetching fresh data");
          const response = await fetcher.get("/users/profile");
          const dataWithTimestamp = { ...response, fetchedAt: now };
          setUserData(dataWithTimestamp);
          await saveUserData(dataWithTimestamp);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error loading user data:", error);
        setLoading(false);
      }
    };
    loadUserData();
  }, []);

  const handleChainChange = (event) => {
    setSelectedChain(event.target.value);
  };

  const renderTransactionList = () => {
    const transactions = [
      {
        type: "debit",
        amount: 50,
        description: "USDC debited for Clan Creation",
      },
      {
        type: "credit",
        amount: 10,
        description: "USDC credited for Sol Contest",
      },
      {
        type: "debit",
        amount: 50,
        description: "USDC debited for Clan Creation",
      },
    ];

    return transactions.map((transaction, index) => (
      <div
        key={index}
        className="flex items-center space-x-3 bg-[#353535] p-3 rounded-[12px]"
      >
        <div className="bg-[#32BA7C33] w-[32px] h-[32px] rounded-[4px] flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.92009 9.99406C7.79342 9.99406 7.66675 9.9474 7.56675 9.8474L5.86009 8.14073C5.66675 7.9474 5.66675 7.6274 5.86009 7.43406C6.05342 7.24073 6.37342 7.24073 6.56675 7.43406L7.92009 8.7874L9.27342 7.43406C9.46675 7.24073 9.78676 7.24073 9.98009 7.43406C10.1734 7.6274 10.1734 7.9474 9.98009 8.14073L8.27342 9.8474C8.17342 9.9474 8.04675 9.99406 7.92009 9.99406Z"
              fill="#32BA7C"
            />
            <path
              d="M7.91992 9.94602C7.64659 9.94602 7.41992 9.71935 7.41992 9.44602V2.66602C7.41992 2.39268 7.64659 2.16602 7.91992 2.16602C8.19326 2.16602 8.41992 2.39268 8.41992 2.66602V9.44602C8.41992 9.71935 8.19326 9.94602 7.91992 9.94602Z"
              fill="#32BA7C"
            />
            <path
              d="M8.00033 13.9525C4.56699 13.9525 2.16699 11.5525 2.16699 8.11914C2.16699 7.84581 2.39366 7.61914 2.66699 7.61914C2.94033 7.61914 3.16699 7.84581 3.16699 8.11914C3.16699 10.9658 5.15366 12.9525 8.00033 12.9525C10.847 12.9525 12.8337 10.9658 12.8337 8.11914C12.8337 7.84581 13.0603 7.61914 13.3337 7.61914C13.607 7.61914 13.8337 7.84581 13.8337 8.11914C13.8337 11.5525 11.4337 13.9525 8.00033 13.9525Z"
              fill="#32BA7C"
            />
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-sm">{transaction.description}</div>
          <div className="text-xs text-zinc-400">
            USDC {transaction.type === "credit" ? "credited" : "debited"}
          </div>
        </div>
        <div className="font-semibold">{transaction.amount}</div>
      </div>
    ));
  };

  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white">
      <BackHeader title="Wallet" />
      {loading ? (
        <Shimmer />
      ) : (
        <>
          <div className="p-4 space-y-4 bg-[#353535] mx-[16px] rounded-[12px]">
            <div className="flex items-center space-x-2">
              <img
                src="/images/wallet.png"
                className="w-[44px] h-[44px]"
                alt="Wallet"
              />
              <div className="flex flex-col">
                <span className="font-[400] text-[12px] text-[#D2D2D2]">
                  Usable Balance
                </span>
                <div className="flex gap-2">
                  <img
                    src="/images/coin.png"
                    alt="Coin"
                    className="w-[20px] h-[20px]"
                  />
                  <span className="font-[400] text-[16px] text-white">
                    {userData.balance}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                className="flex-1 flex items-center justify-center space-x-1 text-[#D2D2D2] font-bold py-2 px-4 rounded"
                onClick={toggleDepositModal}
              >
                <img
                  src="/images/deposit.png"
                  alt="Deposit"
                  className="w-[32px] h-[32px]"
                />
                <span className="font-[400] text-[12px]">Deposit Crypto</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-1 text-[#D2D2D2] font-bold py-2 px-4 rounded">
                <img
                  src="/images/transfer.png"
                  alt="Transfer"
                  className="w-[32px] h-[32px]"
                />
                <span className="font-[400] text-[12px]">Transfer Crypto</span>
              </button>
            </div>
          </div>

          <div className="px-4 pb-4">
            <div className="flex items-center justify-center my-4">
              <CustomToggle
                options={[
                  { label: "Transactions", value: "transactions" },
                  { label: "Portfolio", value: "portfolio" },
                ]}
                defaultValue="transactions"
                onChange={(value) => console.log(value)}
              />
            </div>
            <div className="space-y-3">{renderTransactionList()}</div>
          </div>

          <CustomModal
            isOpen={isDepositOpen}
            onClose={toggleDepositModal}
            title="Deposit Funds"
            customStyles={{
              overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
            }}
          >
            <div className="bg-[#1E1E1E] rounded-lg p-3">
              <FormControl
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "#1E1E1E", borderRadius: "8px" }}
              >
                <InputLabel id="chain-select-label" sx={{ color: "#fff" }}>
                  Select chain for USDC Deposit
                </InputLabel>
                <Select
                  labelId="chain-select-label"
                  value={selectedChain}
                  onChange={handleChainChange}
                  label="Select chain for USDC Deposit"
                  sx={{
                    backgroundColor: "#1E1E1E",
                    borderRadius: "8px",
                    color: "#fff",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#333",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#555",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#777",
                    },
                  }}
                >
                  {loading ? (
                    <MenuItem disabled>
                      <CircularProgress size={24} color="inherit" />
                    </MenuItem>
                  ) : (
                    chains.map((chain) => (
                      <MenuItem key={chain.chainId} value={chain.chainId}>
                        {chain.chain} (Mainnet) - {chain.testnet} (Testnet)
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
            </div>

            <div className="bg-[#1E1E1E] rounded-lg p-4 flex justify-between items-center">
              <div className="text-sm font-mono overflow-hidden overflow-ellipsis">
                {walletAddress}
              </div>
              <Copy className="w-5 h-5 cursor-pointer" onClick={handleCopy} />
            </div>

            <div className="text-[12px] font-400 text-[#D2D2D2]">
              Note: Please deposit USDC using only the network specified above.
            </div>

            <div className="mt-6">
              <button
                onClick={toggleDepositModal}
                className="bg-[#5A5AFF] text-white py-2 px-4 rounded-lg w-full"
              >
                Done
              </button>
            </div>
          </CustomModal>

          {!isDepositOpen && <BottomNavbar />}
        </>
      )}
    </div>
  );
};

export default WalletPage;
