import React from "react";
import Login from "./components/features/Login/Login";
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/common/Header/Header";
import BottomNavbar from "./components/common/BottomNavbar/BottomNavbar";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Login />
      <BottomNavbar />
    </>
  );
};

export default App;
