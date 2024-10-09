import React from "react";
import Login from "./components/features/Login/Login";
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/common/Header/Header";
import BottomNavbar from "./components/common/BottomNavbar/BottomNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Header />} />
      </Routes>
      <BottomNavbar />
    </Router>
  );
};

export default App;
