import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import WalletConnect from "@walletconnect/client";
import { ethers } from "ethers";
import { Connection, PublicKey } from "@solana/web3.js";
import fetcher from "../../../services/apiFetcher";

const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);

  const connectMetamaskWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const address = signer.address;

        const nonceResponse = await fetcher.post(`/auth/request-nonce`, {
          address,
        });
        const { nonce } = nonceResponse;

        const message = `Sign this message to log in: ${nonce}`;
        const signature = await signer.signMessage(message);

        const verifyResponse = await fetcher.post(`/auth/verify`, {
          address,
          signature,
        });
        const result = verifyResponse;

        if (result && result.user) {
          setAccount(address);
          localStorage.setItem("user", JSON.stringify(result.user));
          localStorage.setItem("tokens", JSON.stringify(result.tokens));
          localStorage.setItem("token", result.tokens.access.token);
          navigate("/home");
        } else {
          alert("Login failed");
        }
      } catch (error) {
        console.error("Error during login process:", error);
        alert("An error occurred while connecting your wallet.");
      }
    } else {
      alert("Please install MetaMask!");
      window.open("https://metamask.io/download.html", "_blank");
    }
  };

  const connectPhantomWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (error) {
        console.error("Error connecting to Phantom Wallet", error);
      }
    } else {
      alert("Please install Phantom Wallet!");
      window.open("https://phantom.app/download", "_blank"); // Open Phantom installation page
    }
  };

  const connectRabbyWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to Rabby Wallet", error);
      }
    } else {
      alert("Please install Rabby Wallet!");
      window.open("https://rabby.io/download", "_blank"); // Open Rabby installation page
    }
  };

  // navigate to home if local storage contains user and tokens
  useEffect(() => {
    if (localStorage.getItem("user") && localStorage.getItem("tokens")) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-[url('/images/loginbg.png')] bg-cover overflow-hidden">
      <img
        src="/images/star.png"
        alt=""
        className="absolute left-[-100.3px] top-[-100.29px] rotate-[48.77deg] w-[300px] h-[300px]"
      />
      <div className="absolute left-[34.3px] bottom-0 h-[220px] overflow-hidden">
        <img
          src="/images/star.png"
          alt=""
          className="relative rotate-[12deg] w-[350px] h-[350px]"
        />
      </div>
      <div className="w-full max-w-md p-8 bg-gradient-to-b from-[#FFFFFF66] to-[#FFFFFF29] rounded-[24px] shadow-lg mx-8 text-[14px] font-[500] border border-solid border-transparent bg-gradient-to-b from-[#FFFFFFD9] to-[#FFFFFF66]">
        {/* Title Section */}
        <h2 className="text-center text-xl font-bold text-black mb-6">
          Get Started Now
        </h2>

        {/* Google Login Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full flex items-center justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Login with Google
        </button>

        {/* OR Divider */}
        <div className="flex items-center justify-center mb-4">
          <div className="border-t w-full"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="border-t w-full"></div>
        </div>

        {/* Wallet Connection Buttons */}
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-3 rounded-full flex items-center justify-center mb-3"
          onClick={connectMetamaskWallet}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6476 2.67383L13.1523 8.24068L14.5384 4.95631L20.6476 2.67383Z"
              fill="#E2761B"
              stroke="#E2761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.34369 2.67383L10.7787 8.29341L9.46046 4.95631L3.34369 2.67383ZM17.9501 15.5778L15.9539 18.6362L20.225 19.8113L21.4529 15.6456L17.9501 15.5778ZM2.55273 15.6456L3.77307 19.8113L8.04426 18.6362L6.04803 15.5778L2.55273 15.6456Z"
              fill="#E4761B"
              stroke="#E4761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.80349 10.4105L6.61328 12.2109L10.8543 12.3992L10.7037 7.84179L7.80349 10.4105ZM16.1877 10.4105L13.2498 7.78906L13.1519 12.3992L17.3854 12.2109L16.1877 10.4105ZM8.04454 18.6365L10.5907 17.3936L8.39106 15.6761L8.04454 18.6365ZM13.4005 17.3936L15.9541 18.6365L15.6001 15.6761L13.4005 17.3936Z"
              fill="#E4761B"
              stroke="#E4761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.9545 18.6375L13.4009 17.3945L13.6042 19.0593L13.5816 19.7599L15.9545 18.6375ZM8.04492 18.6375L10.4178 19.7599L10.4027 19.0593L10.5911 17.3945L8.04492 18.6375Z"
              fill="#D7C1B3"
              stroke="#D7C1B3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.4563 14.5764L8.33203 13.9511L9.83109 13.2656L10.4563 14.5764ZM13.5373 14.5764L14.1625 13.2656L15.6691 13.9511L13.5373 14.5764Z"
              fill="#233447"
              stroke="#233447"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.04531 18.6365L8.40689 15.5782L6.04907 15.646L8.04531 18.6365ZM15.5933 15.5782L15.9549 18.6365L17.9511 15.646L15.5933 15.5782ZM17.3862 12.2109L13.1526 12.3993L13.5444 14.5763L14.1696 13.2656L15.6762 13.9511L17.3862 12.2109ZM8.33156 13.9511L9.83815 13.2656L10.4559 14.5763L10.8551 12.3993L6.61404 12.2109L8.33156 13.9511Z"
              fill="#CD6116"
              stroke="#CD6116"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.61328 12.2109L8.39106 15.6761L8.3308 13.951L6.61328 12.2109ZM15.6754 13.951L15.6001 15.6761L17.3854 12.2109L15.6754 13.951ZM10.8543 12.3993L10.4551 14.5763L10.9523 17.145L11.0653 13.7627L10.8543 12.3993ZM13.1519 12.3993L12.9485 13.7552L13.0389 17.145L13.5436 14.5763L13.1519 12.3993Z"
              fill="#E4751F"
              stroke="#E4751F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5448 14.5764L13.0401 17.1451L13.4017 17.3937L15.6013 15.6762L15.6767 13.9512L13.5448 14.5764ZM8.33203 13.9512L8.3923 15.6762L10.5919 17.3937L10.9535 17.1451L10.4563 14.5764L8.33203 13.9512Z"
              fill="#F6851B"
              stroke="#F6851B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5816 19.7591L13.6042 19.0586L13.4159 18.8928H10.576L10.4027 19.0586L10.4178 19.7591L8.04492 18.6367L8.87355 19.3147L10.5534 20.4823H13.4385L15.1259 19.3147L15.9545 18.6367L13.5816 19.7591Z"
              fill="#C0AD9E"
              stroke="#C0AD9E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.4005 17.3931L13.0389 17.1445H10.9522L10.5907 17.3931L10.4023 19.0579L10.5756 18.8922H13.4155L13.6039 19.0579L13.4005 17.3931Z"
              fill="#161616"
              stroke="#161616"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9633 8.60227L21.6036 5.52882L20.6469 2.67383L13.4002 8.05236L16.1874 10.4102L20.1271 11.5627L21.0009 10.5458L20.6243 10.2746L21.2269 9.72468L20.7599 9.36309L21.3625 8.90358L20.9633 8.60227ZM2.39453 5.52882L3.03483 8.60227L2.62805 8.90358L3.23069 9.36309L2.77118 9.72468L3.37382 10.2746L2.99717 10.5458L3.86346 11.5627L7.80319 10.4102L10.5904 8.05236L3.34368 2.67383L2.39453 5.52882Z"
              fill="#763D16"
              stroke="#763D16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.1271 11.5634L16.1874 10.4109L17.3851 12.2113L15.5998 15.6764L17.9501 15.6463H21.4529L20.1271 11.5634ZM7.80321 10.4109L3.86347 11.5634L2.55273 15.6463H6.04803L8.39078 15.6764L6.613 12.2113L7.80321 10.4109ZM13.1516 12.3996L13.4002 8.05308L14.5452 4.95703H9.46046L10.5904 8.05308L10.8541 12.3996L10.9444 13.7706L10.952 17.1454H13.0386L13.0537 13.7706L13.1516 12.3996Z"
              fill="#F6851B"
              stroke="#F6851B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Connect your Metamask Wallet</span>
        </button>

        <button
          className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-3 px-3 gap-1 rounded-full flex items-center justify-center mb-3"
          onClick={connectPhantomWallet}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6476 2.67383L13.1523 8.24068L14.5384 4.95631L20.6476 2.67383Z"
              fill="#E2761B"
              stroke="#E2761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.34369 2.67383L10.7787 8.29341L9.46046 4.95631L3.34369 2.67383ZM17.9501 15.5778L15.9539 18.6362L20.225 19.8113L21.4529 15.6456L17.9501 15.5778ZM2.55273 15.6456L3.77307 19.8113L8.04426 18.6362L6.04803 15.5778L2.55273 15.6456Z"
              fill="#E4761B"
              stroke="#E4761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.80349 10.4105L6.61328 12.2109L10.8543 12.3992L10.7037 7.84179L7.80349 10.4105ZM16.1877 10.4105L13.2498 7.78906L13.1519 12.3992L17.3854 12.2109L16.1877 10.4105ZM8.04454 18.6365L10.5907 17.3936L8.39106 15.6761L8.04454 18.6365ZM13.4005 17.3936L15.9541 18.6365L15.6001 15.6761L13.4005 17.3936Z"
              fill="#E4761B"
              stroke="#E4761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.9545 18.6375L13.4009 17.3945L13.6042 19.0593L13.5816 19.7599L15.9545 18.6375ZM8.04492 18.6375L10.4178 19.7599L10.4027 19.0593L10.5911 17.3945L8.04492 18.6375Z"
              fill="#D7C1B3"
              stroke="#D7C1B3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.4563 14.5764L8.33203 13.9511L9.83109 13.2656L10.4563 14.5764ZM13.5373 14.5764L14.1625 13.2656L15.6691 13.9511L13.5373 14.5764Z"
              fill="#233447"
              stroke="#233447"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.04531 18.6365L8.40689 15.5782L6.04907 15.646L8.04531 18.6365ZM15.5933 15.5782L15.9549 18.6365L17.9511 15.646L15.5933 15.5782ZM17.3862 12.2109L13.1526 12.3993L13.5444 14.5763L14.1696 13.2656L15.6762 13.9511L17.3862 12.2109ZM8.33156 13.9511L9.83815 13.2656L10.4559 14.5763L10.8551 12.3993L6.61404 12.2109L8.33156 13.9511Z"
              fill="#CD6116"
              stroke="#CD6116"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.61328 12.2109L8.39106 15.6761L8.3308 13.951L6.61328 12.2109ZM15.6754 13.951L15.6001 15.6761L17.3854 12.2109L15.6754 13.951ZM10.8543 12.3993L10.4551 14.5763L10.9523 17.145L11.0653 13.7627L10.8543 12.3993ZM13.1519 12.3993L12.9485 13.7552L13.0389 17.145L13.5436 14.5763L13.1519 12.3993Z"
              fill="#E4751F"
              stroke="#E4751F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5448 14.5764L13.0401 17.1451L13.4017 17.3937L15.6013 15.6762L15.6767 13.9512L13.5448 14.5764ZM8.33203 13.9512L8.3923 15.6762L10.5919 17.3937L10.9535 17.1451L10.4563 14.5764L8.33203 13.9512Z"
              fill="#F6851B"
              stroke="#F6851B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5816 19.7591L13.6042 19.0586L13.4159 18.8928H10.576L10.4027 19.0586L10.4178 19.7591L8.04492 18.6367L8.87355 19.3147L10.5534 20.4823H13.4385L15.1259 19.3147L15.9545 18.6367L13.5816 19.7591Z"
              fill="#C0AD9E"
              stroke="#C0AD9E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.4005 17.3931L13.0389 17.1445H10.9522L10.5907 17.3931L10.4023 19.0579L10.5756 18.8922H13.4155L13.6039 19.0579L13.4005 17.3931Z"
              fill="#161616"
              stroke="#161616"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9633 8.60227L21.6036 5.52882L20.6469 2.67383L13.4002 8.05236L16.1874 10.4102L20.1271 11.5627L21.0009 10.5458L20.6243 10.2746L21.2269 9.72468L20.7599 9.36309L21.3625 8.90358L20.9633 8.60227ZM2.39453 5.52882L3.03483 8.60227L2.62805 8.90358L3.23069 9.36309L2.77118 9.72468L3.37382 10.2746L2.99717 10.5458L3.86346 11.5627L7.80319 10.4102L10.5904 8.05236L3.34368 2.67383L2.39453 5.52882Z"
              fill="#763D16"
              stroke="#763D16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.1271 11.5634L16.1874 10.4109L17.3851 12.2113L15.5998 15.6764L17.9501 15.6463H21.4529L20.1271 11.5634ZM7.80321 10.4109L3.86347 11.5634L2.55273 15.6463H6.04803L8.39078 15.6764L6.613 12.2113L7.80321 10.4109ZM13.1516 12.3996L13.4002 8.05308L14.5452 4.95703H9.46046L10.5904 8.05308L10.8541 12.3996L10.9444 13.7706L10.952 17.1454H13.0386L13.0537 13.7706L13.1516 12.3996Z"
              fill="#F6851B"
              stroke="#F6851B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Connect your Phantom Wallet</span>
        </button>

        <button
          className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-3 px-3 gap-2 rounded-full flex items-center justify-center mb-3"
          onClick={connectRabbyWallet}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6476 2.67383L13.1523 8.24068L14.5384 4.95631L20.6476 2.67383Z"
              fill="#E2761B"
              stroke="#E2761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.34369 2.67383L10.7787 8.29341L9.46046 4.95631L3.34369 2.67383ZM17.9501 15.5778L15.9539 18.6362L20.225 19.8113L21.4529 15.6456L17.9501 15.5778ZM2.55273 15.6456L3.77307 19.8113L8.04426 18.6362L6.04803 15.5778L2.55273 15.6456Z"
              fill="#E4761B"
              stroke="#E4761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.80349 10.4105L6.61328 12.2109L10.8543 12.3992L10.7037 7.84179L7.80349 10.4105ZM16.1877 10.4105L13.2498 7.78906L13.1519 12.3992L17.3854 12.2109L16.1877 10.4105ZM8.04454 18.6365L10.5907 17.3936L8.39106 15.6761L8.04454 18.6365ZM13.4005 17.3936L15.9541 18.6365L15.6001 15.6761L13.4005 17.3936Z"
              fill="#E4761B"
              stroke="#E4761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.9545 18.6375L13.4009 17.3945L13.6042 19.0593L13.5816 19.7599L15.9545 18.6375ZM8.04492 18.6375L10.4178 19.7599L10.4027 19.0593L10.5911 17.3945L8.04492 18.6375Z"
              fill="#D7C1B3"
              stroke="#D7C1B3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.4563 14.5764L8.33203 13.9511L9.83109 13.2656L10.4563 14.5764ZM13.5373 14.5764L14.1625 13.2656L15.6691 13.9511L13.5373 14.5764Z"
              fill="#233447"
              stroke="#233447"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.04531 18.6365L8.40689 15.5782L6.04907 15.646L8.04531 18.6365ZM15.5933 15.5782L15.9549 18.6365L17.9511 15.646L15.5933 15.5782ZM17.3862 12.2109L13.1526 12.3993L13.5444 14.5763L14.1696 13.2656L15.6762 13.9511L17.3862 12.2109ZM8.33156 13.9511L9.83815 13.2656L10.4559 14.5763L10.8551 12.3993L6.61404 12.2109L8.33156 13.9511Z"
              fill="#CD6116"
              stroke="#CD6116"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.61328 12.2109L8.39106 15.6761L8.3308 13.951L6.61328 12.2109ZM15.6754 13.951L15.6001 15.6761L17.3854 12.2109L15.6754 13.951ZM10.8543 12.3993L10.4551 14.5763L10.9523 17.145L11.0653 13.7627L10.8543 12.3993ZM13.1519 12.3993L12.9485 13.7552L13.0389 17.145L13.5436 14.5763L13.1519 12.3993Z"
              fill="#E4751F"
              stroke="#E4751F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5448 14.5764L13.0401 17.1451L13.4017 17.3937L15.6013 15.6762L15.6767 13.9512L13.5448 14.5764ZM8.33203 13.9512L8.3923 15.6762L10.5919 17.3937L10.9535 17.1451L10.4563 14.5764L8.33203 13.9512Z"
              fill="#F6851B"
              stroke="#F6851B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5816 19.7591L13.6042 19.0586L13.4159 18.8928H10.576L10.4027 19.0586L10.4178 19.7591L8.04492 18.6367L8.87355 19.3147L10.5534 20.4823H13.4385L15.1259 19.3147L15.9545 18.6367L13.5816 19.7591Z"
              fill="#C0AD9E"
              stroke="#C0AD9E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.4005 17.3931L13.0389 17.1445H10.9522L10.5907 17.3931L10.4023 19.0579L10.5756 18.8922H13.4155L13.6039 19.0579L13.4005 17.3931Z"
              fill="#161616"
              stroke="#161616"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9633 8.60227L21.6036 5.52882L20.6469 2.67383L13.4002 8.05236L16.1874 10.4102L20.1271 11.5627L21.0009 10.5458L20.6243 10.2746L21.2269 9.72468L20.7599 9.36309L21.3625 8.90358L20.9633 8.60227ZM2.39453 5.52882L3.03483 8.60227L2.62805 8.90358L3.23069 9.36309L2.77118 9.72468L3.37382 10.2746L2.99717 10.5458L3.86346 11.5627L7.80319 10.4102L10.5904 8.05236L3.34368 2.67383L2.39453 5.52882Z"
              fill="#763D16"
              stroke="#763D16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.1271 11.5634L16.1874 10.4109L17.3851 12.2113L15.5998 15.6764L17.9501 15.6463H21.4529L20.1271 11.5634ZM7.80321 10.4109L3.86347 11.5634L2.55273 15.6463H6.04803L8.39078 15.6764L6.613 12.2113L7.80321 10.4109ZM13.1516 12.3996L13.4002 8.05308L14.5452 4.95703H9.46046L10.5904 8.05308L10.8541 12.3996L10.9444 13.7706L10.952 17.1454H13.0386L13.0537 13.7706L13.1516 12.3996Z"
              fill="#F6851B"
              stroke="#F6851B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Connect your Rabby Wallet
        </button>

        <button
          className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-3 px-3 gap-2 rounded-full flex items-center justify-center"
          // onClick={connectTrustWallet}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6476 2.67383L13.1523 8.24068L14.5384 4.95631L20.6476 2.67383Z"
              fill="#E2761B"
              stroke="#E2761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.34369 2.67383L10.7787 8.29341L9.46046 4.95631L3.34369 2.67383ZM17.9501 15.5778L15.9539 18.6362L20.225 19.8113L21.4529 15.6456L17.9501 15.5778ZM2.55273 15.6456L3.77307 19.8113L8.04426 18.6362L6.04803 15.5778L2.55273 15.6456Z"
              fill="#E4761B"
              stroke="#E4761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.80349 10.4105L6.61328 12.2109L10.8543 12.3992L10.7037 7.84179L7.80349 10.4105ZM16.1877 10.4105L13.2498 7.78906L13.1519 12.3992L17.3854 12.2109L16.1877 10.4105ZM8.04454 18.6365L10.5907 17.3936L8.39106 15.6761L8.04454 18.6365ZM13.4005 17.3936L15.9541 18.6365L15.6001 15.6761L13.4005 17.3936Z"
              fill="#E4761B"
              stroke="#E4761B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.9545 18.6375L13.4009 17.3945L13.6042 19.0593L13.5816 19.7599L15.9545 18.6375ZM8.04492 18.6375L10.4178 19.7599L10.4027 19.0593L10.5911 17.3945L8.04492 18.6375Z"
              fill="#D7C1B3"
              stroke="#D7C1B3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.4563 14.5764L8.33203 13.9511L9.83109 13.2656L10.4563 14.5764ZM13.5373 14.5764L14.1625 13.2656L15.6691 13.9511L13.5373 14.5764Z"
              fill="#233447"
              stroke="#233447"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.04531 18.6365L8.40689 15.5782L6.04907 15.646L8.04531 18.6365ZM15.5933 15.5782L15.9549 18.6365L17.9511 15.646L15.5933 15.5782ZM17.3862 12.2109L13.1526 12.3993L13.5444 14.5763L14.1696 13.2656L15.6762 13.9511L17.3862 12.2109ZM8.33156 13.9511L9.83815 13.2656L10.4559 14.5763L10.8551 12.3993L6.61404 12.2109L8.33156 13.9511Z"
              fill="#CD6116"
              stroke="#CD6116"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.61328 12.2109L8.39106 15.6761L8.3308 13.951L6.61328 12.2109ZM15.6754 13.951L15.6001 15.6761L17.3854 12.2109L15.6754 13.951ZM10.8543 12.3993L10.4551 14.5763L10.9523 17.145L11.0653 13.7627L10.8543 12.3993ZM13.1519 12.3993L12.9485 13.7552L13.0389 17.145L13.5436 14.5763L13.1519 12.3993Z"
              fill="#E4751F"
              stroke="#E4751F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5448 14.5764L13.0401 17.1451L13.4017 17.3937L15.6013 15.6762L15.6767 13.9512L13.5448 14.5764ZM8.33203 13.9512L8.3923 15.6762L10.5919 17.3937L10.9535 17.1451L10.4563 14.5764L8.33203 13.9512Z"
              fill="#F6851B"
              stroke="#F6851B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5816 19.7591L13.6042 19.0586L13.4159 18.8928H10.576L10.4027 19.0586L10.4178 19.7591L8.04492 18.6367L8.87355 19.3147L10.5534 20.4823H13.4385L15.1259 19.3147L15.9545 18.6367L13.5816 19.7591Z"
              fill="#C0AD9E"
              stroke="#C0AD9E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.4005 17.3931L13.0389 17.1445H10.9522L10.5907 17.3931L10.4023 19.0579L10.5756 18.8922H13.4155L13.6039 19.0579L13.4005 17.3931Z"
              fill="#161616"
              stroke="#161616"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9633 8.60227L21.6036 5.52882L20.6469 2.67383L13.4002 8.05236L16.1874 10.4102L20.1271 11.5627L21.0009 10.5458L20.6243 10.2746L21.2269 9.72468L20.7599 9.36309L21.3625 8.90358L20.9633 8.60227ZM2.39453 5.52882L3.03483 8.60227L2.62805 8.90358L3.23069 9.36309L2.77118 9.72468L3.37382 10.2746L2.99717 10.5458L3.86346 11.5627L7.80319 10.4102L10.5904 8.05236L3.34368 2.67383L2.39453 5.52882Z"
              fill="#763D16"
              stroke="#763D16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.1271 11.5634L16.1874 10.4109L17.3851 12.2113L15.5998 15.6764L17.9501 15.6463H21.4529L20.1271 11.5634ZM7.80321 10.4109L3.86347 11.5634L2.55273 15.6463H6.04803L8.39078 15.6764L6.613 12.2113L7.80321 10.4109ZM13.1516 12.3996L13.4002 8.05308L14.5452 4.95703H9.46046L10.5904 8.05308L10.8541 12.3996L10.9444 13.7706L10.952 17.1454H13.0386L13.0537 13.7706L13.1516 12.3996Z"
              fill="#F6851B"
              stroke="#F6851B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Connect your Trust Wallet
        </button>

        {/* Terms and Privacy */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By logging in I agree to the{" "}
          <a href="#" className="text-blue-500 underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 underline">
            Privacy Policy
          </a>{" "}
          of FanTV
        </p>
      </div>
    </div>
  );
};

export default Login;
