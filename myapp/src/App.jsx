import React from "react";
import Counter from "./Counter";
import Form from "./Form";
import Array from "./Array";
import Temp from "./Temp";
import Fetch from "./Fetch";
import Count from "./Count";
import FirstPage from './Router/Firstpage';
import SecondPage from './Router/Secondpage';
import ThirdPage from './Router/Thirdpage'
import FourthPage from './Router/Fourthpage';
import Navbar from "./Navbar";
import "./style.css"
import { Route, Routes } from "react-router-dom";
import Bang from "./container/Bang";
import Delhi from "./container/Delhi";
import Hyb from "./container/Hyd";
import Vizag from "./container/Vizag";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/fourth" element={<FourthPage />} />
        </Routes>

        <div className="grid">
          <Bang />
        </div>
      </div>
      
    </>
   
  );
}

export default App;
