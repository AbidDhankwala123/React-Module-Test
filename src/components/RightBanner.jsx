import React from 'react'
import image from "../assets/notes.png"
import lock from "../assets/lock.png"
import "../styles/RightBanner.css"

const RightBanner = () => {
  return (
    <div style={{ width: "70vw", backgroundColor: "#F7ECDC" }} className='right-banner'>
      <img src={image} alt={image} className='notes-img' />

      <p className='pocket'>Pocket Notes</p>
      
      <p className='text'>Send and receive messages without keeping your phone online.
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>

      <div>
        <img src={lock} alt={lock} className='lock-image' />
        <span className='lock-text'>end-to-end encrypted</span>
      </div>

    </div>
  )
}

export default RightBanner
