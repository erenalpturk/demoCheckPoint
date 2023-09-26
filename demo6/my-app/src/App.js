import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Homepage2 from './Homapage2';
import Dynamic from './Dynamic';
import All from './All';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Homepage2 />} />
            <Route path="/dynamic/:ahmet" element={<Dynamic />}/>
            <Route path="/all" element={<All />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
