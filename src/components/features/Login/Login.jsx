import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/loginbg.png')]">
        {/* <img
          src="/images/star.png"
          alt=""
          className="absolute left-[31.3px] top-[-103.29px]"
        /> */}
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg mx-8">
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
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full flex items-center justify-center mb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
            alt="Metamask"
            className="w-6 h-6 mr-2"
          />
          Connect your Metamask Wallet
        </button>

        <button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-3 rounded-full flex items-center justify-center mb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
            alt="Phantom"
            className="w-6 h-6 mr-2"
          />
          Connect your Phantom Wallet
        </button>

        <button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-3 rounded-full flex items-center justify-center mb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
            alt="Rabby"
            className="w-6 h-6 mr-2"
          />
          Connect your Rabby Wallet
        </button>

        <button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-3 rounded-full flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
            alt="Trust Wallet"
            className="w-6 h-6 mr-2"
          />
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
