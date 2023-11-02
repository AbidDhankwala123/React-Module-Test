import React from 'react'
import "../styles/NotesSection.css"

const NotesSection = () => {
  return (
    <div style={{width:"30vw"}}>
        <h3 className='heading'>Pocket Notes</h3>
        <div className='create-notes-section'>
            <button><span className='plus-btn'>+</span> Create Notes group</button>
            <div>
                {/*  style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}*/}
                
                <div className='notes' >
                    <span>CU</span>
                    <strong>Cuvette Notes</strong>
                </div>
                {/* <div className='notes' style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}>
                    <span>CU</span>
                    <strong>Cuvette Notes</strong>
                </div>
                <div className='notes' style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}>
                    <span>CU</span>
                    <strong>Cuvette Notes</strong>
                </div>
                <div className='notes' style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}>
                    <span>CU</span>
                    <strong>Cuvette Notes</strong>
                </div>
                <div className='notes' style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}>
                    <span>CU</span>
                    <strong>Cuvette Notes</strong>
                </div>
                <div className='notes' style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}>
                    <span>CU</span>
                    <strong>Cuvette Notes</strong>
                </div>
                <div className='notes' style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}>
                    <span>CU</span>
                    <strong>Cuvette Notes</strong>
                </div>
                <div className='notes' style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}>
                    <span>CU</span>
                    <strong>Cuvette Notes</strong>
                </div>
                <div className='notes' style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}>
                    <span>CU</span>
                    <strong>Cuvette Notes</strong>
                </div>
                <div className='notes' style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}>
                    <span>CU</span>
                    <strong>Cuvette Notes</strong>
                </div>
                <div className='notes' style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}>
                    <span>CU</span>
                    <strong>Cuvette Notes</strong>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default NotesSection
