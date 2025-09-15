import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Cadastro from "./screens/cadastro/cadastro.jsx";
import Cadastro1 from "./screens/cadastro1/index.jsx";
import Dispositivos from "./screens/dispositivos/dispositivos.jsx";
import Entre from "./screens/entre/entre.jsx";
import HomePage from "./screens/homepage/homepage.jsx"; 
import HomePage2 from "./screens/homepage2/homepage2.jsx"; // Importa o novo componente
import Addnovodispositivo from "./screens/addnovodispositivo/addnovodispositivo.jsx";
import Gastos from "./screens/gastos/gastos.jsx"; 
import Chatbot from "./screens/chatbot/chatbot.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Redireciona "/" automaticamente para "/cadastro" */}
        <Route path="/" element={<Navigate to="/cadastro" replace />} />

        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro1" element={<Cadastro1 />} />
        <Route path="/dispositivos" element={<Dispositivos />} />
        <Route path="/entre" element={<Entre />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/homepage2" element={<HomePage2 />} />
        <Route path="/addnovodispositivo" element={<Addnovodispositivo />} />
        <Route path="/gastos" element={<Gastos />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);