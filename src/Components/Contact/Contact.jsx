import { useRef } from 'react';
import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import "./Contact.css"

import { useContext } from "react";
import { themeContext } from "../../Context";


const Contact = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;




    const form = useRef();
    const[done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_upldur8', 'template_n8becxf', form.current, 'y6z2sRx7Auv4wYE4l')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contact-form'>
      <div className="w-left">
        <div className="awesome">
            <span> <h1  style={{color: darkMode ? "white": ""}}>Get in touch</h1></span>
            <span><h1>Contact me</h1></span>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className='user' placeholder='Name'/>
            <input type="email" name="user_name" className='user' placeholder='Email' required/>
            <textarea name="message" className='user' placeholder='Message'/>
            <input type="submit" value="Send" className="button" />
            <span>{done && "thanks for the contactin me"}</span>
            <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>
        </form>
      </div>
    </div>
  )
}

export default Contact
