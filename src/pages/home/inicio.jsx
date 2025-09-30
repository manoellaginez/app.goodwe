import React from 'react';
import DispositivoCard from "../../components/DispositivoCard.jsx";
import { FaBolt, FaDollarSign, FaPlus, FaPowerOff } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Inicio({ devices, onToggleDevice }) {
  const navigate = useNavigate();
  const activeCount = devices.filter(d => d.status).length;
  
  // Função para lidar com o clique no card (funcionalidade de detalhe)
  const handleCardClick = (deviceId) => {
    // Ao clicar no card, navegamos para a rota de detalhe.
    navigate(`/dispositivo/${deviceId}`);
  };

  // Cor específica para os títulos (Substitua por outra cor se quiser)
  const titleColor = '#e60012';  
  const buttonColor = titleColor;

  return (
    <div className="device-list-container">
      
      {/* HEADER E SAUDAÇÃO */}
      <div style={{ padding: '15px 0', color: 'var(--cor-texto-claro)' }}>
        <h1 
          className="page-title" 
          style={{ margin: '0 0 5px', fontSize: '24px', color: titleColor }} // ESTILO ESPECÍFICO APLICADO AQUI
        >
          Início
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--cor-texto-escuro)' }}>Olá, Manoella</p>
      </div>
      
      {/* CARDS DE STATUS (Dispositivos Ativos e Custo Hoje) */}
      <div className="status-cards-container">
        
        {/* Card 1: Dispositivos Ativos */}
        <div className="status-card">
          <div className="card-icon-circle" style={{ backgroundColor: 'var(--cor-sucesso)' }}>
            <FaPowerOff style={{ color: 'white' }} />
          </div>
          <p className="card-label">Ativos</p>
          <p className="card-value" style={{ color: 'var(--cor-texto-claro)' }}>{activeCount}</p>
        </div>

        {/* Card 2: Custo Hoje */}
        <div className="status-card">
          <div className="card-icon-circle" style={{ backgroundColor: titleColor }}>
            <FaDollarSign style={{ color: 'white' }} />
          </div>
          <p className="card-label">Custo hoje</p>
          <p className="card-value" style={{ color: 'var(--cor-texto-claro)' }}>R$ 0,00</p>
        </div>

      </div>
      
      {/* Card: Consumo Atual */}
      <div className="consumption-card">
        <h3 className="card-label">Consumo atual</h3>
        <p className="consumption-value">0,00</p>
        <p className="consumption-unit">kWh em uso agora</p>
        <div className="consumption-graph-placeholder"></div>
      </div>

      {/* BOTÃO ADICIONAR DISPOSITIVO */}
	     <Link to="/adicionar-dispositivo" className="add-device-button">
		    ADICIONAR DISPOSITIVO
	     </Link>
      
      {/* LISTA DE DISPOSITIVOS */}
      <h2 
        style={{ marginTop: '30px', fontSize: '20px', color: titleColor }} // ESTILO ESPECÍFICO APLICADO AQUI
      >
        Meus dispositivos
      </h2>
      
      {devices.map(device => (
        // CLICANDO AQUI VAI PARA A NOVA TELA DE DETALHES
        <div 
          key={device.id} 
          onClick={() => handleCardClick(device.id)}
          style={{ cursor: 'pointer' }}
        >
          <DispositivoCard 
            device={device} 
            onToggle={onToggleDevice} 
          />
        </div>
      ))}

      {devices.length === 0 && (
        <p style={{ textAlign: 'center', color: 'var(--cor-texto-escuro)' }}>Nenhum dispositivo instalado</p>
      )}
    </div>
  );
}
