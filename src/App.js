import React from "react";

import "./App.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp'



import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Footer from "./Components/Footer/Footer";

import { useContext } from "react";
import { themeContext } from "./Context";




function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "rgb(54, 50, 50)" : "whitesmoke",
        color: darkMode ? "white" : "",
      }}
    >
      <>
      <Navbar/>
      <Intro/>
      <Footer />
      <FloatingWhatsApp
        phoneNumber="+923342987718"
        accountName="Waleed"/>
      </>
    </div>
  );
}

export default App;