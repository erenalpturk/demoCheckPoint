import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import './App.css';
import FilterPage from "./FilterPage";
import FilteredPage from "./FilteredPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/filter" element={<FilterPage />}/>
          <Route path="/filtered/:id/:id2/:id3/:id4" element={<FilteredPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
