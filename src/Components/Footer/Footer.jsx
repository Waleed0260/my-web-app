import React from 'react'
import "./Footer.css"
import Wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
import Github from "@iconscout/react-unicons/icons/uil-github"


const Footer = () => {
  return (
    <>
    <div className="foot">
    <hr />
    <div className="footer">
      <div className="name">
        <pre>Designed by &copy; Muhammad Waleed Ahsan</pre>
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/waleed0260"><Linkedin/></a>
        <a href="https://github.com/Waleed0260/"><Github/></a>
        <a href="https://www.facebook.com/Waleed0260"><Insta/></a>
      </div>
    </div>
    </div>
    </>
  )
}
export default Footer
