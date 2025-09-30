import React from 'react';
import { FaLightbulb } from 'react-icons/fa'; // lampada
export default function DispositivoCard({ device, onToggle }) { // corrigir erro de exportacao
  
// funcao chamada ao clicar no toggle
  const handleToggle = () => {
    onToggle(device.id);
  };

// define a classe css baseada no status
  const cardClassName = `device-card ${device.status ? 'active' : ''}`;

  return (
    // Usa o 'cardClassName' para aplicar o estilo ativo (verde) quando 'device.status' for true
    <div className={cardClassName}>
      
      {/* Ícone */}
      <div className="device-icon-container">
        {/* Aqui você pode usar ícones diferentes baseados em device.type se quiser */}
        <FaLightbulb /> 
      </div>

      {/* Informações do Dispositivo */}
      <div className="device-info">
        <h3>{device.name}</h3>
        {/* Mostra se está Ligado ou Desligado e o cômodo */}
        <p>
          {device.status ? 'Ligado' : 'Desligado'} | {device.room}
        </p>
      </div>

      {/* Toggle Switch (Botão de ligar/desligar) */}
      <div 
        className="device-toggle"
        onClick={handleToggle} // Chama a função que altera o status
      >
        <div className="device-toggle-circle"></div>
      </div>
      
    </div>
  );
}