import React from "react";
// import "./App.css";
// import Main from "./components/Main";
import Homepage from '../src/components/pages/Homepage'
import MainCookies from "../src/components/pages/CookiesPage/MainCookies";
import MainPrivacy from "../src/components/pages/PrivacyPage/MainPrivacy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="cookies" element={<MainCookies />} />
          <Route path="privacy" element={<MainPrivacy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;