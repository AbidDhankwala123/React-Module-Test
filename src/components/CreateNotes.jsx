import React, { useEffect } from 'react'
import "../styles/CreateNotes.css"

const CreateNotes = ({bgColor,setBgColor, visible, setVisible, inputText, setInputText, groupName, setGroupName }) => {

  
  function createNotes() {
    setInputText("");
    setVisible(false);
    if(inputText.length == 0){
      setVisible(true);
    }
    else{
      setGroupName([...groupName, {inputText:inputText,bgColor:bgColor}]);
    }
    // setInputText("");
    // setVisible(false);
    console.log(groupName);
  }
// useEffect(createNotes,[groupName])
  
  
  
  return (
    <>
      {visible && <div className='create-notes-container'>
        
        <div className='popup-section'>

          <h3>Create New Notes Group</h3>

          <div>
            <strong>Group Name</strong>
            <input type="text" placeholder='Enter your group name....' value={inputText} onChange={(e) => setInputText(e.target.value)} />
          </div>

          <div>
            <strong>Choose colour</strong>
            <span className='colors color1' onClick={() => setBgColor("#B38BFA")}></span>
            <span className='colors color2' onClick={() => setBgColor("#FF79F2")}></span>
            <span className='colors color3' onClick={() => setBgColor("#43E6FC")}></span>
            <span className='colors color4' onClick={() => setBgColor("#F19576")}></span>
            <span className='colors color5' onClick={() => setBgColor("#0047FF")}></span>
            <span className='colors color6' onClick={() => setBgColor("#6691FF")}></span>
          </div>

          <button onClick={createNotes}>Create</button>
        </div>
      </div>}
    </>
  )
}

export default CreateNotes
