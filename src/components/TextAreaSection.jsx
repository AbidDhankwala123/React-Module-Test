import React from 'react'
import "../styles/TextAreaSection.css"
import rightarrow from "../assets/rightarrow.png"
import leftarrow from "../assets/leftarrow.png"
import { useNavigate } from 'react-router-dom'


const TextAreaSection = () => {
  let navigate = useNavigate();

  return (
  <div className='textarea-section-container'>
      <div className='notes textarea-notes'>
        <img src={leftarrow} alt={leftarrow} className='left-arrow' onClick={() => navigate('/notessection')}/>
        <span>CU</span>
        <strong>Cuvette Notes</strong>
      </div>
        
      

      <div className='display-texts'>
        <div style={{display:"flex"}}>
          <div>
            <span className='time-date'>
              10:10 AM
            </span>
            <span className='time-date'>
              9 March 2023
            </span>
          </div>
          <div className='para'>
            <p>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</p>
          </div>
        </div>
    
        

      </div>

      <div className='textarea-container'>
        <textarea placeholder='Enter your text here...........'></textarea>
        <img src={rightarrow} alt={rightarrow} className='rightarrow-img'/>
      </div>
    </div>
  )
}

export default TextAreaSection
