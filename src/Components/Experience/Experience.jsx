import React from "react";
import "./Experience.css"
import { useContext } from "react";
import { themeContext } from "../../Context";



const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="experience">
      <h1 style={{color: darkMode ? "white": ""}}>About Me</h1>
      <span><p>I'm a REACT and JavaScript based Frontend developer builds the front end portion of websites and mobile apps. I designed beautiful and and modern day user-interfaces that improvised the performance websites. I'm specialized in REACT JS that boosts up the speed of the websites.</p></span>
      <div className="exp">
      <div className="achievement">
        <div className="circle">2+</div>
        <span style={{color: darkMode ? "white": ""}}>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">20+</div>
        <span style={{color: darkMode ? "white": ""}}>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
      <span style={{color: darkMode ? "white": ""}}>Companies</span>
      <span>work</span>
      </div>
      </div>
    </div>
  );
};

export default Experience;