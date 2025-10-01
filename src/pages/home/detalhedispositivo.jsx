import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Removida a importação de 'react-icons/fa' para evitar erro de compilação.
// Os ícones serão substituídos por SVG inline.

// Ícone de Seta para Esquerda (Voltar) - SVG Inline
const FaArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5"></path>
        <path d="M12 19l-7-7 7-7"></path>
    </svg>
);

// Ícone de Lixeira (Remover) - SVG Inline
const FaTrash = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
);


export default function DetalheDispositivo({ devices, onRemoveDevice, onToggleDevice }) {
    const { id } = useParams(); // Pega o ID da URL
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    
    // Encontra o dispositivo pelo ID
    const device = devices.find(d => d.id === parseInt(id));

    if (!device) {
        return (
            <div className="device-list-container" style={{ padding: '20px' }}>
                Dispositivo não encontrado.
            </div>
        );
    }

    // Usamos um modal customizado em vez de window.confirm
    const handleRemove = () => {
        setShowModal(true);
    };
    
    const confirmRemove = () => {
        onRemoveDevice(device.id);
        setShowModal(false);
        navigate('/'); // Volta para a tela inicial
    };

    const cancelRemove = () => {
        setShowModal(false);
    };

    // O título (h1) do dispositivo na tela de detalhes será SEMPRE vermelho
    const titleColor = 'var(--cor-primaria)';

    return (
        <div className="device-list-container" style={{ paddingTop: '20px' }}>
            
            {/* --- INJEÇÃO DE ESTILO: CORRIGE A FONTE DOS BOTÕES DO MODAL (ESTILO MÍNIMO) --- */}
            <style jsx="true">{`
                /* O estilo inline no button será prioridade, mas mantemos isso para foco e fallback */
                .add-device-button {
                    outline: none !important;
                }
                .add-device-button:focus {
                    box-shadow: none !important;
                }
            `}</style>
            
            {/* Modal de Confirmação (Substituindo window.confirm) */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Confirmar remoção</h3>
                        <p>Tem certeza que deseja remover o dispositivo "{device.name}"?</p>
                        <div className="modal-actions">
                            <button 
                                onClick={confirmRemove} 
                                className="add-device-button" 
                                style={{ 
                                        backgroundColor: 'var(--cor-primaria)', 
                                        width: '48%', 
                                        marginRight: '4%',
                                        // FORÇA A FONTE INTER AQUI
                                        fontFamily: 'Inter, sans-serif'
                                    }}
                            >
                                Remover
                            </button>
                            <button 
                                onClick={cancelRemove} 
                                className="add-device-button" 
                                style={{ 
                                        backgroundColor: '#a6a6a6', 
                                        width: '48%',
                                        // FORÇA A FONTE INTER AQUI
                                        fontFamily: 'Inter, sans-serif'
                                    }}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Botão Voltar e Remover */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--cor-texto-claro)', fontSize: '20px', cursor: 'pointer' }}>
                    <FaArrowLeft />
                </button>
                <button onClick={handleRemove} style={{ background: 'none', border: 'none', color: 'var(--cor-primaria)', fontSize: '20px', cursor: 'pointer' }}>
                    <FaTrash />
                </button>
            </div>

            {/* Nome e Info do Dispositivo */}
            <h1 style={{ fontSize: '30px', color: titleColor, marginBottom: '10px' }}>{device.name}</h1>
            <p style={{ color: 'var(--cor-texto-escuro)', fontSize: '16px' }}>Local: {device.room} | Tipo: {device.type}</p>

            {/* Cartão de Status (Agora usa as classes CSS globais) */}
            <div className={`device-card ${device.status ? 'active' : ''}`} style={{ marginTop: '20px' }}>
                <div className="device-info">
                    {/* O nome do dispositivo é Status, que deve seguir a cor do texto principal */}
                    <h3 style={{ color: 'var(--cor-texto-claro)' }}>Status</h3> 
                    <p style={{ color: device.status ? 'var(--cor-texto-claro)' : 'var(--cor-texto-escuro)' }}>
                        {device.status ? 'LIGADO' : 'DESLIGADO'}
                    </p>
                </div>
                
                {/* Toggle para ligar/desligar na tela de detalhes (Usa classes CSS globais) */}
                {/* A classe 'active' no device-card garante que as cores do toggle sejam aplicadas via CSS */}
                <div 
                    className="device-toggle"
                    onClick={() => onToggleDevice(device.id)}
                >
                    <div className="device-toggle-circle"></div>
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
