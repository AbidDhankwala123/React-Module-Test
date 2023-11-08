import React, { useState, useEffect } from 'react'
import "../styles/TextAreaSection.css"
import rightarrow from "../assets/rightarrow.png"
import leftarrow from "../assets/leftarrow.png"


const TextAreaSection = ({ setNotesBgColor, noteId, isActive, setActive, textInputText, setTextInputText, textGroupName, setTextGroupName, textInput, textSlice, textBgColor }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleString("default", {
      dateStyle: "long"
    });
    console.log(formattedDate);
    setDate(formattedDate);
  }, [])

  const updateCurrentTime = () => {
    let currentTime = new Date();
    let formattedTime = currentTime.toLocaleTimeString("default", {
      hour: '2-digit',
      minute: '2-digit',
    });
    setTime(formattedTime);
  };

  useEffect(() => {
    // Call the function to update the time initially
    updateCurrentTime();
    // Set up an interval to update the time every second (1000 milliseconds)
    const interval = setInterval(updateCurrentTime, 1000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const texts = () => {
    setTextInputText('');
    const newNote = {
      id: noteId,
      title: textInput,
      content: textInputText,
      date: date,
      time: time,
    };
    setTextGroupName([...textGroupName, newNote]);
    localStorage.setItem("newNoteObj", JSON.stringify([...textGroupName, newNote]));
    setTextInputText('');
  }

  useEffect(() => {
    const storedData = localStorage.getItem('newNoteObj');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setTextGroupName(parsedData);
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      texts();
    }
  };

  return (
    <>
      {isActive && <div className='textarea-section-container'>
        <div className='notes textarea-notes'>
          <img src={leftarrow} alt={leftarrow} className='left-arrow' onClick={() => { setActive(false); setNotesBgColor(false); }} />
          <span style={{ backgroundColor: textBgColor }}>{textSlice}</span>
          <strong>{textInput}</strong>
        </div>

        <div className='display-texts' style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
          {textGroupName && textGroupName.map((text, idx) => {
            return (
              noteId === text.id ? <div style={{ display: "flex", gap: "3vw" }} key={idx}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className='time-date'>
                    {text.time}
                  </span>
                  <span className='time-date'>
                    {text.date}
                  </span>
                </div>
                <div className='para'>
                  <p>{text.content}</p>
                </div>
              </div>
                : "")
          })}
        </div>

        <div className='textarea-container'>
          <textarea placeholder='Enter your text here...........' value={textInputText} onChange={(e) => setTextInputText(e.target.value)} onKeyDown={handleKeyDown}></textarea>
          <img src={rightarrow} alt={rightarrow} className='rightarrow-img' onClick={texts} />
        </div>

      </div>}
    </>
  )
}

export default TextAreaSection