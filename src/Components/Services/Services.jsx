import React from "react";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Heartemoji from "../../img/heartemoji.png";
import './Services.css'
import Card from "./Card/Card";
import Cv from "./Cv.pdf"

import { useContext } from "react";
import { themeContext } from "../../Context";

import { motion } from "framer-motion"

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;



  const transition = {duration : 1, type : 'spring'}

  return (
    <div className="services-int" id="service">
      {/*  */}
      <div className="awesome">
        <span> <h1  style={{color: darkMode ? "white": ""}}>My Awesome</h1></span>
        <span> <h1> services</h1></span>
        <span>I designed exceptionally beautiful Front-End projects that attracts the user
        <br/>I build single page applications using React
        </span>
        <a href={Cv} download>
          <button className="button s-button">Download CV</button>
          </a>
        
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
      </div>
      {/* cards */}
      <div className="cards">
        <motion.div 
        initial={{left: '25rem'}}
        whileInView={{left: '14rem'}}
        transition={transition}
        
        style={{left: '14rem'}}>
          <Card
          emoji={Heartemoji}
          heading={'Single Page'}
          detail={"Fast and Responsive, Enhanced User Experience"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
        initial={{left: '-10rem'}}
        whileInView={{top: '12rem', left: '-4rem'}}
         style={{top: '12rem', left: '-4rem'}}>
          <Card
          emoji={Glasses}
          heading={"Developer"}
          detail={"Html, css, javscript, react"}
          />
        </motion.div>
        {/* third card */}
        <motion.div
        initial={{left: '16rem'}}
        whileInView={{top: "19rem", left:'12rem'}}
        style={{top: "19rem", left:'12rem'}}>
        <Card
          emoji={Humble}
          heading={'UI/UX'}
          detail={'Visual , hierarchy, contrast, Gestalt , balance, accessibility, proximity'}
          />
        </motion.div>
        <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
      </div>
    </div>



  );
};

export default Services;
