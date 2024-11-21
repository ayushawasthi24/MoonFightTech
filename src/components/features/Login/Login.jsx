import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import fetcher from "../../../services/apiFetcher";
import { useSDK } from "@metamask/sdk-react";

const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connectAndSign = async () => {
    try {
      const signResult = await sdk?.connectAndSign({
        msg: "Connect + Sign message",
      });
      setAccount(signResult);
      console.log("signResult", signResult);
      localStorage.setItem("walletAddress", signResult);
      navigate("/home");
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

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
          localStorage.setItem("walletAddress", address);
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

  useEffect(() => {
    if (connected) {
      // navigate("/home");
    }
  }, []);

  return (
    <div className="h-screen overflow-y-hidden flex items-center justify-center bg-[url('/images/loginbg.png')] bg-cover bg-center">
      {/* Decorative Star Images */}
      <img
        src="/images/star.png"
        alt=""
        className="absolute left-[-20%] top-[-15%] rotate-[48.77deg] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
      />
      <div className="absolute left-[20%] bottom-[-5%] h-[25%] overflow-hidden sm:left-[25%] sm:bottom-[-9%] sm:h-[30%]">
        <img
          src="/images/star.png"
          alt=""
          className="relative overflow-hidden rotate-[12deg] w-[250px] h-[250px] sm:w-[200px] sm:h-[200px]"
        />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-xs sm:max-w-md p-6 sm:p-8 bg-gradient-to-b from-[#FFFFFF66] to-[#FFFFFF29] rounded-[24px] shadow-lg mx-4 sm:mx-8 text-[14px] font-[500] border border-solid border-transparent">
        {/* Title */}
        <h2 className="text-center text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6">
          Get Started Now
        </h2>

        {/* Google Login Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 rounded-full flex items-center justify-center mb-3 sm:mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google"
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
          />
          Login with Google
        </button>

        {/* OR Divider */}
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <div className="border-t w-full"></div>
          <span className="mx-2 text-gray-400 text-sm sm:text-base">or</span>
          <div className="border-t w-full"></div>
        </div>

        {/* Wallet Connection Buttons */}
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 sm:py-3 px-2 sm:px-3 rounded-full flex items-center justify-center mb-2 sm:mb-3"
          onClick={connectAndSign}
        >
          <img
            src="/images/metamask.png"
            alt=""
            className="h-5 w-5 rounded-full p-1 bg-[#0C091B33] mr-2"
          />
          Connect your Metamask Wallet
        </button>

        <button
          className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 sm:py-3 px-2 sm:px-3 rounded-full flex items-center justify-center mb-2 sm:mb-3"
          onClick={connectAndSign}
        >
          <img
            src="/images/metamask.png"
            alt=""
            className="h-5 w-5 rounded-full p-1 bg-[#0C091B33] mr-2"
          />
          Connect your Phantom Wallet
        </button>

        <button
          className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 sm:py-3 px-2 sm:px-3 rounded-full flex items-center justify-center mb-2 sm:mb-3"
          onClick={connectAndSign}
        >
          <img
            src="/images/metamask.png"
            alt=""
            className="h-5 w-5 rounded-full p-1 bg-[#0C091B33] mr-2"
          />
          Connect your Rabby Wallet
        </button>

        <button
          className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 sm:py-3 px-2 sm:px-3 rounded-full flex items-center justify-center"
          onClick={connectAndSign}
        >
          <img
            src="/images/metamask.png"
            alt=""
            className="h-5 w-5 rounded-full p-1 bg-[#0C091B33] mr-2"
          />
          Connect your Trust Wallet
        </button>

        {/* Terms and Privacy */}
        <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
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
