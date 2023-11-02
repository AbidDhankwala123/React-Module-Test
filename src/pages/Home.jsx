import React from 'react'
import NotesSection from '../components/NotesSection'
import RightBanner from '../components/RightBanner'
import CreateNotes from '../components/CreateNotes'
import TextAreaSection from '../components/TextAreaSection'


const Home = () => {
  return (
    <>
      <div style={{height:"100vh",display:"flex"}}>
        <NotesSection/>
        <RightBanner/>
      </div>
      {/* <CreateNotes/> */}
      {/* <TextAreaSection/> */}
    </>
  )
}

export default Home
