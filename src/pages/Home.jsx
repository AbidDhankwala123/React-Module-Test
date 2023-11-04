import React, { useState } from 'react'
import NotesSection from '../components/NotesSection'
import RightBanner from '../components/RightBanner'
import CreateNotes from '../components/CreateNotes'
import TextAreaSection from '../components/TextAreaSection'


const Home = () => {
  let [visible, setVisible] = useState(false);
  let [inputText, setInputText] = useState('');
  let [groupName, setGroupName] = useState([]);
  let [bgColor, setBgColor] = useState("");

  
  return (
    <>
      <div style={{ height: "100vh", display: "flex" }}>
        <NotesSection setVisible={setVisible} groupName={groupName} bgColor={bgColor}/>
        <RightBanner />
      </div>

      <CreateNotes bgColor={bgColor} setBgColor={setBgColor} visible={visible} setVisible={setVisible} inputText={inputText} setInputText={setInputText} groupName={groupName} setGroupName={setGroupName} />
      
      {/* <TextAreaSection /> */}
    </>
  )
}

export default Home
