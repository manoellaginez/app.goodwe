import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Cadastro from "./pages/auth/cadastro.jsx";
import Index from "./pages/auth/index.jsx";
import Dispositivos from "./pages/devices/dispositivos.jsx";
import Entre from "./pages/auth/entre.jsx";
import HomePage from "./pages/home/homepage.jsx";
import HomePage2 from "./pages/home/homepage2.jsx";
import Addnovodispositivo from "./pages/devices/addnovodispositivo.jsx";
import Gastos from "./pages/gastos/gastos.jsx"; 
import Chatbot from "./pages/chatbot/chatbot.jsx";
import DetalhesDispositivo from "./pages/devices/detalhesdispositivo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/cadastro" replace />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/index" element={<Index />} />
        <Route path="/dispositivos" element={<Dispositivos />} />
        <Route path="/detalhesdispositivo" element={<DetalhesDispositivo/>}/>
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
