import React from 'react'
import "../styles/TextAreaSection.css"
import rightarrow from "../assets/rightarrow.png"

const TextAreaSection = () => {
  return (
    <div style={{height:"100vh",width:"70vw",backgroundColor:"#E8E8E8",position:"absolute",right:"0",top:"0"}} className='text-container'>
      <div className='notes textarea-notes'>
          <span>CU</span>
          <strong>Cuvette Notes</strong>
      </div>

      <div style={{backgroundColor:"#F7ECDC",padding:"20px",marginTop:"10px",overflow:"auto"}} className='display-texts'>
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

        {/* <div style={{display:"flex"}}>
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
        </div> */}

      </div>

      <div className='textarea-container'>
        <textarea placeholder='Enter your text here...........'></textarea>
        <img src={rightarrow} alt={rightarrow} className='rightarrow-img'/>
      </div>
    </div>
  )
}

export default TextAreaSection
