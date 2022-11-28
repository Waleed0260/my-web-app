import React from 'react'
import "./Frontend.css"
import styled from 'styled-components';


const Frontend = ({open}) => {
  if(!open) return null;


  return (
    <div className='front'>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <p>HTML</p>
      <p>99%</p>
      </div>
      <div className='font'><div></div></div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <p>CSS</p>
      <p>90%</p>
      </div>
      <div className='font'><div className="css-react"></div></div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <p>REACT JS</p>
      <p>90%</p>

      </div>
      <div className='font'><div className="css-react"></div></div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <p>JavaScript</p>
      <p>60%</p>
      </div>
      <div className='font'><div className='java'></div></div>

    </div>
  )
}


export default Frontend
