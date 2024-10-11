import React from "react";
import Login from "./components/features/Login/Login";
import Home from "./components/features/Home/Home";
import GlobalStyle from "./styles/globalStyles";
import RaffleDetails from "./components/features/RaffleDetails/RaffleDetails";
import PricePool from "./components/features/PricePool/PricePool";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game/:slug" element={<RaffleDetails />} />
        <Route path="/price-pool/:slug" element={<PricePool />} />
      </Routes>
    </Router>
  );
};

export default App;
