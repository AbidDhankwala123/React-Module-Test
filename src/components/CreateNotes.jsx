import React from 'react'
import "../styles/CreateNotes.css"

const CreateNotes = () => {
  return (
    <div style={{height:"100vh",background: "rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"0",width:"100%"}}>
      <div style={{backgroundColor:"white",height:"200px",width:"500px",padding:"20px"}} className='popup-section'>

        <h3>Create New Notes Group</h3>
        
        <div>
            <strong>Group Name</strong>
            <input type="text" placeholder='Enter your group name....' />
        </div>

        <div>
            <strong>Choose colour</strong>
            <span className='colors color1'></span>
            <span className='colors color2'></span>
            <span className='colors color3'></span>
            <span className='colors color4'></span>
            <span className='colors color5'></span>
            <span className='colors color6'></span>
        </div>

        <button>Create</button>
      </div>
    </div>
  )
}

export default CreateNotes
