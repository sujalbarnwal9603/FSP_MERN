import React from "react";
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;