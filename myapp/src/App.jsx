import React from "react";
import Counter from "./Counter";
import Form from "./Form";
import Array from "./Array";
import Temp from "./Temp";
import Fetch from "./Fetch";
import Count from "./Count";
import FirstPage from './Router/FirstPage';
import SecondPage from './Router/SecondPage';
import ThirdPage from './Router/ThirdPage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
      </Routes>
    </div>
  );
}

export default App;
