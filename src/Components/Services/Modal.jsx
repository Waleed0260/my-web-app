import React from 'react'
import {TiTick} from "react-icons/ti"

const MODAL_STYLES = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000,
    border: "4px solid var(--orange)",
    borderRadius: "20px",
    width: "80vw"
    
}
const OVERLAY_STYLES = {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000
}
const FLEX = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "black"
}
const PARA = {
    marginTop: "-9px",
}

const Modal = ({open, onClose}) => {
    if(!open) return null
  return (
    <div style={OVERLAY_STYLES}>
    <div style={MODAL_STYLES}>
      <h1 style={{fontSize: "2rem", fontWeight: "bold", color: "var(--black)", marginTop: "-20px"}}>Services I offer</h1>
      <span style={FLEX}><TiTick style={{marginTop: "-20px"}}/><p style={PARA}>A Single-time File Load Each For HTML, CSS, JS.</p></span>
      <span style={FLEX}><TiTick style={{marginTop: "-20px"}}/><p style={PARA}>No Extra Queries to Server.</p></span>
      <span style={FLEX}><TiTick style={{marginTop: "-20px"}}/><p style={PARA}>Fast and Responsive Front-end Building.</p></span>
      <span style={FLEX}><TiTick style={{marginTop: "-20px"}}/><p style={PARA}>Enhanced User Experiences.</p></span>
      <span style={FLEX}><TiTick style={{marginTop: "-20px"}}/><p style={PARA}>An Absence of Editing Tools That Marketers Understand.</p></span>
      <button onClick={onClose}>Close</button>
    </div>
    </div>
  )
}




export default Modal
