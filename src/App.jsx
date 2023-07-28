import React from "react";
import "./App.css";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/thanks" element={<ThankYou />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
