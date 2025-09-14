import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./style.css";

const Dispositivos = () => {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  return (
    <div className="container">
      <div className="header">
        <img 
          src="/img/voltar.png" 
          alt="Voltar" 
          className="voltar-vector"
          onClick={() => navigate(-1)} // Adiciona a função de navegação no clique
          style={{ cursor: 'pointer' }} // Adiciona o estilo do ponteiro para indicar que é clicável
        />
        <h1>Tomada Inteligente 01</h1>
      </div>

      <div className="card power-card">
        <span className="power-text">POWER</span>
        <div className="power-status"></div>
      </div>

      <div className="card local-card">
        <div className="local-icon">
          <img src="/img/tomada.png" alt="Tomada Icone" />
        </div>
        <div>
          <div className="local-title">Local</div>
          <div className="local-subtitle">Sala de Estar</div>
          <div className="local-title">Definição</div>
          <div className="local-subtitle">Carregador de Celular</div>
        </div>
      </div>

      <div className="card energy-usage-card">
        <div className="tabs">
          <div className="tab-button active">Hoje</div>
          <div className="tab-button">Este Mês</div>
        </div>
        <div className="title">Uso de Energia</div>
        <div className="energy-metrics">
          <div className="energy-metric">
            <span className="label">Tempo de Execução</span>
            <span className="value">13 h</span>
          </div>
          <div className="energy-metric">
            <span className="label">Uso de Energia</span>
            <span className="value">0,001 kWh</span>
          </div>
          <div className="energy-metric">
            <span className="label">Potência Atual</span>
            <span className="value">&lt; 1 w R$</span>
          </div>
        </div>
        <button className="more-button">Mostrar mais</button>
      </div>

      <div className="actions-grid">
        <div className="action-item">
          <span className="label">Cronograma</span>
          <img src="/img/calendario.png" />
        </div>
        <div className="action-item">
          <span className="label">Cronômetro</span>
          <img src="/img/cronometro.png" />
        </div>
        <div className="action-item">
          <span className="label">Ausente</span>
          <img src="/img/ausente.png" />
        </div>
      </div>

      <div className="transfer-card">
        <div className="info-container">
          <span className="info-title">Transferência de Energia</span>
          <span className="info-label">Ative o modo inteligente para dormir</span>
        </div>
        <img className="brand" src="/img/logo-goodwe.png" alt="GOODWE Logo" />
      </div>
    </div>
  );
};

export default Dispositivos;