import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HomePage2 = () => {
  // Estado para controlar o slider ON/OFF
  const [isToggled, setIsToggled] = useState(true);

  // Função para alternar o estado do slider
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="container">
      <h1 className="page-title">Minha casa</h1>

      <div className="tabs-container">
        <div className="tab active">Todos os dispositivos</div>
        <div className="tab">Filtrar</div>
      </div>

      <div className="card device-card">
        <div className="card-content">
          <img src="/img/tomada.png" alt="Device Icon" className="device-icon" />
          <div className="device-info">
            <div className="device-name">Tomada Inteligente 01</div>
            <div className="device-details">Tomada 110V 10A</div>
            <div className="device-details">TV</div>
            <div className="device-location">Sala</div>
          </div>
          <div className="device-status">
            {/* Exibe "ON" ou "OFF" com base no estado */}
            <span>{isToggled ? 'ON' : 'OFF'}</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isToggled}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="add-items">
        <Link to="/addnovodispositivo" className="add-button-link">
          <button className="add-button">
            <img src="/img/plus.png" alt="" />
          </button>
        </Link>
      </div>

      <nav className="bottom-nav">
        <div className="nav-item">
          <img src="/img/chat.png" alt="Ícone de Chat" />
          <span>Chat</span>
        </div>
        <div className="nav-item">
          <img src="/img/gastos.png" alt="Ícone de Gastos" />
          <span>Gastos</span>
        </div>
        <div className="nav-item active">
          <div className="nav-circle">
            <img src="/img/home.png" alt="Ícone de Início" />
            <span>Início</span>
          </div>
        </div>
        <div className="nav-item">
          <img src="/img/conta.png" alt="Ícone de Conta" />
          <span>Conta</span>
        </div>
        <div className="nav-item">
          <img src="/img/mais.png" alt="Ícone de Menu" />
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default HomePage2;