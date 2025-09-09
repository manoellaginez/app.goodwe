import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Cadastro from "./screens/cadastro/cadastro.jsx";
import Cadastro1 from "./screens/cadastro1/index.jsx";
import Entrar from "./screens/entrar/entrar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro1" element={<Cadastro1 />} />
        <Route path="/entrar" element={<Entrar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
