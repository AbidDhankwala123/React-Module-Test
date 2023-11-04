import React, { useEffect } from 'react'
import "../styles/NotesSection.css"

const NotesSection = ({setVisible,groupName,bgColor}) => {


    function displayNotesName(){
        setVisible(true);
    }
  return (
    <div className='notes-section-container' >
        <h3 className='heading'>Pocket Notes</h3>
        <div className='create-notes-section'>
            <button onClick={displayNotesName}><span className='plus-btn'>+</span> Create Notes group</button>
            <div>
                {/*  style={{backgroundColor:"#F7ECDC",borderRadius:"20px 0 0 20px",padding:"10px 20px"}}*/}
                
                
                {groupName.map((name,idx) => {
                    return(
                        <div key={idx} className='notes'>
                            {console.log(bgColor)}
                            <span style={{backgroundColor:name.bgColor}}>{name.inputText.slice(0,2)}</span>
                            <strong>{name.inputText}</strong>
                        </div>
                    )
                })}
                
                
            </div>
        </div>
    </div>
  )
}

export default NotesSection
