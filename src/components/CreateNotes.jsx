import React, { useEffect, useState } from 'react'
import "../styles/CreateNotes.css"

const CreateNotes = ({ bgColor, setBgColor, visible, setVisible, inputText, setInputText, groupName, setGroupName }) => {

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('groupDetails');
    if (storedData) {
      setGroupName(JSON.parse(storedData));
    }
  }, []);

  const createNotes = () => {
    if (inputText.length === 0 || (active1 === false && active2 === false && active3 === false && active4 === false && active5 === false && active6 === false)) {
      setVisible(true);
    }
    else {
      setInputText("");
      setVisible(false);
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      setActive6(false);
      setGroupName([...groupName, { inputText: inputText, bgColor: bgColor }]);
      localStorage.setItem("groupDetails", JSON.stringify([...groupName, { inputText: inputText, bgColor: bgColor }]));
    }
    console.log(groupName);
  }

  return (
    <>
      {visible && <div className='create-notes-container' onClick={() => setVisible(false)}>

        <div className='popup-section' onClick={(e) => e.stopPropagation()}>

          <h3>Create New Notes Group</h3>

          <div>
            <strong>Group Name</strong>
            <input type="text" placeholder='Enter your group name....' value={inputText} onChange={(e) => setInputText(e.target.value)} />
          </div>

          <div>
            <strong>Choose colour</strong>
            <span className={`colors color1 ${active1 ? "active" : ""}`} onClick={() => { setBgColor("#B38BFA"); setActive1(!active1); setActive2(false); setActive3(false); setActive4(false); setActive5(false); setActive6(false); }}></span>
            <span className={`colors color2 ${active2 ? "active" : ""}`} onClick={() => { setBgColor("#FF79F2"); setActive2(!active2); setActive1(false); setActive3(false); setActive4(false); setActive5(false); setActive6(false); }}></span>
            <span className={`colors color3 ${active3 ? "active" : ""}`} onClick={() => { setBgColor("#43E6FC"); setActive3(!active3); setActive1(false); setActive2(false); setActive4(false); setActive5(false); setActive6(false); }}></span>
            <span className={`colors color4 ${active4 ? "active" : ""}`} onClick={() => { setBgColor("#F19576"); setActive4(!active4); setActive1(false); setActive2(false); setActive3(false); setActive5(false); setActive6(false); }}></span>
            <span className={`colors color5 ${active5 ? "active" : ""}`} onClick={() => { setBgColor("#0047FF"); setActive5(!active5); setActive1(false); setActive2(false); setActive3(false); setActive4(false); setActive6(false); }}></span>
            <span className={`colors color6 ${active6 ? "active" : ""}`} onClick={() => { setBgColor("#6691FF"); setActive6(!active6); setActive1(false); setActive2(false); setActive3(false); setActive4(false); setActive5(false); }}></span>
          </div>

          <button onClick={createNotes}>Create</button>
        </div>
      </div>}
    </>
  )
}

export default CreateNotes