import Home from "./pages/Home";
import NotesSection from "./components/NotesSection";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notessection" element={<NotesSection />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
