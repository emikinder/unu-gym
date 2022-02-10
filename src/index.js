import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dias from "./Routes/Dias";
import DiaDetalle from "./Routes/DiaDetalle";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="dias" element={<Dias />}>
        <Route path=":diaId" element={<DiaDetalle />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);