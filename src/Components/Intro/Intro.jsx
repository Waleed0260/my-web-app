import React from 'react'
import './Intro.css'
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import instagram from "../../img/instagram (1).png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import Floatingdiv from '../FloatingDiv/Floatingdiv'


import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'


import { useContext } from "react";
import { themeContext } from "../../Context";
import { Element } from 'react-scroll'

import { motion } from "framer-motion"



const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  const transition = {duration : 2, type : 'spring'}
  return (
    <Element name="intro">
    <div className='intro' id='intro'>
      <div className="i-left">
        <div className="i-name">
            <span> <h1 style={{color: darkMode ? "white": ""}}>Hy I'm</h1> </span>
            <span> <h1> Waleed</h1></span>
            <span>I'm a Front end developer with hands on experience in React and JavaScript producing the quality work</span>
        </div>
        <div className="button i-button"><a href="https://www.fiverr.com/share/8mXdjv" target="blank">Hire me</a></div>
        <div className="i-icons">
         <a target="blank" href="https://github.com/Waleed0260"> <img src={Github} alt="" /></a>
         <a target="blank" href="https://www.linkedin.com/in/waleed0260/"><img src={Linkedin} alt="" /></a>
         <a target="blank" href="https://www.facebook.com/Waleed0260"> <img src={instagram} alt="" /></a>
        </div>
      </div>

      <div className="i-right">
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" />
      <motion.img
      initial={{left: '-36%'}} 
      whileInView={{left: '-24%'}}
      transition={transition}
      className="moji"
      src={glassesimoji} alt=""/>



      <motion.div
      initial={{top: '-4%', left:'74%'}}
      whileInView={{left: '68%'}}
      transition={transition}
      style={{top: '-4%', left:'68%'}}
      className="floating-div">
        <Floatingdiv image={Crown} txt1='Frontend' txt2='Developer'/>
      </motion.div>




      <motion.div
      initial={{top: '18rem', left: '9rem'}}
      whileInView={{top: '18rem', left: '0rem'}}
      transition={transition}
      style={{top: '18rem', left: '0rem'}}
      className="floating-div">
        <Floatingdiv image={thumbup} txt1='Best Design' txt2='Award'/>
      </motion.div>
      {/* blur divs */}
      <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
      <div className="blur" style={{top: '17rem', width: '21rem', height: '11rem', background: '#C1F5FF'}}></div>
      </div>
    </div>


<Services />
<Experience />
<Skills/>
<Portfolio />
<Contact />

</Element>
  )
}

export default Intro
