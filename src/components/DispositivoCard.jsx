import React from 'react';
// Importamos o ícone de lâmpada. Se você tiver outros ícones instalados, pode usar eles.
import { FaLightbulb } from 'react-icons/fa';

// Usamos o 'export default' para corrigir o erro de exportação!
export default function DispositivoCard({ device, onToggle }) {
  
  // Função que será chamada ao clicar no toggle
  const handleToggle = () => {
    onToggle(device.id);
  };

  // Define a classe CSS baseada no status (true = ativo, false = inativo)
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