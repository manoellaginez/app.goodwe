import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Cadastro from "./screens/cadastro/cadastro.jsx";
import Cadastro1 from "./screens/cadastro1/index.jsx";
import Entrar from "./screens/entrar/entrar.jsx";
import Dispositivos from "./screens/dispositivos/dispositivos.jsx"; 
import Entre from "./screens/entre/entre.jsx";
import AddNovoEspaco from "./screens/addnovoespaco/addnovoespaco.jsx";
import Addnovodispositivo from "./screens/addnovodispositivo/addnovodispositivo.jsx";
import Gastos from "./screens/gastos/gastos.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Redireciona "/" automaticamente para "/cadastro" */}
        <Route path="/" element={<Navigate to="/cadastro" replace />} />

        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro1" element={<Cadastro1 />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/dispositivos" element={<Dispositivos />} /> 
        <Route path="/entre" element={<Entre />} />
        <Route path="/addnovoespaco" element={<AddNovoEspaco />} /> 
        <Route path="/addnovodispositivo" element={<Addnovodispositivo />} />
        <Route path="/gastos" element={<Gastos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
