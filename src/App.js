
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from "./components/CarList";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/page/:page" element={<CarList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
