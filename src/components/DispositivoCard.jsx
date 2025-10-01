import React from 'react';

import { BsOutlet } from 'react-icons/bs';

export default function DispositivoCard({ device, onToggle }) { 
    // Corrigi o erro de exportação, pois 'export default function' está correto para um componente funcional.

    // define as cores do ícone
    const activeColor = '#e60012'; // Cor primária (vermelho/ativo)
    const inactiveColor = 'var(--cor-texto-escuro)';

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
                {/* Ícone BsOutlet (Tomada) */}
                <BsOutlet 
                    size={24} 
                    style={{ 
                        // O ícone usa a cor primária quando ativo, e a cor inativa quando desligado.
                        color: device.status ? activeColor : inactiveColor 
                    }} 
                /> 
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