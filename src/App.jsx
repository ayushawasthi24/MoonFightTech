import React from "react";
import Login from "./components/features/Login/Login";
import Home from "./components/features/Home/Home";
import MyRaffles from "./components/features/MyRaffles/MyRaffles";
import GlobalStyle from "./styles/globalStyles";
import RaffleDetails from "./components/features/RaffleDetails/RaffleDetails";
import PricePool from "./components/features/PricePool/PricePool";
import TokenDetails from "./components/features/TokenDetails/TokenDetails";
import Wallet from "./components/features/Wallet/Wallet";
import Profile from "./components/features/Profile/Profile";
import GraphComponent from "./components/features/Graph";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my-raffles" element={<MyRaffles />} />
        <Route path="/game/:slug" element={<RaffleDetails />} />
        <Route path="/price-pool/:slug" element={<PricePool />} />
        <Route path="/token-details/:slug" element={<TokenDetails />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/graph" element={<GraphComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
