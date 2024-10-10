import React from "react";
import Login from "./components/features/Login/Login";
import Home from "./components/features/Home/Home";
import GlobalStyle from "./styles/globalStyles";
import BottomNavbar from "./components/common/BottomNavbar/BottomNavbar";
import RaffleDetails from "./components/features/RaffleDetails/RaffleDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/raffledetails" element={<RaffleDetails />} />
      </Routes>
      {/* <BottomNavbar /> */}
    </Router>
  );
};

export default App;
