import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Salutation from "./assets/component/Salutation";

function App() {
  return (
    <div className="dark:bg-[#2d2d2d] dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Salutation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
