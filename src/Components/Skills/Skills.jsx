import React from 'react'
import "./Skills.css"
import { useContext } from "react";
import { themeContext } from "../../Context";
import { useState } from 'react';
import Frontend from './Frontend/Frontend';
import Designing from './Designing/Designing';
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai"


const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


    const[expand, setExpand] = useState(true);
    const[design, setDesign] = useState(false);



    const handleClick = ()=>{
        setExpand(true);
    }


    const handledesin = ()=>{
      setDesign(true);
    }



  return (
    <div className='skills'>
      <span> <h1 style={{color: darkMode ? "white": ""}}>My Skills</h1></span>
      <span> <p> My Technical level</p></span>
      <div className="two">
      <div className="frontend">
        <span style={{display: "flex", flexDirection: "row", gap: "1rem"}}>
        <h1>Front-end developer</h1>
        <span>{!expand ? <AiOutlineArrowDown style={{marginTop: "2rem", cursor: "pointer"}}  onClick={handleClick}/>  : <AiOutlineArrowUp  style={{marginTop: "2rem", cursor: "pointer"}} onClick={()=> setExpand(false)}/>}</span>
        </span>
        <p>More that two year of experience</p>
        <Frontend open={expand} onClose={()=> setExpand(false)}/>
      </div>
      <div className="designing">
      <span style={{display: "flex", flexDirection: "row", gap: "1rem"}}>
        <h1>Web-Designing</h1>
        <span>{!design ? <AiOutlineArrowDown style={{marginTop: "2rem", cursor: "pointer"}}  onClick={handledesin}/>  : <AiOutlineArrowUp  style={{marginTop: "2rem", cursor: "pointer"}} onClick={()=> setDesign(false)}/>}</span> 
      </span>       
<p>More than two year of experience</p>
        <Designing open={design}/>
      </div>
      </div>
    </div>
  )
}

export default Skills
