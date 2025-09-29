import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrash, FaPowerOff } from 'react-icons/fa';

export default function DetalheDispositivo({ devices, onRemoveDevice, onToggleDevice }) {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  
  // Encontra o dispositivo pelo ID
  const device = devices.find(d => d.id === parseInt(id));

  if (!device) {
    return <div className="device-list-container">Dispositivo não encontrado.</div>;
  }

  const handleRemove = () => {
    if (window.confirm(`Tem certeza que deseja remover o dispositivo ${device.name}?`)) {
      onRemoveDevice(device.id);
      navigate('/'); // Volta para a tela inicial
    }
  };

  return (
    <div className="device-list-container" style={{ paddingTop: '20px' }}>
      
      {/* Botão Voltar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--cor-texto-claro)', fontSize: '20px', cursor: 'pointer' }}>
          <FaArrowLeft />
        </button>
        <button onClick={handleRemove} style={{ background: 'none', border: 'none', color: 'var(--cor-alerta)', fontSize: '20px', cursor: 'pointer' }}>
          <FaTrash />
        </button>
      </div>

      <h1 style={{ fontSize: '30px', color: 'var(--cor-texto-claro)', marginBottom: '10px' }}>{device.name}</h1>
      <p style={{ color: 'var(--cor-texto-escuro)', fontSize: '16px' }}>Local: {device.room} | Tipo: {device.type}</p>

      {/* Cartão de Status */}
      <div className="device-card" style={{ marginTop: '20px', backgroundColor: device.status ? 'var(--cor-primaria)' : 'var(--cor-fundo-secundario)' }}>
        <div className="device-info">
          <h3 style={{ color: device.status ? 'white' : 'var(--cor-texto-claro)' }}>Status</h3>
          <p style={{ color: device.status ? 'white' : 'var(--cor-texto-escuro)' }}>
            {device.status ? 'LIGADO' : 'DESLIGADO'}
          </p>
        </div>
        
        {/* Toggle para ligar/desligar na tela de detalhes */}
        <div 
          className="device-toggle"
          style={{ backgroundColor: device.status ? 'var(--cor-fundo-secundario)' : '#cccccc' }}
          onClick={() => onToggleDevice(device.id)}
        >
          <div 
            className="device-toggle-circle"
            style={{ transform: device.status ? 'translateX(20px)' : 'translateX(2px)', backgroundColor: device.status ? 'var(--cor-sucesso)' : 'var(--cor-fundo-secundario)' }}
          ></div>
        </div>
      </div>

      {/* Informações Adicionais (Placeholder) */}
      <div className="consumption-card" style={{ marginTop: '20px' }}>
        <h3 className="card-label">Informações de Uso</h3>
        <p style={{ color: 'var(--cor-texto-claro)', margin: '10px 0' }}>Consumo Estimado: 0.15 kWh/hora</p>
        <p style={{ color: 'var(--cor-texto-claro)' }}>Próximo Agendamento: Nenhum</p>
      </div>
      
    </div>
  );
}