import React from "react";
import Header from "./components/Header";
import './App.css';

import Dias from "./Routes/Dias";
import DiaDetalle from "./Routes/DiaDetalle";
import Ingreso from "./components/Ingreso";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Ingreso />} />
        <Route path="dias" element={<Dias />} />
        <Route path="dias/:diaId" element={<DiaDetalle />} />
      </Routes>
    </>
  );
}

export default App;
