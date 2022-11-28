import React from 'react'
import { useState } from 'react'
import Modal from '../Modal';
import './Card.css'

const Card = ({emoji, heading, detail}) => {
  const [pop, setPop] = useState(false);
  return (
    <div className='card'>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className='c-button' onClick={()=> setPop(true)} style={{cursor: "pointer"}}> Learn more</button>
      <Modal open={pop} onClose={()=> setPop(false)}>
        
      </Modal>
    </div>
  )
}

export default Card
