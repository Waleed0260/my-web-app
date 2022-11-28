import React from 'react'
import "./Designing.css"


const Designing = ({open}) => {
    if(!open) return null;
  return (
    <div className='design'>
        <div className="par" style={{display: "flex", justifyContent: "space-between"}}>
        <p>BOOTSTRAP</p>
        <p>99%</p>
        </div>
        <div className='des'><div></div></div>

        <div className="par" style={{display: "flex", justifyContent: "space-between"}}>
        <p>FRAMER-MOTION</p>
        <p>90%</p>
        </div>
        <div className='des'><div className="fram-anim"></div></div>

        <div className="par" style={{display: "flex", justifyContent: "space-between"}}>

        <p>ANIMATIONS</p>
        <p>90%</p>
        </div>
        <div className='des'><div  className="fram-anim" ></div></div>


        <div className="par" style={{display: "flex", justifyContent: "space-between"}}>

        <p>WORDPRESS</p>
        <p>60%</p>
        </div>

        <div className='des'><div className='word'></div></div>






    </div>
  )
}

export default Designing
